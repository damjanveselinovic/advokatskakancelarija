"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { contactEmail, locales, phone, type Locale } from "@/content/site";
import { getLenis, saveScroll } from "@/lib/scroll";

type Props = {
  lang: Locale;
  brand: { name: string; monogram: string; logoAlt: string };
  nav: {
    home: string; about: string; team: string; practice: string; blog: string; contact: string;
    ariaMain: string; openMenu: string; closeMenu: string; langLabel: string;
    langNames: Record<Locale, string>;
  };
};

export default function Header({ lang, brand, nav }: Props) {
  const pathname = usePathname() ?? `/${lang}`;
  const [open, setOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const img = useRef<HTMLImageElement>(null);
  const header = useRef<HTMLElement>(null);
  const burger = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = img.current;
    if (el && el.complete && el.naturalWidth === 0) setLogoFailed(true);
  }, []);

  // Otvoren meni: zaustavi skrol stranice (Lenis + nativni), fokus u meni, Escape zatvara.
  useEffect(() => {
    if (!open) return;
    getLenis()?.stop();
    document.documentElement.classList.add("menu-open");
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burger.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("menu-open");
      const l = getLenis();
      if (l?.isStopped) l.start(); // ne prekidaj skrol koji je link vec pokrenuo
    };
  }, [open]);

  // Prelaz na siroki raspored (linkovi u traci) zatvara meni da ne ostane zakljucan skrol.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1180px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Fokus ostaje u meniju i kontrolama zaglavlja dok je meni otvoren.
  const trapTab = (e: ReactKeyboardEvent) => {
    if (!open || e.key !== "Tab" || !header.current) return;
    const items = Array.from(
      header.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
    ).filter((el) => el.getClientRects().length > 0 && el.tabIndex !== -1);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const links = [
    { label: nav.home, href: `/${lang}#home` },
    { label: nav.about, href: `/${lang}/about` },
    { label: nav.team, href: `/${lang}/about#team` },
    { label: nav.practice, href: `/${lang}#practice` },
    { label: nav.blog, href: `/${lang}/blog` },
    { label: nav.contact, href: `/${lang}#contact` },
  ];
  const close = () => setOpen(false);
  const switchHref = (l: Locale) => pathname.replace(/^\/(sr|en)(?=\/|$)/, `/${l}`);

  return (
    <header ref={header} className={`site-header${open ? " is-open" : ""}`} onKeyDown={trapTab}>
      <div className="bar container">
        <Link href={`/${lang}#home`} className="brand" onClick={close}>
          {logoFailed ? (
            <span className="monogram" aria-hidden="true">{brand.monogram}</span>
          ) : (
            <span className="logo-ring">
              <Image
                ref={img}
              src="/newlogo.png"
              alt=""
              width={72}
              height={72}
              quality={90}
              priority
              className="logo"
              onError={() => setLogoFailed(true)}
              />
            </span>
          )}
          <span className="brand-name">{brand.name}</span>
        </Link>

        <nav className="nav-desktop" aria-label={nav.ariaMain}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>

        <div className="actions">
          <div className="lang" role="group" aria-label={nav.langLabel}>
            <svg className="globe" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9.5" />
              <ellipse cx="12" cy="12" rx="4" ry="9.5" />
              <path d="M2.5 12h19M4 7.2h16M4 16.8h16M12 2.5v19" />
            </svg>
            {locales.map((l, i) => (
              <span key={l}>
                {i > 0 && <span className="lang-sep" aria-hidden="true">/</span>}
                <Link
                  href={switchHref(l)}
                  scroll={false}
                  onClick={saveScroll}
                  hrefLang={l}
                  lang={l}
                  aria-label={nav.langNames[l]}
                  aria-current={l === lang ? "true" : undefined}
                  className={l === lang ? "lang-active" : undefined}
                >
                  {l.toUpperCase()}
                </Link>
              </span>
            ))}
          </div>
          <button
            ref={burger}
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="28" height="14" viewBox="0 0 28 14" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
              {open ? <path d="M3 1l22 12M25 1L3 13" /> : <path d="M0 2.5h28M0 11.5h28" />}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`nav-mobile${open ? " is-open" : ""}`}
        aria-label={nav.ariaMain}
        data-lenis-prevent
      >
        <div className="menu-inner">
          <div className="menu-links">
            {links.map((l, i) => (
              <Link
                key={l.href}
                ref={i === 0 ? firstLink : undefined}
                href={l.href}
                onClick={close}
                tabIndex={open ? undefined : -1}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="menu-contact">
            <a href={phone.href} tabIndex={open ? undefined : -1}>{phone.display}</a>
            <a href={`mailto:${contactEmail}`} tabIndex={open ? undefined : -1}>{contactEmail}</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
