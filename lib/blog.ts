import fs from "node:fs";
import path from "node:path";
import type { Locale } from "@/content/site";
import { plain } from "./inline";
import { markdownToBlocks } from "./markdown";

// Članci su JSON fajlovi u content/blog/ (jedan fajl = jedan članak, uređuje ih Pages CMS,
// vidi .pages.yml). Adresa članka je ime fajla, pa izmena naslova ne menja URL.
// Novi fajl se automatski pojavljuje na listi i dobija stranicu pri sledećem buildu.

export type ListItem = { text: string; sub?: string[] };
export type Block =
  | { type: "h"; text: string }
  | { type: "p"; text: string }
  | { type: "ul" | "ol"; items: ListItem[] };

export type Article = {
  slug: string;
  date: string; // YYYY-MM-DD, kalendarski datum bez sata
  author: string;
  sr: { title: string; blocks: Block[] };
  en: { title: string; blocks: Block[] };
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const DEFAULT_AUTHOR = "Ivan Petrović";

/** Ime fajla → adresa: mala slova, bez dijakritika, reči razdvojene crticom. */
function slugFromFile(file: string): string {
  return file
    .replace(/\.json$/i, "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/gi, "dj")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function text(data: Record<string, unknown>, key: string, file: string): string {
  const v = data[key];
  if (typeof v !== "string" || !v.trim()) throw new Error(`content/blog/${file}: polje "${key}" je obavezno.`);
  return v;
}

function readDate(data: Record<string, unknown>, file: string): string {
  const v = data.date;
  const m = typeof v === "string" ? /^(\d{4})-(\d{2})-(\d{2})(?![\d])/.exec(v.trim()) : null;
  const ok = m && new Date(Date.UTC(+m[1], +m[2] - 1, +m[3])).toISOString().startsWith(`${m[1]}-${m[2]}-${m[3]}`);
  if (!m || !ok) throw new Error(`content/blog/${file}: polje "date" mora biti datum oblika YYYY-MM-DD.`);
  return `${m[1]}-${m[2]}-${m[3]}`; // eventualni sat se ignoriše
}

function readArticle(file: string): Article {
  let data: Record<string, unknown>;
  try {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8").replace(/^﻿/, "");
    data = JSON.parse(raw);
  } catch (e) {
    throw new Error(`content/blog/${file}: fajl nije ispravan JSON (${e instanceof Error ? e.message : e}).`);
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new Error(`content/blog/${file}: očekivan je JSON objekat.`);
  }
  const slug = slugFromFile(file);
  if (!slug) throw new Error(`content/blog/${file}: ime fajla ne daje upotrebljivu adresu.`);
  const author = typeof data.author === "string" && data.author.trim() ? data.author.trim() : DEFAULT_AUTHOR;
  return {
    slug,
    date: readDate(data, file),
    author,
    sr: { title: text(data, "title_sr", file).trim(), blocks: markdownToBlocks(text(data, "body_sr", file)) },
    en: { title: text(data, "title_en", file).trim(), blocks: markdownToBlocks(text(data, "body_en", file)) },
  };
}

let cache: Article[] | undefined;

/** Svi članci, najnoviji prvi (isti datum: po adresi, da redosled bude stabilan). */
export function getArticles(): Article[] {
  if (cache) return cache;
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.toLowerCase().endsWith(".json"))
    .sort();
  const seen = new Map<string, string>();
  const list = files.map((file) => {
    const a = readArticle(file);
    const clash = seen.get(a.slug);
    if (clash) throw new Error(`content/blog: fajlovi "${clash}" i "${file}" daju istu adresu "${a.slug}".`);
    seen.set(a.slug, file);
    return a;
  });
  list.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug < b.slug ? -1 : 1));
  if (process.env.NODE_ENV === "production") cache = list;
  return list;
}

export function getArticle(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
}

const MONTHS: Record<Locale, string[]> = {
  sr: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

export function formatDate(iso: string, lang: Locale): string {
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  return lang === "sr" ? `${d}. ${MONTHS.sr[m - 1]} ${y}.` : `${d} ${MONTHS.en[m - 1]} ${y}`;
}

export function excerpt(article: Article, lang: Locale, max = 240): string {
  const first = article[lang].blocks.find((b) => b.type === "p");
  const t = first && first.type === "p" ? plain(first.text) : "";
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  return cut.slice(0, Math.max(cut.lastIndexOf(" "), 1)).replace(/[\s,;:.–-]+$/, "") + "…";
}
