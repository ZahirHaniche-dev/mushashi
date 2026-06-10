import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a0500] text-[#f5f0e8]">
      <div className="max-w-[1440px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div
            className="font-mincho text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-mincho), serif" }}
          >
            Musashi
          </div>
          <div className="text-xs tracking-[0.15em] uppercase text-[#8b7355] mb-4">
            Karaté Club · Montmagny
          </div>
          <p className="text-sm text-[#c4b49a] leading-relaxed">
            Club de karaté traditionnel dans le Val-d&apos;Oise. Ouvert à tous
            les niveaux depuis l&apos;enfant jusqu&apos;à l&apos;adulte.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xs tracking-[0.15em] uppercase text-[#8b7355] mb-4">
            Navigation
          </h4>
          <nav className="flex flex-col gap-2">
            {[
              { href: "/", label: "Accueil" },
              { href: "/le-club", label: "Le Club" },
              { href: "/horaires", label: "Horaires" },
              { href: "/tarifs", label: "Tarifs" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-[#c4b49a] hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs tracking-[0.15em] uppercase text-[#8b7355] mb-4">
            Contact
          </h4>
          <div className="space-y-2 text-sm text-[#c4b49a]">
            <p>Dojo de Montmagny</p>
            <p>Salle des sports, Montmagny</p>
            <p>Val-d&apos;Oise (95)</p>
            <a
              href="mailto:contact@musashi-karate.fr"
              className="text-[#C41E3A] hover:text-[#e02040] transition-colors block mt-2"
            >
              contact@musashi-karate.fr
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.06)] px-6 py-4">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#8b7355]">
          <span>© 2025 Musashi Karaté Club Montmagny</span>
          <span
            className="font-mincho"
            style={{ fontFamily: "var(--font-mincho), serif" }}
          >
            空手道
          </span>
        </div>
      </div>
    </footer>
  );
}
