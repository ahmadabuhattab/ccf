"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    title: "Engineering Design & Analysis",
    description:
      "Comprehensive engineering solutions for commercial, residential, and industrial projects. We deliver robust designs and technical analysis that meet the highest standards of quality and performance.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
    gradient: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Project Management & Consulting",
    description:
      "Expert project management and strategic consulting that keeps complex initiatives on schedule and on budget. We guide projects from concept through completion with precision and accountability.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v-5.5m3.25 5.5V8.25" />
      </svg>
    ),
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    title: "Technology & AI Integration",
    description:
      "Cutting-edge technology solutions and AI-powered systems that modernize engineering workflows. We integrate smart automation, data analytics, and intelligent design tools to drive efficiency.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/20",
    iconColor: "text-emerald-400",
  },
];

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden" aria-label="Hero">
      {/* Video Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Fallback gradient when no video */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
      </motion.div>

      {/* Overlay */}
      <div className="hero-gradient absolute inset-0" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Engineering Services
          </div>

          <h1 className="text-7xl font-bold tracking-tight text-white sm:text-8xl lg:text-9xl">
            Elevate
          </h1>

          <p className="mx-auto max-w-xl text-lg text-white/50 sm:text-xl">
            Engineering excellence that transforms industries and drives
            extraordinary results.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="gradient-btn rounded-xl px-8 py-4 text-sm font-semibold tracking-wide text-white uppercase"
            >
              Create it
            </Link>
            <Link
              href="/careers"
              className="red-btn rounded-xl px-8 py-4 text-sm font-semibold tracking-wide text-white uppercase"
            >
              Careers
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-white/30">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-8 w-5 rounded-full border border-white/20 flex items-start justify-center p-1"
          >
            <div className="h-1.5 w-1 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden" aria-labelledby="services-heading">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-4">
            What We Do
          </span>
          <h2 id="services-heading" className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/40">
            Three pillars of engineering excellence that drive transformative results
            for ambitious projects.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`card-hover group relative overflow-hidden rounded-2xl border ${service.borderColor} bg-gradient-to-b ${service.gradient} p-8 backdrop-blur-sm`}
            >
              <div className="relative z-10">
                <div
                  className={`mb-6 inline-flex items-center justify-center rounded-xl bg-white/5 p-3 ${service.iconColor}`}
                >
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {service.description}
                </p>
              </div>
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignupSection() {
  return (
    <section className="relative py-32 overflow-hidden" aria-labelledby="signup-heading">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative mx-auto max-w-2xl rounded-2xl border border-white/5 bg-surface/50 p-10 text-center backdrop-blur-sm sm:p-14">
            <h2 id="signup-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Submit your information now
            </h2>
            <p className="mt-4 text-white/40">
              Stay ahead with insights on engineering innovation, project
              updates, and industry trends.
            </p>
            <form
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                if (email) {
                  alert("Thank you for subscribing!");
                  form.reset();
                }
              }}
            >
              <label htmlFor="signup-email" className="sr-only">
                Email address
              </label>
              <input
                id="signup-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 sm:rounded-r-none"
              />
              <button
                type="submit"
                className="gradient-btn rounded-xl px-8 py-3.5 text-sm font-semibold text-white sm:rounded-l-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <SignupSection />
    </>
  );
}
