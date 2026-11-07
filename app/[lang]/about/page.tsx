import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import SplitText from "@/components/SplitText";
import { content, isLocale, locales } from "@/content/site";

// Zajednicka (privremena) fotografija za oba profila; zameniti kad stignu prave.
const PROFILE_PHOTO = "/pfp.jpg";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return content[lang].aboutPage.meta;
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const a = content[lang].aboutPage;
  const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` });
  return (
    <>
      <ScrollReveal />
      <section className="section section-light page-top">
        <div className="container">
          <h1 className="hero-title page-title">{a.title}</h1>
          <div className="prose prose-lead">
            {a.intro.map((p) => (
              <p key={p} className="lead">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="firm" className="section section-paper">
        <div className="container split">
          <h2 className="h2" data-reveal="words">
            <SplitText text={a.firmTitle} />
          </h2>
          <div className="prose">
            {a.firm.map((p, i) => (
              <p key={p} data-reveal="fade" style={d(i === 0 ? 100 : 0)}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="section section-light">
        <div className="container">
          <h2 className="h2" data-reveal="words">
            <SplitText text={a.teamTitle} />
          </h2>
          {a.team.map((m) => (
            <article key={m.id} id={m.id} className="profile">
              <header className="profile-head">
                <Image
                  src={PROFILE_PHOTO}
                  alt={`${m.name}, ${m.role}`}
                  width={720}
                  height={720}
                  sizes="(max-width: 899px) 320px, 320px"
                  className="portrait-img"
                />
                <h3 className="person-name">{m.name}</h3>
                <p className="person-role">{m.role}</p>
              </header>
              <div className="prose">
                {m.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
