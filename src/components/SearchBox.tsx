"use client";
import Link from "next/link";
import { Search } from "lucide-react";
import { docs } from "@/lib/docs";
import { useMemo, useState } from "react";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return docs.slice(0, 5);
    return docs.filter((doc) => `${doc.title} ${doc.description} ${doc.eyebrow}`.toLowerCase().includes(q));
  }, [query]);
  return <div className="searchBox">
    <div className="searchInput"><Search size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="예: MCP URL, 온톨로지, GPT 연결" /></div>
    <div className="searchResults">{results.map((doc) => <Link key={doc.slug} href={`/docs/${doc.slug}`}><strong>{doc.title}</strong><span>{doc.description}</span></Link>)}</div>
  </div>;
}
