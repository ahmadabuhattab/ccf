import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Careers – Join Our Team",
  description:
    "Join City Centre Firm Corp. and build the future of engineering. Explore open positions in engineering, project management, AI solutions, and design.",
  openGraph: {
    title: "Careers – Join Our Team | City Centre Firm Corp.",
    description:
      "Join City Centre Firm Corp. and build the future of engineering. Explore open positions in engineering, project management, AI solutions, and design.",
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
    title: "Careers – Join Our Team | City Centre Firm Corp.",
    description:
      "Join City Centre Firm Corp. and build the future of engineering. Explore open positions.",
  },
};

const positions = [
  {
    title: "Engineering Lead",
    type: "Full-time",
    location: "Mississauga / Hybrid",
    description:
      "Lead and oversee engineering projects across multiple sectors. You'll work with multidisciplinary teams to deliver safe, efficient, and innovative solutions from concept through to completion.",
    tags: ["AutoCAD", "Design", "Technical Review", "Standards"],
    closed: false,
  },
  {
    title: "Project Manager",
    type: "Full-time",
    location: "Mississauga / Hybrid",
    description:
      "Lead complex engineering projects from inception to completion. You'll coordinate teams, manage budgets, ensure regulatory compliance, and drive on-time delivery for high-stakes initiatives.",
    tags: ["PMP", "Scheduling", "Risk Management", "Stakeholders"],
    closed: false,
  },
  {
    title: "AI Solutions Architect",
    type: "Full-time",
    location: "Remote",
    description:
      "Design and implement AI-powered solutions that modernize engineering workflows. You'll work with machine learning, data analytics, and automation tools to deliver intelligent systems.",
    tags: ["Python", "LLMs", "Machine Learning", "APIs"],
    closed: true,
  },
  {
    title: "Design Engineer",
    type: "Full-time",
    location: "Mississauga / Hybrid",
    description:
      "Create engineering designs for commercial, residential, and industrial projects. You'll perform analysis, produce detailed drawings, and collaborate with architects and senior engineers to ensure quality and compliance.",
    tags: ["Revit", "BIM", "Technical Drawings", "Analysis"],
    closed: false,
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20" aria-labelledby="careers-heading">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60 backdrop-blur-sm mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              We&apos;re Hiring
            </span>
            <h1
              id="careers-heading"
              className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Build the Future
              <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                With Us
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
              Join a team of engineers, innovators, and strategists shaping the
              built environment. We&apos;re looking for exceptional talent to drive
              the next wave of engineering excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Positions */}
      <section className="relative pb-32" aria-labelledby="positions-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 id="positions-heading" className="sr-only">Open Positions</h2>
          </AnimatedSection>

          <div className="space-y-6">
            {positions.map((position, i) => (
              <AnimatedSection key={position.title} delay={i * 100}>
                <article className={`relative overflow-hidden rounded-2xl border bg-surface/50 p-8 backdrop-blur-sm sm:p-10 ${position.closed ? "border-white/[0.03] opacity-60" : "card-hover group border-white/5"}`}>
                  {position.closed && (
                    <div className="absolute top-5 right-5 z-20 flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
                        Position Filled
                      </span>
                    </div>
                  )}
                  <div className={`flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between ${position.closed ? "select-none" : ""}`}>
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className={`text-xl font-bold ${position.closed ? "text-white/50" : "text-white"}`}>
                          {position.title}
                        </h3>
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${position.closed ? "bg-white/5 text-white/30" : "bg-primary/10 text-primary-light"}`}>
                          {position.type}
                        </span>
                      </div>
                      <p className={`flex items-center gap-1.5 text-sm ${position.closed ? "text-white/25" : "text-white/40"}`}>
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z"
                          />
                        </svg>
                        {position.location}
                      </p>
                      <p className={`text-sm leading-relaxed ${position.closed ? "text-white/30" : "text-white/50"}`}>
                        {position.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {position.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-lg border px-3 py-1 text-xs ${position.closed ? "border-white/[0.03] bg-white/[0.02] text-white/20" : "border-white/5 bg-white/5 text-white/40"}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    {position.closed ? (
                      <span className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/30 cursor-not-allowed">
                        Closed
                      </span>
                    ) : (
                      <Link
                        href="/contact"
                        className="gradient-btn shrink-0 rounded-xl px-6 py-3 text-center text-sm font-semibold text-white"
                      >
                        Apply Now
                      </Link>
                    )}
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={500} className="mt-16 text-center">
            <p className="text-white/40">
              Don&apos;t see the right role?{" "}
              <Link
                href="/contact"
                className="font-medium text-primary-light transition-colors hover:text-white underline underline-offset-4"
              >
                Reach out anyway
              </Link>
              . We&apos;re always looking for exceptional talent.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
