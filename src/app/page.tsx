"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    title: "Website Design",
    description:
      "Bespoke digital experiences that captivate audiences and drive conversions. We craft pixel-perfect interfaces that merge aesthetics with performance.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    ),
    gradient: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Digital Strategy",
    description:
      "Data-driven strategies that position your brand for exponential growth. We analyze, plan, and execute campaigns that deliver measurable results.",
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
    title: "AI Automation",
    description:
      "Intelligent automation solutions that streamline operations and unlock new possibilities. We build AI-powered systems that give you a competitive edge.",
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
            Premium Digital Agency
          </div>

          <h1 className="text-7xl font-bold tracking-tight text-white sm:text-8xl lg:text-9xl">
            Elevate
          </h1>

          <p className="mx-auto max-w-xl text-lg text-white/50 sm:text-xl">
            We craft digital experiences that transform brands and drive
            extraordinary growth.
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
            Three pillars of digital excellence that drive transformative results
            for ambitious brands.
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

function TestimonialSection() {
  return (
    <section className="relative py-32 overflow-hidden" aria-labelledby="testimonial-heading">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-4">
            Testimonials
          </span>
          <h2 id="testimonial-heading" className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Client Success
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <figure className="mx-auto max-w-3xl">
            <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-10 backdrop-blur-sm sm:p-14">
              {/* Quote mark */}
              <div className="absolute -top-4 left-10 text-6xl font-serif text-primary/30">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="mb-6 flex gap-1" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-lg leading-relaxed text-white/70 sm:text-xl">
                City Centre Firm transformed our online presence! Their expertise
                in website design, digital strategy, and AI automation has helped
                us grow tremendously. Highly recommend their services for any
                business!
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-primary to-accent">
                  <Image
                    src="/images/avatar.jpg"
                    alt="Client avatar"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Satisfied Client
                  </p>
                  <p className="text-xs text-white/40">Business Owner</p>
                </div>
              </figcaption>
            </div>
          </figure>
        </AnimatedSection>
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
              Stay ahead with insights on digital strategy, AI innovation, and
              web design trends.
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
      <TestimonialSection />
      <SignupSection />
    </>
  );
}
