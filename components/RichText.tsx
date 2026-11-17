import type { ReactNode } from "react";
import { parseInline, type Inline } from "@/lib/inline";

function render(nodes: Inline[]): ReactNode[] {
  return nodes.map((n, i) => {
    if (typeof n === "string") return n;
    if (n.k === "strong") return <strong key={i}>{render(n.c)}</strong>;
    if (n.k === "em") return <em key={i}>{render(n.c)}</em>;
    const external = /^https?:/i.test(n.href);
    return (
      <a key={i} href={n.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {render(n.c)}
      </a>
    );
  });
}

export default function RichText({ text }: { text: string }): ReactNode {
  return <>{render(parseInline(text))}</>;
}
