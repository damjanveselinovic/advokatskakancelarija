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
          lerp: 0.11,
          wheelMultiplier: 1,
          smoothWheel: true,
          anchors: false,
        });
    setLenis(lenis);
    restoreScroll();
    return () => {
      lenis?.destroy();
      clearLenis(lenis);
    };
  }, []);

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
      if (!lenis) return;
      e.preventDefault();
      if (lenis.isStopped) lenis.start();
      lenis.scrollTo(el);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
