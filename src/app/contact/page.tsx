"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: "",
    objet: "cours-essai",
  });

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
            <span>›</span>
            <span>Contact</span>
          </nav>
          <div className="kanji-label mb-6">
            <span className="text-lg">送信</span>
            <span>Nous écrire</span>
          </div>
          <h1
            className="font-mincho text-5xl lg:text-7xl font-black text-[#1a0500] mb-6"
            style={{ fontFamily: "var(--font-mincho), serif" }}
          >
            Rejoignez le dojo
            <br />
            Musashi
          </h1>
          <p className="text-xl text-[#8b7355] max-w-2xl leading-relaxed">
            Une question, une envie de commencer ? Réservez votre cours
            d&apos;essai gratuit ou demandez un renseignement — nous répondons
            sous 48 h.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-16 px-6 bg-[#fbfaf7]">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[1fr_400px] gap-16">
          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-wider uppercase text-[#8b7355] mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  placeholder="Jean Dupont"
                  className="w-full border border-[rgba(26,5,0,0.15)] bg-white px-4 py-3 text-sm text-[#1a0500] placeholder:text-[#c4b49a] focus:outline-none focus:border-[#C41E3A] transition-colors rounded-sm"
                />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-[#8b7355] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jean@exemple.fr"
                  className="w-full border border-[rgba(26,5,0,0.15)] bg-white px-4 py-3 text-sm text-[#1a0500] placeholder:text-[#c4b49a] focus:outline-none focus:border-[#C41E3A] transition-colors rounded-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-wider uppercase text-[#8b7355] mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={form.telephone}
                  onChange={(e) =>
                    setForm({ ...form, telephone: e.target.value })
                  }
                  placeholder="06 12 34 56 78"
                  className="w-full border border-[rgba(26,5,0,0.15)] bg-white px-4 py-3 text-sm text-[#1a0500] placeholder:text-[#c4b49a] focus:outline-none focus:border-[#C41E3A] transition-colors rounded-sm"
                />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-[#8b7355] mb-2">
                  Objet
                </label>
                <select
                  value={form.objet}
                  onChange={(e) => setForm({ ...form, objet: e.target.value })}
                  className="w-full border border-[rgba(26,5,0,0.15)] bg-white px-4 py-3 text-sm text-[#1a0500] focus:outline-none focus:border-[#C41E3A] transition-colors rounded-sm"
                >
                  <option value="cours-essai">Cours d&apos;essai gratuit</option>
                  <option value="inscription">Inscription saison</option>
                  <option value="renseignement">Renseignement</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-wider uppercase text-[#8b7355] mb-2">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Votre message..."
                rows={6}
                className="w-full border border-[rgba(26,5,0,0.15)] bg-white px-4 py-3 text-sm text-[#1a0500] placeholder:text-[#c4b49a] focus:outline-none focus:border-[#C41E3A] transition-colors rounded-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#C41E3A] hover:bg-[#a01830] text-white font-medium px-8 py-4 rounded-sm transition-colors text-sm"
            >
              Envoyer le message
            </button>
          </form>

          {/* Info sidebar */}
          <div className="space-y-8">
            <div>
              <h3
                className="font-mincho text-xl font-bold text-[#1a0500] mb-4"
                style={{ fontFamily: "var(--font-mincho), serif" }}
              >
                Dojo de Montmagny
              </h3>
              <address className="not-italic space-y-2 text-sm text-[#8b7355]">
                <p>Salle des sports de Montmagny</p>
                <p>Rue des Sports</p>
                <p>95680 Montmagny</p>
                <p>Val-d&apos;Oise (95)</p>
              </address>
            </div>
            <div className="border-t border-[rgba(26,5,0,0.08)] pt-8">
              <h4 className="text-xs tracking-wider uppercase text-[#8b7355] mb-3">
                Contact direct
              </h4>
              <a
                href="mailto:contact@musashi-karate.fr"
                className="text-[#C41E3A] text-sm hover:underline"
              >
                contact@musashi-karate.fr
              </a>
            </div>
            <div className="border-t border-[rgba(26,5,0,0.08)] pt-8">
              <h4 className="text-xs tracking-wider uppercase text-[#8b7355] mb-3">
                Cours d&apos;essai
              </h4>
              <p className="text-sm text-[#1a0500] leading-relaxed">
                Venez découvrir le club lors d&apos;une séance d&apos;essai
                gratuite et sans engagement. Tenue souple recommandée.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
