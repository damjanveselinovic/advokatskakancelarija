import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import RichText from "@/components/RichText";
import { articles, excerpt, formatDate, getArticle, getArticles, type Block } from "@/content/blog";
import { content, isLocale } from "@/content/site";

export function generateStaticParams({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) return [];
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: `${a[lang].title} | ${content[lang].meta.title}`,
    description: excerpt(a, lang, 200),
  };
}

type Params = PageProps<"/[lang]/blog/[slug]">["params"];

export default function ArticlePage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<div className="area-back" aria-busy="true" />}>
      <ArticleContent params={params} />
    </Suspense>
  );
}

function renderBlock(b: Block, i: number) {
  if (b.type === "h") {
    return (
      <h2 key={i} className="article-h">
        {b.text}
      </h2>
    );
  }
  if (b.type === "p") {
    return (
      <p key={i}>
        <RichText text={b.text} />
      </p>
    );
  }
  const List = b.type === "ol" ? "ol" : "ul";
  return (
    <List key={i} className="article-list">
      {b.items.map((it, j) => (
        <li key={j}>
          <RichText text={it.text} />
          {it.sub && (
            <ul>
              {it.sub.map((s, k) => (
                <li key={k}>
                  <RichText text={s} />
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </List>
  );
}

async function ArticleContent({ params }: { params: Params }) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const a = getArticle(slug);
  if (!a) notFound();
  const c = content[lang];
  const others = getArticles().filter((x) => x.slug !== a.slug);
  return (
    <>
      <div className="area-back">
        <div className="container article-shift">
          <Link href={`/${lang}/blog`}>← {c.blog.backToBlog}</Link>
        </div>
      </div>
      <section className="section section-grey article-top">
        <div className="container article-layout">
          <article className="article">
            <h1 className="hero-title page-title article-title">{a[lang].title}</h1>
            <time className="article-date" dateTime={a.date}>
              {formatDate(a.date, lang)}
            </time>
            <div className="article-body">{a[lang].blocks.map(renderBlock)}</div>
            <p className="article-author">
              {c.blog.authorLabel}: {a.author}
            </p>
          </article>
          <aside className="article-aside" aria-labelledby="other-articles">
            <h2 id="other-articles" className="aside-title">
              {c.blog.otherTitle}
            </h2>
            <ul data-lenis-prevent>
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/${lang}/blog/${o.slug}`}>
                    <span className="aside-date">{formatDate(o.date, lang)}</span>
                    <span className="aside-link">{o[lang].title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
