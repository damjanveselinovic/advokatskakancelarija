import Link from "next/link";
import type { Locale } from "@/content/site";
import { content } from "@/content/site";

// Mali blok "Oblasti rada" u donjem desnom delu hero sekcije (samo na sirokom desktopu).
// Za uklanjanje: obrisati <HeroAreas /> u app/[lang]/page.tsx i CSS blok "HERO AREAS" u app/globals.css.
export default function HeroAreas({ lang }: { lang: Locale }) {
  const c = content[lang].practice;
  return (
    <nav className="hero-areas" aria-label={c.title}>
      <p className="hero-areas-label">{c.title}</p>
      <ul>
        {c.items.map((it) => (
          <li key={it.slug}>
            <Link href={`/${lang}/practice/${it.slug}`}>
              <span>{it.title}</span>
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
