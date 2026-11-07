"use client";

import Lenis from "lenis";
import { useEffect, useLayoutEffect } from "react";
import { clearLenis, getLenis, restoreScroll, setLenis, visibleById } from "@/lib/scroll";

export default function SmoothScroll() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = reduce
      ? null
      : new Lenis({
          autoRaf: true,
          lerp: 0.11, // blaga inercija, kratko usporavanje posle točkića
          wheelMultiplier: 1,
          smoothWheel: true, // samo točkić/trackpad; touch ostaje prirodan
          anchors: false,
        });
    setLenis(lenis);
    restoreScroll();
    return () => {
      lenis?.destroy();
      clearLenis(lenis);
    };
  }, []);

  // Linkovi ka sekcijama na istoj stranici: glatko, sa visinom zaglavlja.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const u = new URL(a.href, location.href);
      if (!u.hash || u.origin !== location.origin || u.pathname !== location.pathname) return;
      const el = visibleById(decodeURIComponent(u.hash.slice(1)));
      if (!el) return;
      const lenis = getLenis();
      if (!lenis) return; // reduced motion: nativno ponašanje (scroll-padding-top)
      e.preventDefault(); // pre Next Link-a (capture faza)
      if (lenis.isStopped) lenis.start(); // meni zaustavlja skrol; link ga nastavlja
      lenis.scrollTo(el); // Lenis uračunava scroll-padding-top (visina zaglavlja)
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
