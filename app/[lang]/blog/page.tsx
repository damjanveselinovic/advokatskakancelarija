import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  return (
    <section className="section section-light page-top page-tall">
      <div className="container">
        <h1 className="hero-title page-title">{c.blog.title}</h1>
        <p className="lead">{c.blog.empty}</p>
        <p><Link className="text-link" href={`/${lang}`}>{c.blog.back}</Link></p>
      </div>
    </section>
  );
}
