import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { excerpt, formatDate, getArticles } from "@/content/blog";
import { content, isLocale } from "@/content/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return { title: content[lang].meta.blogTitle, description: content[lang].meta.blogDescription };
}

export default async function BlogPage({ params }: PageProps<"/[lang]/blog">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const c = content[lang];
  const [latest, ...rest] = getArticles();
  const href = (slug: string) => `/${lang}/blog/${slug}`;
  return (
    <section className="section section-grey page-top blog-page">
      <div className="container">
        <h1 className="hero-title page-title blog-heading">{c.blog.title}</h1>

        {latest && (
          <article className="blog-lead">
            <time className="blog-date" dateTime={latest.date}>
              {formatDate(latest.date, lang)}
            </time>
            <h2 className="blog-lead-title">
              <Link href={href(latest.slug)}>{latest[lang].title}</Link>
            </h2>
            <p className="blog-excerpt">{excerpt(latest, lang, 360)}</p>
            <Link className="more-link" href={href(latest.slug)}>
              {c.blog.readMore}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </article>
        )}

        <ul className="blog-list">
          {rest.map((a) => (
            <li key={a.slug} className="blog-item">
              <time className="blog-date" dateTime={a.date}>
                {formatDate(a.date, lang)}
              </time>
              <div className="blog-item-body">
                <h2 className="blog-item-title">
                  <Link href={href(a.slug)}>{a[lang].title}</Link>
                </h2>
                <p className="blog-excerpt">{excerpt(a, lang)}</p>
                <Link className="more-link" href={href(a.slug)}>
                  {c.blog.readMore}
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
