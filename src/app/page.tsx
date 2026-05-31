import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SearchBox } from "@/components/SearchBox";
import { docs, iconMap } from "@/lib/docs";

const featuredDocs = docs.filter((doc) => doc.featured);

export default function Home() {
  return <main className="home">
    <section className="homeHero">
      <div className="pill">6/1 정식 런칭 예정 · 테스트 기간 무료 팩 사용 가능</div>
      <h1>OPENCRAB을 처음 쓰는 사람을 위한<br/>가이드맵</h1>
      <p>마켓플레이스에서 온톨로지 팩을 고르고, MCP URL을 생성해 GPT, Claude, Codex, Claude Code, Cursor, Hermes-Agent에 연결하는 과정을 문서형 사이트로 정리했습니다.</p>
      <div className="homeActions">
        <Link href="/docs/quick-start">5분 시작하기 <ArrowRight size={18} /></Link>
        <a href="https://opencrab.sh/" target="_blank" rel="noreferrer">OPENCRAB 접속</a>
      </div>
    </section>
    <section className="homePanel">
      <div>
        <p className="eyebrow">빠른 검색</p>
        <h2>막힌 지점을 바로 찾기</h2>
      </div>
      <SearchBox />
    </section>
    <section className="cardGrid">{featuredDocs.map((doc) => { const Icon = iconMap[doc.icon as keyof typeof iconMap]; return <Link href={`/docs/${doc.slug}`} className="featureCard" key={doc.slug}><Icon size={26}/><h3>{doc.title}</h3><p>{doc.description}</p><ArrowRight size={18}/></Link> })}</section>
  </main>;
}
