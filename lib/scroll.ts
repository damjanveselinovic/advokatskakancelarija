import type Lenis from "lenis";

const KEY = "scroll-restore";
let lenis: Lenis | null = null;

export const setLenis = (l: Lenis | null) => {
  lenis = l;
};
export const visible = (el: Element) => el.getClientRects().length > 0;
export const visibleById = (id: string) =>
  Array.from(
    document.querySelectorAll<HTMLElement>(`[id="${CSS.escape(id)}"]`)
  ).find(visible) ?? null;
export const clearLenis = (l: Lenis | null) => {
  if (lenis === l) lenis = null;
};
export const getLenis = () => lenis;

export function headerOffset() {
  const v = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--header-h")
  );
  return Number.isFinite(v) ? v : 64;
}

type Saved = { y: number; id?: string; ratio?: number };

/** Pamti mesto: sekciju ispod zaglavlja i relativan položaj unutar nje. */
export function saveScroll() {
  try {
    const y = window.scrollY;
    const saved: Saved = { y };
    if (y > 1) {
      const hdr = headerOffset();
      let cur: { id: string; top: number; h: number } | null = null;
      document
        .querySelectorAll<HTMLElement>("main section[id]")
        .forEach((s) => {
          if (!visible(s)) return;
          const r = s.getBoundingClientRect();
          if (r.top + y <= y + hdr + 1)
            cur = { id: s.id, top: r.top + y, h: r.height };
        });
      const c = cur as { id: string; top: number; h: number } | null;
      if (c && c.h > 0) {
        saved.id = c.id;
        saved.ratio = (y + hdr - c.top) / c.h;
      }
    }
    sessionStorage.setItem(KEY, JSON.stringify(saved));
  } catch {}
}

function jump(y: number) {
  const html = document.documentElement;
  const prev = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto"; // bez animacije pri vraćanju
  if (lenis) lenis.scrollTo(y, { immediate: true, force: true });
  else window.scrollTo(0, y);
  html.style.scrollBehavior = prev;
}

/** Vraća sačuvano mesto (poziva se pri montiranju novog jezika). */
export function restoreScroll() {
  let saved: Saved | null = null;
  try {
    const raw = sessionStorage.getItem(KEY);
    if (raw) saved = JSON.parse(raw);
    sessionStorage.removeItem(KEY);
  } catch {}
  if (!saved) return;
  const s = saved;
  const apply = () => {
    let y = s.y;
    const el = s.id ? visibleById(s.id) : null;
    if (el && s.ratio !== undefined) {
      const r = el.getBoundingClientRect();
      y = r.top + window.scrollY - headerOffset() + s.ratio * r.height;
    }
    jump(Math.max(0, y));
  };
  apply();
  requestAnimationFrame(() => requestAnimationFrame(apply)); // posle eventualnog pomeranja rasporeda
}
