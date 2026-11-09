import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import EnquiryProvider, { EnquiryButton } from "@/components/EnquiryDialog";
import ScrollReveal from "@/components/ScrollReveal";
import { content, isLocale } from "@/content/site";

export function generateStaticParams({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) return [];
  return content[params.lang].practice.items.map((it) => ({ slug: it.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/practice/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const it = content[lang].practice.items.find((i) => i.slug === slug);
  if (!it) return {};
  return {
    title: `${it.title} | ${content[lang].meta.title}`,
    description: it.intro[0],
  };
}

const BANNERS: Record<string, { src: string; position: string }> = {
  "real-estate": { src: "/oblastiRada/nepokretnosti.jpg", position: "50% 22%" },
  "dispute-resolution": {
    src: "/oblastiRada/sporovi2.jpg",
    position: "50% 60%",
  },
  "property-administrative": {
    src: "/oblastiRada/imovinsko4.jpg",
    position: "50% 30%",
  },
  "commercial-corporate": { src: "/oblastiRada/privredno.jpg", position: "50% 45%" },
  "intellectual-property": { src: "/oblastiRada/intelektualno.jpg", position: "50% 40%" },
};

type Params = PageProps<"/[lang]/practice/[slug]">["params"];

export default function PracticePage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<div className="area-back" aria-busy="true" />}>
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
    <EnquiryProvider
      lang={lang}
      text={c.enquiry}
      areas={c.practice.items.map((i) => i.title)}
    >
      <ScrollReveal />
      <div className="area-back">
        <div className="container">
          <Link href={`/${lang}#practice`}>← {c.practice.backToAreas}</Link>
        </div>
      </div>
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
      <section className="section section-grey area-head">
        <div className="container">
          <h1 className="hero-title page-title area-title">{it.title}</h1>
          <div className="prose prose-lead">
            {it.intro.map((p) => (
              <p key={p} className="lead">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-grey">
        <div className="container">
          {it.services && it.services.length > 0 && (
            <>
              <div className="prose">
                <h2 className="list-title">{it.listTitle}</h2>
              </div>
              <ul className="services">
                {it.services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </>
          )}
          <div className="prose">
            {it.closing && <p className="closing">{it.closing}</p>}
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
