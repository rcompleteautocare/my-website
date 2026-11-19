"use client";

import { useEffect, useState } from "react";
import { Search, User, Car, Wrench, X, type LucideIcon } from "lucide-react";

// Global search dialog. Results come from /api/search (real customers,
// vehicles and repair orders); nothing is hard-coded here.

type Result = { type: string; title: string; subtitle: string };

const ICONS: Record<string, LucideIcon> = { Customer: User, Vehicle: Car, "Repair Order": Wrench };
const MIN_QUERY_LENGTH = 2;

export function GlobalSearch({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const query = q.trim();
  const searchable = query.length >= MIN_QUERY_LENGTH;

  useEffect(() => {
    if (!searchable) return;
    const controller = new AbortController();
    // Debounce so a request is not sent for every keystroke.
    const timer = setTimeout(async () => {
      setStatus("loading");
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`, { signal: controller.signal });
        if (!res.ok) throw new Error(`search failed: ${res.status}`);
        const data: { results?: Result[] } = await res.json();
        setResults(data.results ?? []);
        setStatus("done");
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
        setResults([]);
        setStatus("error");
      }
    }, 200);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, searchable]);

  let body: React.ReactNode;
  if (!searchable) {
    body = <div className="p-10 text-center text-sm text-zinc-500">Type at least {MIN_QUERY_LENGTH} characters to search.</div>;
  } else if (status === "error") {
    body = <div role="alert" className="p-10 text-center text-sm text-red-400">Search is unavailable right now. Try again shortly.</div>;
  } else if (status === "done" && results.length === 0) {
    body = <div className="p-10 text-center text-sm text-zinc-500">No results found for “{query}”</div>;
  } else if (results.length === 0) {
    body = <div className="p-10 text-center text-sm text-zinc-500">Searching…</div>;
  } else {
    body = results.map((x, i) => {
      const Icon = ICONS[x.type] ?? Search;
      return (
        <button key={`${x.type}-${x.title}-${i}`} onClick={onClose} className="flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-white/[.05]">
          <span className="grid size-9 place-items-center rounded-lg bg-white/[.05] text-orange-400"><Icon size={17} /></span>
          <span>
            <b className="block text-sm">{x.title}</b>
            <small className="text-zinc-500">{x.type}{x.subtitle ? ` · ${x.subtitle}` : ""}</small>
          </span>
        </button>
      );
    });
  }

  return (
    <div className="fixed inset-0 z-[200] flex justify-center bg-black/70 p-4 pt-[12vh] backdrop-blur-sm" onMouseDown={onClose}>
      <div className="h-fit w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#17191b] shadow-2xl" onMouseDown={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-white/[.08] px-4">
          <Search className="text-zinc-500" size={19} />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search customers, vehicles, repair orders…" aria-label="Search" className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-600" />
          <button onClick={onClose} aria-label="Close search"><X size={18} /></button>
        </div>
        <div className="max-h-80 overflow-y-auto p-2">{body}</div>
      </div>
    </div>
  );
}
