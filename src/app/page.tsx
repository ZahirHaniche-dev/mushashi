import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[100vh] bg-[#1a0500] flex items-center overflow-hidden">
        {/* Large red decorative circle */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[650px] h-[650px] rounded-full bg-[#C41E3A] opacity-90 pointer-events-none" />
        {/* Faint kanji watermark inside circle */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[650px] h-[650px] flex items-center justify-center pointer-events-none select-none">
          <span
            className="font-mincho text-[320px] font-black text-[rgba(26,5,0,0.25)] leading-none"
            style={{ fontFamily: "var(--font-mincho), serif" }}
          >
            武
          </span>
        </div>

        {/* Content grid */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
          {/* Photo slot */}
          <div className="hidden lg:flex flex-col items-center justify-center border-2 border-dashed border-[rgba(255,255,255,0.15)] rounded-sm aspect-[4/3] text-[rgba(255,255,255,0.3)] text-sm gap-2">
            <svg
              className="w-10 h-10 opacity-40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
              <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
              <polyline points="21,15 16,10 5,21" strokeWidth="1.5" />
            </svg>
            <span>Glissez une photo d&apos;entraînement</span>
            <span className="text-xs opacity-60">(plein écran)</span>
          </div>

          {/* Text content */}
          <div className="text-[#f5f0e8]">
            <div className="kanji-label mb-6">
              <span className="text-lg">空手道</span>
              <span>Karaté Traditionnel · 95</span>
            </div>

            <h1
              className="font-mincho text-6xl lg:text-8xl font-black leading-none mb-6 text-[#f5f0e8]"
              style={{ fontFamily: "var(--font-mincho), serif" }}
            >
              Musashi Karaté
              <br />
              Club Montmagny
            </h1>

            <p className="text-xl lg:text-2xl text-[#c4b49a] mb-6 flex items-center gap-3 flex-wrap">
              <span>Discipline</span>
              <span className="text-[#C41E3A]">•</span>
              <span>Respect</span>
              <span className="text-[#C41E3A]">•</span>
              <span>Dépassement de soi</span>
            </p>

            <p className="text-base text-[#c4b49a] leading-relaxed mb-8 max-w-lg">
              Depuis plusieurs années, notre club accompagne enfants, adolescents
              et adultes dans la pratique du karaté traditionnel au cœur de
              Montmagny.
            </p>

            <Link
              href="/le-club"
              className="inline-flex items-center gap-2 bg-[#C41E3A] hover:bg-[#a01830] text-white font-medium px-8 py-4 rounded-sm transition-colors text-base"
            >
              Découvrir le club
            </Link>

            <div className="mt-16 flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#8b7355]">
              <div className="h-px w-8 bg-[#8b7355]" />
              Défiler
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS DU DOJO */}
      <section className="bg-seigaiha py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <h2
            className="font-mincho text-4xl lg:text-5xl font-bold text-[#f5f0e8] mb-12"
            style={{ fontFamily: "var(--font-mincho), serif" }}
          >
            Les valeurs du dojo
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.06)]">
            {[
              {
                num: "01",
                kanji: "礼",
                title: "Respect",
                desc: "Le salut ouvre et ferme chaque séance. Respect du partenaire, du maître et de soi-même.",
              },
              {
                num: "02",
                kanji: "忍",
                title: "Persévérance",
                desc: "Répéter, corriger, recommencer. Le progrès naît de la constance et de la patience.",
              },
              {
                num: "03",
                kanji: "和",
                title: "Esprit d'équipe",
                desc: "On progresse ensemble. L'entraide et la bienveillance font la force du groupe.",
              },
              {
                num: "04",
                kanji: "超",
                title: "Dépassement",
                desc: "Repousser ses limites avec humilité. Le vrai adversaire, c'est soi-même.",
              },
            ].map((val) => (
              <div
                key={val.num}
                className="bg-[#1a0500] p-8 relative group hover:bg-[#2a0a05] transition-colors"
              >
                <span className="absolute top-5 right-5 text-xs text-[#8b7355] font-mono">
                  {val.num}
                </span>
                <div
                  className="font-mincho text-5xl text-[#C41E3A] mb-6 font-bold"
                  style={{ fontFamily: "var(--font-mincho), serif" }}
                >
                  {val.kanji}
                </div>
                <h3
                  className="font-mincho text-xl font-bold text-[#f5f0e8] mb-3"
                  style={{ fontFamily: "var(--font-mincho), serif" }}
                >
                  {val.title}
                </h3>
                <p className="text-sm text-[#c4b49a] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURS & HORAIRES PREVIEW */}
      <section className="py-24 px-6 bg-[#fbfaf7]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <div className="kanji-label mb-4">
                <span className="text-lg">稽古</span>
                <span>Cours &amp; Horaires</span>
              </div>
              <h2
                className="font-mincho text-4xl lg:text-5xl font-bold text-[#1a0500]"
                style={{ fontFamily: "var(--font-mincho), serif" }}
              >
                Pratiquez à votre rythme
              </h2>
            </div>
            <Link
              href="/horaires"
              className="text-sm font-medium text-[#C41E3A] border border-[#C41E3A] px-5 py-2.5 hover:bg-[#C41E3A] hover:text-white transition-colors rounded-sm shrink-0"
            >
              Voir tous les horaires
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                cat: "Enfants",
                age: "6–12 ans",
                days: "Mardi & Jeudi",
                time: "17h30 – 18h30",
              },
              {
                cat: "Adolescents",
                age: "13–17 ans",
                days: "Lundi & Mercredi",
                time: "18h30 – 20h00",
              },
              {
                cat: "Adultes",
                age: "18 ans et +",
                days: "Lundi, Mercredi & Vendredi",
                time: "20h00 – 21h30",
              },
            ].map((c) => (
              <div
                key={c.cat}
                className="border border-[rgba(26,5,0,0.12)] p-8 hover:border-[#C41E3A] transition-colors group"
              >
                <h3
                  className="font-mincho text-2xl font-bold text-[#1a0500] mb-1 group-hover:text-[#C41E3A] transition-colors"
                  style={{ fontFamily: "var(--font-mincho), serif" }}
                >
                  {c.cat}
                </h3>
                <p className="text-sm text-[#8b7355] mb-6">{c.age}</p>
                <div className="space-y-2">
                  <div className="text-sm text-[#1a0500]">
                    <span className="font-medium">Jours :</span> {c.days}
                  </div>
                  <div className="text-sm text-[#1a0500]">
                    <span className="font-medium">Horaires :</span> {c.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#C41E3A] py-12 px-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
          {[
            { num: "15+", label: "Années d'existence" },
            { num: "120", label: "Membres actifs" },
            { num: "3", label: "Groupes d'âge" },
            { num: "95", label: "Val-d'Oise" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="font-mincho text-5xl font-black mb-1"
                style={{ fontFamily: "var(--font-mincho), serif" }}
              >
                {s.num}
              </div>
              <div className="text-xs tracking-widest uppercase text-[rgba(255,255,255,0.7)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA REJOINDRE */}
      <section className="relative bg-[#1a0500] py-24 px-6 overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#C41E3A] opacity-20 translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="relative z-10 max-w-[1440px] mx-auto text-center">
          <div
            className="kanji-label justify-center mb-6"
            style={{ color: "#C41E3A" }}
          >
            <span className="text-lg">入門</span>
            <span>Premier cours</span>
          </div>
          <h2
            className="font-mincho text-4xl lg:text-6xl font-black text-[#f5f0e8] mb-6"
            style={{ fontFamily: "var(--font-mincho), serif" }}
          >
            Commencez votre
            <br />
            aventure au tatami
          </h2>
          <p className="text-[#c4b49a] max-w-xl mx-auto mb-10 leading-relaxed">
            Premier cours d&apos;essai gratuit. Inscriptions ouvertes toute
            l&apos;année. Venez découvrir notre dojo et notre équipe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#C41E3A] hover:bg-[#e02040] text-white font-medium px-8 py-4 rounded-sm transition-colors"
            >
              Réserver un cours d&apos;essai
            </Link>
            <Link
              href="/tarifs"
              className="border border-[#f5f0e8] text-[#f5f0e8] hover:bg-[rgba(255,255,255,0.1)] font-medium px-8 py-4 rounded-sm transition-colors"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
