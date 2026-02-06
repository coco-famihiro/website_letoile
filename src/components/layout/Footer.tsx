import Link from "next/link";
import { siteConfig, navLinks } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="gradient-sky text-lavender">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl text-star-gold font-bold mb-2">
              星空食堂
            </h3>
            <p className="text-xs tracking-widest text-lavender/60 mb-3">
              L&apos;Étoile
            </p>
            <p className="text-sm text-lavender/80 leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">ナビゲーション</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-lavender/80 hover:text-star-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info & SNS */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">店舗情報</h4>
            <div className="space-y-2 text-sm text-lavender/80">
              <p>{siteConfig.hours}</p>
              <p>定休日: {siteConfig.closedDay}</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href={siteConfig.sns.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lavender/60 hover:text-star-gold transition-colors"
                aria-label="X"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-lavender/20 text-center">
          <p className="text-xs text-lavender/40">
            &copy; 2026 {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
