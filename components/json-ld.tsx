import { siteConfig } from "@/lib/site";

// LocalBusiness structured data. Contact details are generic by design.
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/photos/hero.jpg`,
    priceRange: "$$$",
    areaServed: siteConfig.serviceArea,
    knowsAbout: [
      "Custom swimming pool design",
      "Spa construction",
      "Water features",
      "Pool renovation",
      "Outdoor living",
    ],
    openingHours: "Mo-Fr 09:00-17:00",
    sameAs: [siteConfig.social.instagram, siteConfig.social.houzz],
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
