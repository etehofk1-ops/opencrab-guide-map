import Link from "next/link";
import { Search } from "lucide-react";
import { docsBySlug, navGroups } from "@/lib/docs";

export function Sidebar({ active }: { active?: string }) {
  return <aside className="sidebar">
    <div className="sidebarHeader">
      <Link href="/" className="brand"><span className="brandMark">O</span><span>OpenCrab 가이드</span></Link>
    </div>
    <Link href="/" className="searchTrigger"><Search size={15} /><span>검색</span><kbd>⌘ K</kbd></Link>
    <nav className="nav">
      {navGroups.map((group) => <div key={group.label} className="navGroup">
        <p>{group.label}</p>
        {group.items.map((slug) => <Link key={slug} href={`/docs/${slug}`} className={active === slug ? "active" : ""}>{docsBySlug[slug].title}</Link>)}
      </div>)}
    </nav>
  </aside>;
}
