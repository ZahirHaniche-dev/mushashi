import Link from "next/link";

const tarifs = [
  {
    cat: "Baby Karaté",
    age: "4–5 ans",
    annuel: "150 €",
    mensuel: "~15 €/mois",
    desc: "Découverte du mouvement et des arts martiaux en douceur.",
    featured: false,
  },
  {
    cat: "Enfants",
    age: "6–12 ans",
    annuel: "200 €",
    mensuel: "~20 €/mois",
    desc: "Apprentissage des bases techniques, katas et kumite initiation.",
    featured: false,
  },
  {
    cat: "Adolescents",
    age: "13–17 ans",
    annuel: "230 €",
    mensuel: "~23 €/mois",
    desc: "Perfectionnement technique et préparation aux grades.",
    featured: true,
  },
  {
    cat: "Adultes",
    age: "18 ans et +",
    annuel: "280 €",
    mensuel: "~28 €/mois",
    desc: "Pratique complète, compétition possible et passage de grades.",
    featured: false,
  },
];

export default function TarifsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative bg-[#fbfaf7] overflow-hidden pt-16 pb-24 px-6">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-[#C41E3A] opacity-10 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto">
          <nav className="text-xs text-[#8b7355] mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-[#C41E3A] transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span>Tarifs</span>
          </nav>
          <div className="kanji-label mb-6">
            <span className="text-lg">月謝</span>
            <span>Cotisations 2025 – 2026</span>
          </div>
          <h1
            className="font-mincho text-5xl lg:text-7xl font-black text-[#1a0500] mb-6"
            style={{ fontFamily: "var(--font-mincho), serif" }}
          >
            Des tarifs justes,
            <br />
            sans surprise
          </h1>
          <p className="text-xl text-[#8b7355] max-w-2xl leading-relaxed">
            Cotisation annuelle incluant l&apos;ensemble des cours de la
            catégorie. La licence FFKaraté et l&apos;assurance sont à ajouter
            une fois par saison.
          </p>
        </div>
      </section>

      {/* TARIFS CARDS */}
      <section className="py-16 px-6 bg-[#fbfaf7]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tarifs.map((t) => (
            <div
              key={t.cat}
              className={`relative border p-8 transition-all ${
                t.featured
                  ? "border-[#C41E3A] bg-white shadow-lg"
                  : "border-[rgba(26,5,0,0.12)] hover:border-[#C41E3A] hover:shadow"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-8 bg-[#C41E3A] text-white text-xs px-3 py-1 tracking-wider uppercase">
                  Populaire
                </div>
              )}
              <p className="text-xs text-[#8b7355] tracking-wider uppercase mb-1">
                {t.age}
              </p>
              <h3
                className="font-mincho text-2xl font-bold text-[#1a0500] mb-4"
                style={{ fontFamily: "var(--font-mincho), serif" }}
              >
                {t.cat}
              </h3>
              <div
                className="font-mincho text-4xl font-black text-[#C41E3A] mb-1"
                style={{ fontFamily: "var(--font-mincho), serif" }}
              >
                {t.annuel}
              </div>
              <div className="text-xs text-[#8b7355] mb-6">{t.mensuel}</div>
              <p className="text-sm text-[#1a0500] leading-relaxed mb-8">
                {t.desc}
              </p>
              <Link
                href="/contact"
                className={`block text-center text-sm font-medium py-3 rounded-sm transition-colors ${
                  t.featured
                    ? "bg-[#C41E3A] text-white hover:bg-[#a01830]"
                    : "border border-[#C41E3A] text-[#C41E3A] hover:bg-[#C41E3A] hover:text-white"
                }`}
              >
                S&apos;inscrire
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* INFO SUPPLEMENTAIRE */}
      <section className="py-16 px-6 bg-[#f0e8e0]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Licence FFKaraté",
              text: "À ajouter à la cotisation : environ 30–50 € selon l'âge. Obligatoire pour la pratique.",
            },
            {
              title: "Cours d'essai",
              text: "Premier cours gratuit pour tous les nouveaux adhérents. Sans engagement.",
            },
            {
              title: "Paiement",
              text: "Paiement en une ou plusieurs fois (chèques ou virement). Tarif famille disponible.",
            },
          ].map((info) => (
            <div key={info.title} className="border-l-2 border-[#C41E3A] pl-6">
              <h4
                className="font-mincho font-bold text-[#1a0500] mb-2"
                style={{ fontFamily: "var(--font-mincho), serif" }}
              >
                {info.title}
              </h4>
              <p className="text-sm text-[#8b7355] leading-relaxed">{info.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
