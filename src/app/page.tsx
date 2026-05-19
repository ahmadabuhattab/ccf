import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    title: "Engineering Design & Analysis",
    description:
      "Design, analysis, and technical documentation for commercial, residential, and industrial projects.",
  },
  {
    title: "Project Management & Consulting",
    description:
      "Planning, coordination, and oversight from concept to completion.",
  },
  {
    title: "Technology & AI Integration",
    description:
      "Automation, data tooling, and AI systems for engineering workflows.",
  },
];

function HeroSection() {
  return (
    <section
      className="relative flex h-screen w-full flex-col items-center justify-center px-6"
      aria-label="Hero"
    >
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
          City Centre Firm Corp.
        </h1>
        <p className="mx-auto max-w-md text-sm text-white/40 sm:text-base">
          Engineering, project management, and technology integration.
        </p>
      </div>

      <Link
        href="/contact"
        className="mt-12 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
      >
        Contact
        <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      className="relative border-t border-white/5 py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <h2
            id="services-heading"
            className="text-2xl font-medium tracking-tight text-white sm:text-3xl"
          >
            Services
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-white/5 md:grid-cols-3">
          {services.map((service) => (
            <AnimatedSection key={service.title}>
              <article className="h-full bg-[#0a0a0a] p-8">
                <h3 className="mb-3 text-base font-medium text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {service.description}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
    </>
  );
}
