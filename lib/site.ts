export const siteConfig = {
  name: "Azure Pools & Spas",
  shortName: "Azure",
  url: "https://azure-pools-spas.vercel.app",
  description:
    "Azure Pools & Spas designs and builds custom swimming pools, spas, and water features. A considered process from first sketch to first swim.",
  tagline: "Custom pools and spas, built to last a lifetime.",
  email: "hello@azurepoolsandspas.com",
  phone: "(555) 000-0100",
  phoneHref: "tel:+15550000100",
  serviceArea: "Available for projects across the region",
  hours: "Monday to Friday, 9am to 5pm",
  social: {
    instagram: "https://instagram.com",
    houzz: "https://houzz.com",
  },
} as const;

export const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Process" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
