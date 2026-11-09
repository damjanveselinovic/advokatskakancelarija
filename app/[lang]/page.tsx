import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EnquiryProvider, { EnquiryButton } from "@/components/EnquiryDialog";
import Faq from "@/components/Faq";
import ScrollReveal from "@/components/ScrollReveal";
import SplitText from "@/components/SplitText";
import {
  address,
  content,
  contactEmail,
  isLocale,
  mapEmbedUrl,
  mapLinkUrl,
  phone,
} from "@/content/site";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const c = content[lang];
  // Art direction: <picture> bira background6.jpg (portret) cim se raspored prebaci na mobilni (<900px)
  const common = { alt: "", fill: true, quality: 90, sizes: "100vw" } as const;
  const { props: desktopImg } = getImageProps({ ...common, src: "/background5.jpg", priority: true });
  const { props: mobileImg } = getImageProps({ ...common, src: "/background6.jpg", priority: true });
  const { srcSet: desktopSet, ...imgProps } = desktopImg;
  const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` });
  return (
    <EnquiryProvider
      lang={lang}
      text={c.enquiry}
      areas={c.practice.items.map((i) => i.title)}
    >
      <ScrollReveal />
      <section id="home" className="hero">
        <div className="hero-bg" aria-hidden="true">
          <picture>
            <source media="(max-width: 899px)" srcSet={mobileImg.srcSet} />
            <source media="(min-width: 900px)" srcSet={desktopSet} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img {...imgProps} alt="" className="hero-img" />
          </picture>
        </div>
        <div className="hero-glass-wide" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-in hero-in-title">{c.hero.eyebrow}</p>
              <h1 className="hero-title hero-title--home hero-in hero-in-title">{c.hero.title}</h1>
              <div className="hero-paragraphs hero-in hero-in-text">
                {c.hero.paragraphs.map((t) => (
                  <p key={t} className="hero-text">
                    {t}
                  </p>
                ))}
              </div>
            </div>
            <div className="hero-side hero-in hero-in-side">
              <div className="hero-coin" aria-hidden="true">
                <Image
                  src="/logo-emblem.png"
                  alt=""
                  width={640}
                  height={640}
                  quality={90}
                  sizes="(max-width: 899px) 220px, 480px"
                  priority
                />
              </div>
              <div className="hero-actions">
                <EnquiryButton className="btn btn-onphoto" label={c.contact.enquiryCta} />
                <a className="btn btn-onphoto" href="#contact">
                  {c.hero.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section section-grey">
        <div className="container split">
          <h2 className="h2 about-title" data-reveal="words">
            <SplitText text={c.about.title} />
          </h2>
          <div className="about-text">
            {c.about.paragraphs.map((p, i) => (
              <p key={p} className="lead" data-reveal="fade" style={d(150 + i * 100)}>
                {p}
              </p>
            ))}
            <p data-reveal="fade" style={d(350)}>
              <Link className="more-link" href={`/${lang}/about`}>
                {c.about.more}
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section id="people" className="section section-paper">
        <div className="container">
          <h2 className="h2 team-title" data-reveal="words">
            <SplitText text={c.people.title} />
          </h2>
          <div className="people-grid">
            {c.people.items.map((p, i) => (
              <article key={p.id} className="person" data-reveal="fade" style={d(150 + i * 120)}>
                <h3 className="person-name">{p.name}</h3>
                <p className="person-role">{p.role}</p>
                <p className="person-intro">{p.intro}</p>
                <Link className="more-link" href={`/${lang}/about#${p.id}`}>
                  {c.people.readMore}
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="practice" className="section section-dark">
        <div className="container">
          <div className="practice-head">
            <h2 className="h2" data-reveal="words">
              <SplitText text={c.practice.title} />
            </h2>
            <p className="muted" data-reveal="fade" style={d(150)}>
              {c.practice.intro}
            </p>
          </div>
          <ul className="rows" data-reveal="fade" style={d(150)}>
            {c.practice.items.map((it, i) => (
              <li key={it.slug} className="row">
                <h3 className="row-title">
                  <Link href={`/${lang}/practice/${it.slug}`}>{it.title}</Link>
                </h3>
                <p className="row-text">{it.text}</p>
                <div className="row-actions">
                  <Link className="row-cta" href={`/${lang}/practice/${it.slug}`}>
                    {c.practice.learnMore}
                    <span className="arrow" aria-hidden="true">→</span>
                  </Link>
                  <EnquiryButton
                    className="row-cta"
                    label={c.practice.enquiryCta}
                    ariaLabel={`${c.practice.enquiryCta}: ${it.title}`}
                    area={i}
                    arrow
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="section section-paper">
        <div className="container split">
          <div>
            <h2 className="h2" data-reveal="words">
              <SplitText text={c.contact.title} />
            </h2>
            <p className="muted" data-reveal="fade" style={d(150)}>
              {c.contact.text}
            </p>
          </div>
          <div className="contact-actions" data-reveal="fade" style={d(250)}>
            <dl className="contact-facts">
              <div>
                <dt>{c.contact.addressLabel}</dt>
                <dd>{address}</dd>
              </div>
              <div>
                <dt>{c.contact.phoneLabel}</dt>
                <dd>
                  <a href={phone.href}>{phone.display}</a>
                </dd>
              </div>
              <div>
                <dt>{c.contact.emailLabel}</dt>
                <dd>
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </dd>
              </div>
            </dl>
            <EnquiryButton className="btn btn-form" label={c.contact.enquiryCta} />
            <Faq title={c.faq.title} items={c.faq.items} />
          </div>
        </div>
      </section>

      <section id="map" className="map-section" aria-label={c.contact.mapTitle}>
        <div className="container">
          <div className="map-frame">
            <iframe
              src={mapEmbedUrl(lang)}
              title={c.contact.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="map-link-row">
            <a className="more-link" href={mapLinkUrl} target="_blank" rel="noopener noreferrer">
              {c.contact.mapLink}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </p>
        </div>
      </section>
    </EnquiryProvider>
  );
}
