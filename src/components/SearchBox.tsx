"use client";
import Link from "next/link";
import { Search } from "lucide-react";
import { docs, type Doc, type Section } from "@/lib/docs";
import { useMemo, useState } from "react";

type SearchResult = {
  doc: Doc;
  matchedSections: string[];
};

function sectionText(section: Section) {
  return [
    section.heading,
    section.body,
    ...(section.steps ?? []),
    ...(section.bullets ?? []),
    section.callout ?? "",
  ].join(" ");
}

function findMatchedSections(doc: Doc, query: string) {
  if (!query) return [];

  const matches = doc.sections
    .filter((section) => sectionText(section).toLowerCase().includes(query))
    .map((section) => section.heading);

  const introText = `${doc.title} ${doc.description} ${doc.eyebrow}`.toLowerCase();
  if (introText.includes(query)) {
    return ["문서 소개", ...matches].slice(0, 3);
  }

  return matches.slice(0, 3);
}

export function SearchBox() {
  const [query, setQuery] = useState("");
  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return docs.slice(0, 5).map((doc) => ({ doc, matchedSections: [] }));

    return docs
      .map((doc) => ({ doc, matchedSections: findMatchedSections(doc, q) }))
      .filter(({ matchedSections }) => matchedSections.length > 0);
  }, [query]);

  return <div className="searchBox">
    <div className="searchInput"><Search size={18} /><input aria-label="가이드 검색" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="예: MCP URL, 온톨로지, GPT 연결" /></div>
    <div className="searchResults">{results.length > 0 ? results.map(({ doc, matchedSections }) => <Link key={doc.slug} href={`/docs/${doc.slug}`}><strong>{doc.title}</strong><span>{doc.description}</span>{matchedSections.length > 0 ? <small>매칭: {matchedSections.join(" · ")}</small> : null}</Link>) : <p className="emptySearch">검색 결과가 없습니다. 다른 키워드로 다시 검색해보세요.</p>}</div>
  </div>;
}
