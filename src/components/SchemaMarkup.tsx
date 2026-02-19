export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "City Centre Firm",
    url: "https://citycentrefirm.com",
    logo: "https://citycentrefirm.com/images/og-image.jpg",
    description:
      "Premium digital agency specializing in website design, digital strategy, and AI automation.",
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
      "Web Design",
      "Digital Strategy",
      "AI Automation",
      "UI/UX Design",
      "Digital Marketing",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "City Centre Firm",
    url: "https://citycentrefirm.com",
    email: "hr@citycentrefirm.com",
    description:
      "Premium digital agency specializing in website design, digital strategy, and AI automation.",
    priceRange: "$$$$",
    image: "https://citycentrefirm.com/images/og-image.jpg",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "City Centre Firm",
    url: "https://citycentrefirm.com",
    description:
      "Premium digital agency specializing in website design, digital strategy, and AI automation.",
    publisher: {
      "@type": "Organization",
      name: "City Centre Firm",
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
