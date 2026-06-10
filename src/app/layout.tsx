import type { Metadata } from "next";
import { Noto_Serif_JP, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-mincho",
  display: "swap",
});

const zenKakuGothic = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-gothic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Musashi Karaté Club Montmagny",
  description:
    "Club de karaté traditionnel à Montmagny. Discipline, Respect, Dépassement de soi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${notoSerifJP.variable} ${zenKakuGothic.variable}`}
    >
      <body className="font-gothic text-[17px] bg-washi text-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
