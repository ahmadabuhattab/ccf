import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-white/5 bg-[#0a0a0a]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/30">
            © 2026 City Centre Firm Corp.
          </p>

          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:hr@citycentrefirm.com"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              hr@citycentrefirm.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
