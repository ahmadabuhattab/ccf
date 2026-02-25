export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "City Centre Firm Corp.",
    url: "https://citycentrefirm.com",
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop,f=png/YbNBolLk6QCQ5kqr/img_6743_monlogo-AzGN3RWDpwTxG7ye.jpg",
    description:
      "Premium engineering services company specializing in design, project management, and technology integration.",
    email: "hr@citycentrefirm.com",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hr@citycentrefirm.com",
      contactType: "customer service",
    },
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
    knowsAbout: [
      "Engineering Design",
      "Engineering Analysis",
      "Project Management",
      "Technology Integration",
      "AI Solutions",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "City Centre Firm Corp.",
    url: "https://citycentrefirm.com",
    email: "hr@citycentrefirm.com",
    description:
      "Premium engineering services company specializing in design, project management, and technology integration.",
    priceRange: "$$$$",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop,f=png/YbNBolLk6QCQ5kqr/img_6743_monlogo-AzGN3RWDpwTxG7ye.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      addressCountry: "CA",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "City Centre Firm Corp.",
    url: "https://citycentrefirm.com",
    description:
      "Premium engineering services company specializing in design, project management, and technology integration.",
    publisher: {
      "@type": "Organization",
      name: "City Centre Firm Corp.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
