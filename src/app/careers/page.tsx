import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles at City Centre Firm Corp.",
  openGraph: {
    title: "Careers — City Centre Firm Corp.",
    description: "Open roles at City Centre Firm Corp.",
    url: "https://citycentrefirm.com/careers",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at City Centre Firm Corp.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — City Centre Firm Corp.",
    description: "Open roles at City Centre Firm Corp.",
  },
};

const positions = [
  {
    title: "Engineering Lead",
    type: "Full-time",
    location: "Mississauga / Hybrid",
    description:
      "Lead engineering projects across multiple sectors, working with multidisciplinary teams from concept through completion.",
    closed: false,
  },
  {
    title: "Project Manager",
    type: "Full-time",
    location: "Mississauga / Hybrid",
    description:
      "Coordinate teams, manage budgets, ensure regulatory compliance, and drive on-time delivery on complex engineering projects.",
    closed: false,
  },
  {
    title: "AI Solutions Architect",
    type: "Full-time",
    location: "Remote",
    description:
      "Design and implement AI-powered systems for engineering workflows. Machine learning, data analytics, and automation.",
    closed: false,
  },
  {
    title: "Design Engineer",
    type: "Full-time",
    location: "Mississauga / Hybrid",
    description:
      "Produce engineering designs and technical drawings for commercial, residential, and industrial projects.",
    closed: true,
  },
];

export default function CareersPage() {
  return (
    <>
      <section
        className="relative pt-40 pb-16"
        aria-labelledby="careers-heading"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <h1
              id="careers-heading"
              className="text-4xl font-medium tracking-tight text-white sm:text-5xl"
            >
              Careers
            </h1>
            <p className="mt-4 text-sm text-white/40">
              Open roles below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative pb-32" aria-labelledby="positions-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 id="positions-heading" className="sr-only">
            Open Positions
          </h2>

          <div className="divide-y divide-white/5 border-y border-white/5">
            {positions.map((position, i) => (
              <AnimatedSection key={position.title} delay={i * 60}>
                <article className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-base font-medium text-white">
                        {position.title}
                      </h3>
                      <span className="text-xs text-white/30">
                        {position.type} · {position.location}
                      </span>
                    </div>
                    <p className="max-w-2xl text-sm leading-relaxed text-white/50">
                      {position.description}
                    </p>
                  </div>
                  {position.closed ? (
                    <span className="shrink-0 text-xs uppercase tracking-wider text-white/30">
                      Closed
                    </span>
                  ) : (
                    <Link
                      href="/contact"
                      className="group inline-flex shrink-0 items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                    >
                      Apply
                      <span
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </Link>
                  )}
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
