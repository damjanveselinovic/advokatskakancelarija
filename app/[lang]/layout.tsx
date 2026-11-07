import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import { content, isLocale, locales } from "@/content/site";
import "../globals.css";

// Switzer (Fontshare, ITF Free Font License, komercijalna upotreba dozvoljena): naslovi i tekst.
const switzer = localFont({
  variable: "--font-switzer",
  src: [
    { path: "../fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Switzer-Medium.woff2", weight: "500", style: "normal" },
  ],
  display: "swap",
});
// Source Serif 4 (promenljiv, osa opsz): glavni naslov i naslovi sekcija, tezina 300.
const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
});
// Inter ostaje za zaglavlje (meni, SR / EN, ime).
const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return { title: content[lang].meta.title, description: content[lang].meta.description };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const c = content[lang];
  return (
    <html lang={c.htmlLang} className={`${sans.variable} ${switzer.variable} ${serif.variable}`}>
      <body>
        <SmoothScroll />
        <Header lang={lang} brand={c.brand} nav={c.nav} />
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <span>{c.footer.text}</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
