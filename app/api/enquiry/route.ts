import { NextResponse } from "next/server";
import { content, isLocale } from "@/content/site";

const MIN_FILL_MS = 2500;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

const EMAIL_RE = /^[^\s@<>,;]+@[^\s@<>,;]+\.[^\s@<>,;]{2,}$/;
const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/\r\n/g, "\n").trim().slice(0, max + 1) : "";
const oneLine = (v: string) => v.replace(/[\r\n]+/g, " ");

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 1000) for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW_MS)) hits.delete(k);
  return recent.length > MAX_PER_WINDOW;
}

const fail = (code: "invalid" | "config" | "send" | "rate", status: number) =>
  NextResponse.json({ ok: false, code }, { status });

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return fail("invalid", 400);
  }

  const started = Number(body.t);
  if (clean(body.website, 200) || !Number.isFinite(started) || Date.now() - started < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) return fail("rate", 429);

  const lang = typeof body.lang === "string" && isLocale(body.lang) ? body.lang : null;
  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 200);
  const message = clean(body.message, 4000);
  const idx = typeof body.area === "number" ? body.area : Number.NaN;
  const items = lang ? content[lang].practice.items : [];
  const area = Number.isInteger(idx) ? items[idx]?.title : undefined;

  if (
    !lang || !area ||
    name.length < 2 || name.length > 120 ||
    !/^[+\d][\d\s()./-]{5,39}$/.test(phone) ||
    (email !== "" && (email.length > 200 || !EMAIL_RE.test(email))) ||
    message.length < 5 || message.length > 4000
  ) {
    return fail("invalid", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  const to = process.env.ENQUIRY_TO_EMAIL;
  if (!apiKey || !from || !to) return fail("config", 503);

  const text = [
    `Ime i prezime / Name: ${name}`,
    `Telefon / Phone: ${phone}`,
    `E-mail: ${email || "—"}`,
    `Oblast / Area: ${area}`,
    `Jezik sajta / Site language: ${lang.toUpperCase()}`,
    "",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        ...(email ? { reply_to: email } : {}),
        subject: oneLine(`Novi upit: ${area} – ${name}`).slice(0, 200),
        text,
      }),
    });
    if (!res.ok) return fail("send", 502);
  } catch {
    return fail("send", 502);
  }
  return NextResponse.json({ ok: true });
}
