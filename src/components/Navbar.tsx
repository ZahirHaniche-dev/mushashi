"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/le-club", label: "Le Club" },
  { href: "/actualites", label: "Actualités" },
  { href: "/blog", label: "Blog" },
  { href: "/horaires", label: "Horaires" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fbfaf7] border-b border-[rgba(26,5,0,0.08)]">
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full border-2 border-[#C41E3A] flex items-center justify-center bg-white">
            <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
              <circle cx="20" cy="20" r="19" stroke="#C41E3A" strokeWidth="1.5" />
              <text
                x="20"
                y="25"
                textAnchor="middle"
                fontSize="14"
                fontFamily="serif"
                fill="#C41E3A"
                fontWeight="bold"
              >
                武
              </text>
            </svg>
          </div>
          <div className="leading-tight">
            <div
              className="font-mincho text-base font-bold text-[#1a0500]"
              style={{ fontFamily: "var(--font-mincho), serif" }}
            >
              Musashi
            </div>
            <div className="text-[9px] tracking-[0.15em] uppercase text-[#8b7355] font-gothic">
              Karaté Club · Montmagny
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-1.5 text-[13px] font-gothic transition-colors relative ${
                pathname === href
                  ? "text-[#C41E3A] font-medium"
                  : "text-[#1a0500] hover:text-[#C41E3A]"
              }`}
            >
              {label}
              {pathname === href && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C41E3A] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden lg:flex items-center gap-2 bg-[#C41E3A] hover:bg-[#a01830] text-white text-[13px] font-medium px-4 py-2.5 rounded-sm transition-colors shrink-0"
        >
          <span>🥋</span>
          <span>Rejoindre le club</span>
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2"
          aria-label="Menu"
        >
          <div className="w-5 space-y-1">
            <span
              className={`block h-0.5 bg-[#1a0500] transition-all ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-[#1a0500] transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-[#1a0500] transition-all ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[rgba(26,5,0,0.08)] bg-[#fbfaf7] px-6 py-4 flex flex-col gap-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`py-2 text-sm ${
                pathname === href
                  ? "text-[#C41E3A] font-medium"
                  : "text-[#1a0500]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-[#C41E3A] text-white text-sm font-medium px-4 py-2.5 rounded-sm text-center"
          >
            🥋 Rejoindre le club
          </Link>
        </div>
      )}
    </header>
  );
}
