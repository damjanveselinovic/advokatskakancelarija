import type { Block, ListItem } from "./blog";
import { plain } from "./inline";

// Pretvara Markdown iz Pages CMS rich-text polja u blokove koje blog već renderuje
// (h / p / ul / ol). Inline oznake (*, **, [tekst](url)) ostaju u tekstu, a prikazuje
// ih RichText. Sve što nije podržano (HTML, slike, kod) prikazuje se kao običan tekst.

const HEADING = /^ {0,3}#{1,6}\s+(.*?)(?:\s+#+)?\s*$/;
const ITEM = /^( *)([-*+]|\d{1,9}[.)])\s+(.*)$/;
const RULE = /^ {0,3}([-*_])(?:\s*\1){2,}\s*$/;
const FENCE = /^ {0,3}(```|~~~)/;
const QUOTE = /^ {0,3}>\s?/;

type ListState = { type: "ul" | "ol"; items: ListItem[]; indent: number };

export function markdownToBlocks(markdown: string): Block[] {
  const lines = markdown.replace(/^﻿/, "").replace(/\r\n?/g, "\n").replace(/\t/g, "    ").split("\n");
  const blocks: Block[] = [];
  let para: string[] = [];
  let list: ListState | null = null;
  let lastSub = false; // da li se nastavak reda dopisuje na podstavku ili na stavku
  let blank = false;
  let fenced = false;

  const flushPara = () => {
    if (para.length) {
      const text = para
        .join(" ")
        .replace(/<br\s*\/?>/gi, " ")
        .replace(/\s+/g, " ")
        .trim();
      if (text) blocks.push({ type: "p", text });
    }
    para = [];
  };
  const flushList = () => {
    if (list && list.items.length) blocks.push({ type: list.type, items: list.items });
    list = null;
  };
  const appendToLast = (current: ListState, text: string) => {
    const item = current.items[current.items.length - 1];
    if (lastSub && item.sub?.length) item.sub[item.sub.length - 1] += " " + text;
    else item.text += " " + text;
  };

  for (const raw of lines) {
    if (FENCE.test(raw)) {
      flushPara();
      flushList();
      fenced = !fenced;
      continue;
    }
    if (fenced) {
      if (raw.trim()) blocks.push({ type: "p", text: raw.trim() });
      continue;
    }
    if (!raw.trim()) {
      flushPara();
      blank = true;
      continue;
    }

    const line = raw.replace(QUOTE, "");
    const heading = HEADING.exec(line);
    if (heading) {
      flushPara();
      flushList();
      const title = plain(heading[1]).trim(); // naslovi se prikazuju kao običan tekst
      if (title) blocks.push({ type: "h", text: title });
      blank = false;
      continue;
    }
    if (RULE.test(line)) {
      flushPara();
      flushList();
      blank = false;
      continue;
    }

    const item = ITEM.exec(line);
    if (item) {
      flushPara();
      const indent = item[1].length;
      const type = /^\d/.test(item[2]) ? "ol" : "ul";
      const text = item[3].trim();
      if (list && indent < list.indent + 2 && type !== list.type) flushList();
      if (!list) list = { type, items: [], indent };
      if (indent >= list.indent + 2 && list.items.length) {
        const parent = list.items[list.items.length - 1];
        (parent.sub ??= []).push(text);
        lastSub = true;
      } else {
        list.items.push({ text });
        lastSub = false;
      }
      blank = false;
      continue;
    }

    const text = line.trim().replace(/\\$/, "").trim();
    if (list) {
      // nastavak stavke (bez praznog reda ili uvučen) ili kraj liste
      if (!blank || /^ {2,}/.test(line)) {
        appendToLast(list, text);
        blank = false;
        continue;
      }
      flushList();
    }
    para.push(text);
    blank = false;
  }
  flushPara();
  flushList();
  return blocks;
}
