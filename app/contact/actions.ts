"use server";

import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

export type ContactState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: hidden field that humans never fill.
  if ((formData.get("company") as string)?.trim()) {
    return { ok: true, message: "Thanks. We will be in touch soon." };
  }

  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const projectType = (formData.get("projectType") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid email.";
  if (message.length < 10) fieldErrors.message = "A sentence or two helps us reply well.";
  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors, message: "Please check the highlighted fields." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      message:
        "The form is not connected to email yet. Please reach us directly at " +
        siteConfig.email + ".",
    };
  }

  const resend = new Resend(apiKey);
  const fromAddress = process.env.CONTACT_FROM ?? "Azure Pools & Spas <onboarding@resend.dev>";

  const safe = (s: string) =>
    s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c] as string);

  try {
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [siteConfig.email],
      replyTo: email,
      subject: `New enquiry from ${name}${projectType ? ` - ${projectType}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        projectType ? `Project type: ${projectType}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;color:#0c2230;line-height:1.6">
          <h2 style="color:#06283d;margin:0 0 12px">New website enquiry</h2>
          <p style="margin:0 0 4px"><strong>Name:</strong> ${safe(name)}</p>
          <p style="margin:0 0 4px"><strong>Email:</strong> ${safe(email)}</p>
          ${phone ? `<p style="margin:0 0 4px"><strong>Phone:</strong> ${safe(phone)}</p>` : ""}
          ${projectType ? `<p style="margin:0 0 4px"><strong>Project type:</strong> ${safe(projectType)}</p>` : ""}
          <p style="margin:16px 0 4px"><strong>Message:</strong></p>
          <p style="margin:0;white-space:pre-wrap">${safe(message)}</p>
        </div>
      `,
    });

    if (error) {
      return {
        ok: false,
        message: `We could not send that just now. Please email us at ${siteConfig.email}.`,
      };
    }

    return { ok: true, message: "Thanks. Your note is on its way and we will reply soon." };
  } catch {
    return {
      ok: false,
      message: `We could not send that just now. Please email us at ${siteConfig.email}.`,
    };
  }
}
