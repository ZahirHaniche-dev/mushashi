import Link from "next/link";

export default function LeClubPage() {
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
            <span>Le Club</span>
          </nav>
          <div className="kanji-label mb-6">
            <span className="text-lg">道場</span>
            <span>Le Dojo</span>
          </div>
          <h1
            className="font-mincho text-5xl lg:text-7xl font-black text-[#1a0500] mb-6"
            style={{ fontFamily: "var(--font-mincho), serif" }}
          >
            L&apos;esprit Musashi
          </h1>
          <p className="text-xl text-[#8b7355] max-w-2xl leading-relaxed">
            Un club familial dédié au karaté traditionnel, où la rigueur
            technique se conjugue à la transmission de valeurs fortes. Bienvenue
            sur le tatami.
          </p>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="py-24 px-6 bg-[#fbfaf7]">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="kanji-label mb-4">
              <span className="text-lg">歴史</span>
              <span>Notre histoire</span>
            </div>
            <h2
              className="font-mincho text-4xl font-bold text-[#1a0500] mb-6"
              style={{ fontFamily: "var(--font-mincho), serif" }}
            >
              Nés de la passion
              <br />
              du karaté traditionnel
            </h2>
            <div className="space-y-4 text-[#1a0500] leading-relaxed">
              <p>
                Fondé il y a plus de quinze ans à Montmagny, le club Musashi est
                né de la volonté de transmettre le karaté dans son esprit le plus
                authentique.
              </p>
              <p>
                Notre approche pédagogique s&apos;appuie sur les valeurs
                fondamentales des arts martiaux japonais : le respect, la
                persévérance et le dépassement de soi.
              </p>
              <p>
                Affilié à la Fédération Française de Karaté (FFKaraté), notre
                club accueille pratiquants de tous niveaux, des plus jeunes (dès
                6 ans) aux adultes.
              </p>
            </div>
          </div>
          <div className="bg-[#e8ddd0] aspect-square flex items-center justify-center rounded-sm overflow-hidden">
            <span
              className="font-mincho text-[160px] text-[#C41E3A] opacity-30 font-black"
              style={{ fontFamily: "var(--font-mincho), serif" }}
            >
              武
            </span>
          </div>
        </div>
      </section>

      {/* SENSEI */}
      <section className="bg-seigaiha py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="kanji-label mb-6" style={{ color: "#C41E3A" }}>
            <span className="text-lg">師範</span>
            <span>L&apos;équipe encadrante</span>
          </div>
          <h2
            className="font-mincho text-4xl font-bold text-[#f5f0e8] mb-12"
            style={{ fontFamily: "var(--font-mincho), serif" }}
          >
            Des enseignants passionnés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sensei Principal",
                grade: "4e Dan — FFKaraté",
                bio: "Passionné de karaté traditionnel depuis l'enfance, il transmet sa discipline avec rigueur et bienveillance.",
              },
              {
                name: "Professeur Adjoint",
                grade: "2e Dan — FFKaraté",
                bio: "Spécialiste des cours jeunesse, il met son énergie au service de la progression des plus jeunes pratiquants.",
              },
            ].map((s) => (
              <div
                key={s.name}
                className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-8"
              >
                <div className="w-16 h-16 rounded-full bg-[#C41E3A] flex items-center justify-center mb-4">
                  <span
                    className="font-mincho text-2xl text-white font-bold"
                    style={{ fontFamily: "var(--font-mincho), serif" }}
                  >
                    師
                  </span>
                </div>
                <h3
                  className="font-mincho text-xl font-bold text-[#f5f0e8] mb-1"
                  style={{ fontFamily: "var(--font-mincho), serif" }}
                >
                  {s.name}
                </h3>
                <p className="text-xs text-[#C41E3A] tracking-wider mb-3">
                  {s.grade}
                </p>
                <p className="text-sm text-[#c4b49a] leading-relaxed">{s.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fbfaf7] py-24 px-6 text-center">
        <h2
          className="font-mincho text-3xl font-bold text-[#1a0500] mb-4"
          style={{ fontFamily: "var(--font-mincho), serif" }}
        >
          Prêt à rejoindre le dojo ?
        </h2>
        <p className="text-[#8b7355] mb-8">
          Premier cours d&apos;essai gratuit pour tous les nouveaux pratiquants.
        </p>
        <Link
          href="/contact"
          className="bg-[#C41E3A] hover:bg-[#a01830] text-white font-medium px-8 py-4 rounded-sm transition-colors"
        >
          Réserver mon cours d&apos;essai
        </Link>
      </section>
    </>
  );
}
