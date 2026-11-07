"use client";

import { useId, useState } from "react";

export default function Faq({ title, items }: { title: string; items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const id = useId();
  return (
    <div className="faq">
      <h3 className="faq-title">{title}</h3>
      <ul className="faq-list">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <li key={it.q} className={`faq-item${isOpen ? " is-open" : ""}`}>
              <button
                type="button"
                className="faq-q"
                id={`${id}-q${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-a${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{it.q}</span>
                <span className="faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              <div className="faq-a" id={`${id}-a${i}`} role="region" aria-labelledby={`${id}-q${i}`} inert={!isOpen}>
                <div className="faq-a-inner">
                  <p>{it.a}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
