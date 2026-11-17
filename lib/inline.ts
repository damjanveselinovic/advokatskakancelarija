// Mali parser za inline Markdown u tekstu članaka: **bold**, *kurziv*, ***oboje***,
// __bold__, _kurziv_, [tekst](link) i escape sekvence (\*, \_ ...). Vraća stablo,
// pa se ništa ne ubacuje kao HTML: React escapuje sav tekst, a linkovi su filtrirani.

export type Inline = string | { k: "strong"; c: Inline[] } | { k: "em"; c: Inline[] } | { k: "a"; href: string; c: Inline[] };

// Znak sa escape-om (\x) ili bilo koji drugi znak; omogućava da \* ne zatvori naglašavanje.
const E = "(?:\\\\.|[^\\\\])";
const W = "[\\p{L}\\p{N}_]";

const ESC_CLASS = "[\\\\`*_{}\\[\\]()#+\\-.!~>|<&\"']";

const TOKEN = new RegExp(
  [
    `\\\\(${ESC_CLASS})`, // 1: escape
    `\\*\\*\\*(?=\\S)(${E}+?)(?<=\\S)\\*\\*\\*`, // 2: bold + italic
    `\\*\\*(?=\\S)(${E}+?)(?<=\\S)\\*\\*`, // 3: bold
    `(?<!${W})__(?=\\S)(${E}+?)(?<=\\S)__(?!${W})`, // 4: bold (underscore)
    `\\*(?=\\S)(${E}+?)(?<=\\S)\\*`, // 5: italic
    `(?<!${W})_(?=\\S)(${E}+?)(?<=\\S)_(?!${W})`, // 6: italic (underscore)
    `\\[((?:\\\\.|[^\\\\\\]])+?)\\]\\(([^)\\s]+)\\)`, // 7, 8: link
  ].join("|"),
  "gu",
);

const ESCAPES = new RegExp(`\\\\(${ESC_CLASS})`, "gu");
const ENTITIES: Record<string, string> = { "&nbsp;": " ", "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" };

function decode(s: string): string {
  return s.replace(/&(?:nbsp|amp|lt|gt|quot|#39);/g, (m) => ENTITIES[m] ?? m);
}

/** Dozvoljeni su samo http(s), mailto, tel, relativni (/putanja) i sidra (#). */
export function safeHref(raw: string): string | null {
  const href = raw.replace(ESCAPES, "$1").trim();
  return /^(https?:|mailto:|tel:|#|\/(?!\/))/i.test(href) ? href : null;
}

export function parseInline(text: string): Inline[] {
  const out: Inline[] = [];
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    const at = m.index ?? 0;
    if (at > last) out.push(decode(text.slice(last, at)));
    if (m[1] !== undefined) out.push(m[1]);
    else if (m[2] !== undefined) out.push({ k: "strong", c: [{ k: "em", c: parseInline(m[2]) }] });
    else if (m[3] !== undefined) out.push({ k: "strong", c: parseInline(m[3]) });
    else if (m[4] !== undefined) out.push({ k: "strong", c: parseInline(m[4]) });
    else if (m[5] !== undefined) out.push({ k: "em", c: parseInline(m[5]) });
    else if (m[6] !== undefined) out.push({ k: "em", c: parseInline(m[6]) });
    else {
      const href = safeHref(m[8]);
      const inner = parseInline(m[7]);
      if (href) out.push({ k: "a", href, c: inner });
      else out.push(...inner);
    }
    last = at + m[0].length;
  }
  if (last < text.length) out.push(decode(text.slice(last)));
  return out;
}

function flatten(nodes: Inline[]): string {
  return nodes.map((n) => (typeof n === "string" ? n : flatten(n.c))).join("");
}

/** Tekst bez oznaka (za izvod i meta opis). */
export function plain(text: string): string {
  return flatten(parseInline(text));
}
