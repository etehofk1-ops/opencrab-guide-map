import Link from "next/link";
import { docsBySlug, navGroups } from "@/lib/docs";

export function Sidebar({ active }: { active?: string }) {
  return <aside className="sidebar">
    <Link href="/" className="brand"><span className="brandMark">OC</span><span>OpenCrab 가이드맵</span></Link>
    <nav className="nav">
      {navGroups.map((group) => <div key={group.label} className="navGroup">
        <p>{group.label}</p>
        {group.items.map((slug) => <Link key={slug} href={`/docs/${slug}`} className={active === slug ? "active" : ""}>{docsBySlug[slug].title}</Link>)}
      </div>)}
    </nav>
  </aside>;
}
