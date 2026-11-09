import type { ReactNode } from "react";

// Sitna oznaka u tekstu clanaka (content/blog.ts): *kurziv*, **podebljano**, [tekst](https://link).
const TOKEN = /\*\*(.+?)\*\*|\*(.+?)\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

export default function RichText({ text }: { text: string }): ReactNode {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(TOKEN)) {
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    if (m[1] !== undefined) {
      out.push(
        <strong key={i++}>
          <RichText text={m[1]} />
        </strong>,
      );
    } else if (m[2] !== undefined) {
      out.push(
        <em key={i++}>
          <RichText text={m[2]} />
        </em>,
      );
    } else {
      out.push(
        <a key={i++} href={m[4]} target="_blank" rel="noopener noreferrer">
          {m[3]}
        </a>,
      );
    }
    last = at + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
