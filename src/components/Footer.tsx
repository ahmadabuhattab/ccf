import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop,f=png/YbNBolLk6QCQ5kqr/img_6743_monlogo-AzGN3RWDpwTxG7ye.jpg"
                alt="City Centre Firm Corp. logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg object-cover"
              />
              <span className="text-lg font-bold text-white">
                City Centre Firm Corp.
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/40">
              Premium engineering services firm specializing in civil &amp;
              structural engineering, project management, and technology
              integration.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hr@citycentrefirm.com"
                  className="text-sm text-white/40 transition-colors hover:text-primary-light"
                >
                  hr@citycentrefirm.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-white/30">
            &copy; 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
