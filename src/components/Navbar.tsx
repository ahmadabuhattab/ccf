"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-80"
          aria-label="City Centre Firm Corp. – Home"
        >
          <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop,f=png/YbNBolLk6QCQ5kqr/img_6743_monlogo-AzGN3RWDpwTxG7ye.jpg"
            alt="City Centre Firm Corp. logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-cover"
            priority
          />
          <span className="hidden sm:inline">City Centre Firm Corp.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                pathname === link.href
                  ? "text-white bg-white/10"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 gradient-btn rounded-lg px-5 py-2.5 text-sm font-semibold text-white"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-2xl transition-all duration-500 md:hidden ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-4xl font-bold transition-all duration-500 ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } ${
                  pathname === link.href
                    ? "text-primary-light"
                    : "text-white/70 hover:text-white"
                }`}
                style={{ transitionDelay: isOpen ? `${i * 100 + 200}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`mt-4 gradient-btn rounded-xl px-8 py-4 text-lg font-semibold text-white transition-all duration-500 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
