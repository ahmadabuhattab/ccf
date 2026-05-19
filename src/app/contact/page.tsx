import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with City Centre Firm Corp.",
  openGraph: {
    title: "Contact — City Centre Firm Corp.",
    description: "Get in touch with City Centre Firm Corp.",
    url: "https://citycentrefirm.com/contact",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact City Centre Firm Corp.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — City Centre Firm Corp.",
    description: "Get in touch with City Centre Firm Corp.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section
        className="relative pt-40 pb-16"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <AnimatedSection>
            <h1
              id="contact-heading"
              className="text-4xl font-medium tracking-tight text-white sm:text-5xl"
            >
              Contact
            </h1>
            <p className="mt-4 text-sm text-white/40">
              We reply within one business day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative pb-24" aria-label="Contact form">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <AnimatedSection delay={100}>
            <ContactForm />
          </AnimatedSection>

          <AnimatedSection delay={200} className="mt-8 text-center">
            <p className="text-xs text-white/30">
              Or email{" "}
              <a
                href="mailto:hr@citycentrefirm.com"
                className="text-white/50 transition-colors hover:text-white"
              >
                hr@citycentrefirm.com
              </a>{" "}
              directly.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
