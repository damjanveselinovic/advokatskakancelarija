import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import EnquiryProvider, { EnquiryButton } from "@/components/EnquiryDialog";
import ScrollReveal from "@/components/ScrollReveal";
import { content, isLocale } from "@/content/site";

// Roditeljski app/[lang]/layout.tsx vec generise `sr` i `en`; ovde se za svaki jezik
// uzimaju slugovi oblasti iz sadrzaja, pa se svih 6 stranica unapred renderuje.
export function generateStaticParams({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) return [];
  return content[params.lang].practice.items.map((it) => ({ slug: it.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/practice/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const it = content[lang].practice.items.find((i) => i.slug === slug);
  if (!it) return {};
  return {
    title: `${it.title} | ${content[lang].meta.title}`,
    description: it.intro[0],
  };
}

// Baner po oblasti (isti za oba jezika); position drzi glavni motiv u niskom, sirokom kadru.
const BANNERS: Record<string, { src: string; position: string }> = {
  "real-estate": { src: "/oblastiRada/nepokretnosti.jpg", position: "50% 22%" },
  "dispute-resolution": { src: "/oblastiRada/sporovi.jpg", position: "50% 60%" },
  "property-administrative": { src: "/oblastiRada/imovinsko.jpg", position: "50% 30%" },
};

type Params = PageProps<"/[lang]/practice/[slug]">["params"];

// params se cita u detetu unutar <Suspense>, da App Shell rute ne zavisi od jednog URL-a
// (inace Next u razvoju javlja "URL data outside of Suspense").
export default function PracticePage({ params }: { params: Params }) {
  return (
    <Suspense
      fallback={
        <div className="area-banner" aria-busy="true" />
      }
    >
      <PracticeContent params={params} />
    </Suspense>
  );
}

async function PracticeContent({ params }: { params: Params }) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const c = content[lang];
  const index = c.practice.items.findIndex((i) => i.slug === slug);
  if (index < 0) notFound();
  const it = c.practice.items[index];
  return (
    <EnquiryProvider lang={lang} text={c.enquiry} areas={c.practice.items.map((i) => i.title)}>
      <ScrollReveal />
      {BANNERS[it.slug] && (
        <div className="area-banner">
          <Image
            src={BANNERS[it.slug].src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="area-banner-img"
            style={{ objectPosition: BANNERS[it.slug].position }}
          />
        </div>
      )}
      <section className="section section-light area-head">
        <div className="container">
          <h1 className="hero-title page-title">{it.title}</h1>
          <div className="prose prose-lead">
            {it.intro.map((p) => (
              <p key={p} className="lead">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="prose">
            <h2 className="list-title">{it.listTitle}</h2>
          </div>
          <ul className="services">
            {it.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="prose">
            <p className="closing">{it.closing}</p>
            <EnquiryButton className="btn btn-form" label={c.practice.enquiryCta} area={index} />
          </div>
          <p className="crumb crumb-end">
            <Link href={`/${lang}#practice`}>← {c.practice.back}</Link>
          </p>
        </div>
      </section>
    </EnquiryProvider>
  );
}
