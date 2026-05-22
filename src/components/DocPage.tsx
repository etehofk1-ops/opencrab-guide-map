"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, Copy, ExternalLink, TextAlignStart } from "lucide-react";
import { docsBySlug, iconMap, type Doc } from "@/lib/docs";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

function toMarkdown(doc: Doc) {
  return [
    `# ${doc.title}`,
    doc.description,
    ...doc.sections.flatMap((section) => [
      `## ${section.heading}`,
      section.body,
      ...(section.steps ? section.steps.map((step, index) => `${index + 1}. ${step}`) : []),
      ...(section.bullets ? section.bullets.map((bullet) => `- ${bullet}`) : []),
      ...(section.callout ? [`> ${section.callout}`] : []),
    ]),
  ].join("\n\n");
}

export function DocPage({ doc }: { doc: Doc }) {
  const Icon = iconMap[doc.icon as keyof typeof iconMap];
  const copyMarkdown = () => navigator.clipboard?.writeText(toMarkdown(doc));

  return <>
    <main className="docMain">
      <div className="docBreadcrumb"><Link href="/">OpenCrab 가이드</Link><span>/</span><span>{doc.eyebrow}</span></div>
      <article className="docArticle">
        <header className="docHeader">
          <div className="docHeaderTop">
            <div className="heroIcon"><Icon size={22} /></div>
            <div className="docActions">
              <button type="button" onClick={copyMarkdown}><Copy size={14} />Copy Markdown</button>
              <a href="https://opencrab.sh/" target="_blank" rel="noreferrer">Open <ChevronDown size={14} /></a>
            </div>
          </div>
          <p className="eyebrow">{doc.eyebrow}</p>
          <h1>{doc.title}</h1>
          <p className="lead">{doc.description}</p>
        </header>

        <div className="proseDoc">
          {doc.sections.map((section, index) => {
            const id = slugify(section.heading) || `section-${index + 1}`;
            return <section key={section.heading} id={id} className="contentBlock">
              <h2><a href={`#${id}`}>{section.heading}</a></h2>
              <p>{section.body}</p>
              {section.steps && <ol className="steps">{section.steps.map((step) => <li key={step}><span>{step}</span></li>)}</ol>}
              {section.bullets && <ul className="checks">{section.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={17} /><span>{bullet}</span></li>)}</ul>}
              {section.callout && <div className="callout">{section.callout}</div>}
            </section>;
          })}
        </div>

        {doc.next && <section className="nextGrid">
          {doc.next.map((slug) => <Link key={slug} href={`/docs/${slug}`} className="nextCard">
            <span>다음 문서</span>
            <strong>{docsBySlug[slug].title}</strong>
            <ArrowRight size={16} />
          </Link>)}
        </section>}
      </article>
    </main>
    <aside className="toc">
      <h3><TextAlignStart size={16} />On this page</h3>
      <nav>
        {doc.sections.map((section, index) => {
          const id = slugify(section.heading) || `section-${index + 1}`;
          return <a key={section.heading} href={`#${id}`}>{section.heading}</a>;
        })}
      </nav>
      <a className="tocExternal" href="https://opencrab.sh/" target="_blank" rel="noreferrer">OPENCRAB 접속 <ExternalLink size={13} /></a>
    </aside>
  </>;
}
