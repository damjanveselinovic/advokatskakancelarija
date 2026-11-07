"use client";

import { useLayoutEffect } from "react";

// Pojavljivanje sadržaja pri skrolovanju: jednom, IntersectionObserver + CSS.
// Bez JS-a ili uz prefers-reduced-motion sve je odmah vidljivo.
export default function ScrollReveal() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("main [data-reveal]"));
    const vh = window.innerHeight;
    const show = (el: HTMLElement, instant = false) => {
      if (instant) el.classList.add("instant");
      el.classList.add("is-in");
    };

    // Već vidljivi ili iznad ekrana (npr. posle promene jezika): odmah, bez animacije.
    const pending = els.filter((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92) {
        show(el, true);
        return false;
      }
      return true;
    });
    document.documentElement.classList.add("reveal-on");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const el = e.target as HTMLElement;
          // iznad ekrana (brzo skrolovanje / preskočeno): odmah
          if (e.isIntersecting) show(el);
          else if (e.boundingClientRect.top < 0) show(el, true);
          else continue;
          io.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    pending.forEach((el) => io.observe(el));

    // Klik na link ka sekciji: sadržaj do cilja (i cilj) odmah dostupan.
    const onClick = (ev: MouseEvent) => {
      const a = (ev.target as Element | null)?.closest?.("a");
      if (!a || !a.hash) return;
      const target = document.getElementById(decodeURIComponent(a.hash.slice(1)));
      if (!target) return;
      const limit = target.getBoundingClientRect().bottom + window.scrollY;
      pending.forEach((el) => {
        if (el.classList.contains("is-in")) return;
        if (el.getBoundingClientRect().top + window.scrollY <= limit) {
          show(el, true);
          io.unobserve(el);
        }
      });
    };
    document.addEventListener("click", onClick, true);

    return () => {
      io.disconnect();
      document.removeEventListener("click", onClick, true);
      document.documentElement.classList.remove("reveal-on");
    };
  }, []);
  return null;
}
