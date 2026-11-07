"use client";

import { createContext, useContext, useRef, useState, type FormEvent, type ReactNode } from "react";
import type { Content } from "@/content/site";
import type { Locale } from "@/content/site";
import { getLenis } from "@/lib/scroll";

type Props = {
  lang: Locale;
  text: Content["enquiry"];
  areas: string[];
  children: ReactNode;
};

// Jedan modal za celu stranicu; dugmad ga otvaraju sa (ili bez) unapred izabrane oblasti.
const Ctx = createContext<(area: number | null, opener: HTMLElement) => void>(() => {});

export function EnquiryButton({
  label,
  area = null,
  ariaLabel,
  className,
  arrow,
}: {
  label: string;
  area?: number | null;
  ariaLabel?: string;
  className?: string;
  arrow?: boolean;
}) {
  const openEnquiry = useContext(Ctx);
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      aria-haspopup="dialog"
      onClick={(e) => openEnquiry(area, e.currentTarget)}
    >
      {label}
      {arrow && <span className="arrow" aria-hidden="true">→</span>}
    </button>
  );
}

type Status = "idle" | "sending" | "success" | "error";
const empty = { name: "", phone: "", email: "", area: "", message: "", website: "" };

export default function EnquiryProvider({ lang, text, areas, children }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const openedAt = useRef(0);
  const [values, setValues] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const open = (area: number | null, from: HTMLElement) => {
    opener.current = from;
    // posle uspeha: prazna forma; inače ostaju uneti podaci. Oblast: iz dugmeta ili prazna.
    setValues((v) => ({ ...(status === "success" ? empty : v), area: area === null ? "" : String(area) }));
    setStatus("idle");
    setError("");
    openedAt.current = Date.now();
    getLenis()?.stop();
    dialog.current?.showModal();
  };

  const onClose = () => {
    getLenis()?.start();
    opener.current?.focus(); // vrati fokus na dugme koje je otvorilo formu
  };

  const close = () => dialog.current?.close();

  const set = (k: keyof typeof empty) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang,
          name: values.name,
          phone: values.phone,
          email: values.email,
          area: Number(values.area),
          message: values.message,
          website: values.website,
          t: openedAt.current,
        }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; code?: string } | null;
      if (res.ok && data?.ok) {
        setValues(empty);
        setStatus("success");
        return;
      }
      const code = data?.code;
      setError(
        code === "config" ? text.errors.config
        : code === "invalid" ? text.errors.invalid
        : code === "rate" ? text.errors.rate
        : text.errors.generic,
      );
    } catch {
      setError(text.errors.generic);
    }
    setStatus("error"); // uneti podaci ostaju
  }

  const sending = status === "sending";

  return (
    <Ctx.Provider value={open}>
      {children}

      <dialog
        ref={dialog}
        className="modal"
        aria-labelledby="enquiry-title"
        data-lenis-prevent
        onClose={onClose}
        onClick={(e) => e.target === dialog.current && !sending && close()}
      >
        <div className="modal-panel">
          <button type="button" className="modal-x" onClick={close} aria-label={text.closeLabel}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
              <path d="M3 3l14 14M17 3L3 17" />
            </svg>
          </button>

          {status === "success" ? (
            <div className="modal-done" role="status">
              <p className="modal-success">{text.success}</p>
              <button type="button" className="btn" onClick={close} autoFocus>
                {text.close}
              </button>
            </div>
          ) : (
            <form onSubmit={submit} aria-busy={sending}>
              <h2 id="enquiry-title" className="modal-title">{text.title}</h2>

              <label className="field">
                <span>{text.name}</span>
                <input required name="name" autoComplete="name" maxLength={120} value={values.name} onChange={set("name")} disabled={sending} />
              </label>
              <label className="field">
                <span>{text.phone}</span>
                <input required name="phone" type="tel" autoComplete="tel" maxLength={40} pattern="[+\d][\d\s()./\-]{5,39}" value={values.phone} onChange={set("phone")} disabled={sending} />
              </label>
              <label className="field">
                <span>{text.email} <em>({text.optional})</em></span>
                <input name="email" type="email" autoComplete="email" maxLength={200} value={values.email} onChange={set("email")} disabled={sending} />
              </label>
              <label className="field">
                <span>{text.topic}</span>
                <select required name="area" value={values.area} onChange={set("area")} disabled={sending}>
                  <option value="" disabled>{text.topicPlaceholder}</option>
                  {areas.map((a, i) => (
                    <option key={a} value={i}>{a}</option>
                  ))}
                </select>
              </label>
              <label className="field">
                <span>{text.message}</span>
                <textarea required name="message" rows={4} minLength={5} maxLength={4000} value={values.message} onChange={set("message")} disabled={sending} />
              </label>

              {/* zamka za botove: ljudima nevidljivo */}
              <div className="hp" aria-hidden="true">
                <input tabIndex={-1} autoComplete="off" name="website" value={values.website} onChange={set("website")} />
              </div>

              {status === "error" && <p className="form-error" role="alert">{error}</p>}

              <button type="submit" className="btn btn-solid" disabled={sending}>
                {sending ? text.sending : text.send}
              </button>
            </form>
          )}
        </div>
      </dialog>
    </Ctx.Provider>
  );
}
