import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – Get in Touch",
  description:
    "Contact City Centre Firm Corp. to discuss your next engineering project. Whether it's design, project management, or technology integration, we're ready to elevate your project.",
  openGraph: {
    title: "Contact Us – Get in Touch | City Centre Firm Corp.",
    description:
      "Contact City Centre Firm Corp. to discuss your next engineering project. We're ready to deliver excellence.",
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
    title: "Contact Us – Get in Touch | City Centre Firm Corp.",
    description:
      "Contact City Centre Firm Corp. to discuss your next engineering project.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20" aria-labelledby="contact-heading">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60 backdrop-blur-sm mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Let&apos;s Talk
            </span>
            <h1
              id="contact-heading"
              className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Get in
              <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
              Ready to start your next engineering project? Fill out the form below
              and our team will get back to you within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative pb-32" aria-label="Contact form">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Let&apos;s build something extraordinary
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/40">
                    Whether you need engineering expertise, strategic
                    project management, or AI-powered technology solutions,
                    we&apos;re here to help bring your vision to life.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                      <svg
                        className="h-5 w-5 text-primary-light"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Email</h3>
                      <a
                        href="mailto:hr@citycentrefirm.com"
                        className="text-sm text-white/40 transition-colors hover:text-primary-light"
                      >
                        hr@citycentrefirm.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                      <svg
                        className="h-5 w-5 text-primary-light"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        Response Time
                      </h3>
                      <p className="text-sm text-white/40">
                        Within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={200} className="lg:col-span-3">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
