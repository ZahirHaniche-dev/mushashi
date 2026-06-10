import Link from "next/link";

export default function HorairesPage() {
  return (
    <>
      <section className="relative bg-[#fbfaf7] overflow-hidden pt-16 pb-24 px-6">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-[#C41E3A] opacity-10 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto">
          <nav className="text-xs text-[#8b7355] mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-[#C41E3A] transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span>Horaires</span>
          </nav>
          <div className="kanji-label mb-6">
            <span className="text-lg">稽古</span>
            <span>Planning des cours</span>
          </div>
          <h1
            className="font-mincho text-5xl lg:text-7xl font-black text-[#1a0500] mb-6"
            style={{ fontFamily: "var(--font-mincho), serif" }}
          >
            Horaires &amp; Planning
          </h1>
          <p className="text-xl text-[#8b7355] max-w-2xl leading-relaxed">
            Retrouvez tous les cours de la saison 2025-2026. Les cours ont lieu
            au dojo de Montmagny.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#fbfaf7]">
        <div className="max-w-[1440px] mx-auto overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-[#C41E3A]">
                <th
                  className="text-left py-3 pr-8 font-mincho font-bold text-[#1a0500]"
                  style={{ fontFamily: "var(--font-mincho), serif" }}
                >
                  Catégorie
                </th>
                <th className="text-left py-3 pr-8 text-[#8b7355] font-normal tracking-wider uppercase text-xs">
                  Lundi
                </th>
                <th className="text-left py-3 pr-8 text-[#8b7355] font-normal tracking-wider uppercase text-xs">
                  Mardi
                </th>
                <th className="text-left py-3 pr-8 text-[#8b7355] font-normal tracking-wider uppercase text-xs">
                  Mercredi
                </th>
                <th className="text-left py-3 pr-8 text-[#8b7355] font-normal tracking-wider uppercase text-xs">
                  Jeudi
                </th>
                <th className="text-left py-3 text-[#8b7355] font-normal tracking-wider uppercase text-xs">
                  Vendredi
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  cat: "Baby Karaté (4-5 ans)",
                  l: "—",
                  ma: "16h30–17h30",
                  me: "—",
                  j: "—",
                  v: "—",
                },
                {
                  cat: "Enfants (6-12 ans)",
                  l: "—",
                  ma: "17h30–18h30",
                  me: "—",
                  j: "17h30–18h30",
                  v: "—",
                },
                {
                  cat: "Adolescents (13-17 ans)",
                  l: "18h30–20h00",
                  ma: "—",
                  me: "18h30–20h00",
                  j: "—",
                  v: "—",
                },
                {
                  cat: "Adultes (18 ans+)",
                  l: "20h00–21h30",
                  ma: "—",
                  me: "20h00–21h30",
                  j: "—",
                  v: "20h00–21h30",
                },
              ].map((row) => (
                <tr
                  key={row.cat}
                  className="border-b border-[rgba(26,5,0,0.06)] hover:bg-[rgba(196,30,58,0.03)]"
                >
                  <td className="py-4 pr-8 font-medium text-[#1a0500]">
                    {row.cat}
                  </td>
                  <td className="py-4 pr-8 text-[#8b7355]">{row.l}</td>
                  <td className="py-4 pr-8 text-[#8b7355]">{row.ma}</td>
                  <td className="py-4 pr-8 text-[#8b7355]">{row.me}</td>
                  <td className="py-4 pr-8 text-[#8b7355]">{row.j}</td>
                  <td className="py-4 text-[#8b7355]">{row.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
