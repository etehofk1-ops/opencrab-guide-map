"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Copy, ExternalLink } from "lucide-react";
import { docsBySlug, iconMap, mindmapImages, type Doc } from "@/lib/docs";

export function DocPage({ doc }: { doc: Doc }) {
  const Icon = iconMap[doc.icon as keyof typeof iconMap];
  return <main className="docMain">
    <div className="docHero">
      <div className="heroIcon"><Icon size={26} /></div>
      <p className="eyebrow">{doc.eyebrow}</p>
      <h1>{doc.title}</h1>
      <p className="lead">{doc.description}</p>
      <div className="heroActions">
        <a href="https://opencrab.sh/" target="_blank" rel="noreferrer">OPENCRAB 열기 <ExternalLink size={15} /></a>
        <button type="button" onClick={() => navigator.clipboard?.writeText(location.href)}>현재 문서 링크 복사 <Copy size={15} /></button>
      </div>
    </div>

    <article className="article">
      {doc.sections.map((section, index) => <section key={section.heading} id={`section-${index + 1}`} className="contentBlock">
        <h2>{section.heading}</h2>
        <p>{section.body}</p>
        {section.steps && <ol className="steps">{section.steps.map((step) => <li key={step}><span>{step}</span></li>)}</ol>}
        {section.bullets && <ul className="checks">{section.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={18} /><span>{bullet}</span></li>)}</ul>}
        {section.callout && <div className="callout">{section.callout}</div>}
      </section>)}

      {doc.slug === "mindmap" && <section className="contentBlock">
        <h2>마인드맵 갤러리</h2>
        <p>첨부 이미지를 사이트 안에서 바로 훑어볼 수 있게 정리했습니다.</p>
        <div className="mindmapGrid">{mindmapImages.map((image) => <a key={image.src} href={image.src} target="_blank" className="mindmapCard">
          <img src={image.src} alt={image.title} />
          <strong>{image.title}</strong>
        </a>)}</div>
      </section>}

      {doc.next && <section className="nextGrid">
        {doc.next.map((slug) => <Link key={slug} href={`/docs/${slug}`} className="nextCard">
          <span>다음 문서</span>
          <strong>{docsBySlug[slug].title}</strong>
          <ArrowRight size={18} />
        </Link>)}
      </section>}
    </article>
  </main>;
}
