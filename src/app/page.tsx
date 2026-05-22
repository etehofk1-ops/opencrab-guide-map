import Link from "next/link";
import { ArrowRight, Cable, Layers3, Rocket, Sparkles } from "lucide-react";
import { SearchBox } from "@/components/SearchBox";

const cards = [
  { href: "/docs/quick-start", icon: Rocket, title: "5분 시작", desc: "가입부터 MCP URL 복사까지 바로 따라가기" },
  { href: "/docs/ontology", icon: Sparkles, title: "온톨로지 이해", desc: "지식 그래프와 9가지 의미 단위 쉽게 이해하기" },
  { href: "/docs/marketplace", icon: Layers3, title: "팩 고르기", desc: "마켓플레이스에서 온톨로지 팩 선택·적용" },
  { href: "/docs/mcp-url", icon: Cable, title: "MCP 연결", desc: "GPT, Claude, Codex, Cursor, Hermes-Agent 연결" },
];

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
    <section className="cardGrid">{cards.map((card) => { const Icon = card.icon; return <Link href={card.href} className="featureCard" key={card.href}><Icon size={26}/><h3>{card.title}</h3><p>{card.desc}</p><ArrowRight size={18}/></Link> })}</section>
  </main>;
}
