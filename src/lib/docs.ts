import { BookOpen, Cable, CircleHelp, Compass, GitBranch, Layers3, MessageSquareText, Network, PackageCheck, Rocket, ShieldCheck, Sparkles, Store, Workflow } from "lucide-react";

export type Section = { heading: string; body: string; bullets?: string[]; callout?: string; steps?: string[] };
export type Doc = { slug: string; title: string; eyebrow: string; description: string; icon: string; sections: Section[]; next?: string[]; featured?: boolean; sourceNote?: string };

export const GUIDE_LAST_CHECKED = "2026-05-31";
export const GUIDE_SOURCE_NOTE = "공개 문서, 공개 GitHub README, 서비스 화면 기준 안내를 함께 정리했습니다. 베타·가격·연결 UI는 실제 OPENCRAB 최신 화면에서 재확인이 필요합니다.";

export const navGroups = [
  { label: "시작하기", items: ["quick-start", "what-is-opencrab", "launch-note"] },
  { label: "핵심 이해", items: ["ontology", "localcrab-opencrab", "marketplace", "packs", "pack-structure"] },
  { label: "연결하기", items: ["mcp-url", "workflow-builder", "connect-gpt-claude", "connect-devtools"] },
  { label: "운영·보안", items: ["security-privacy", "developer-examples"] },
  { label: "도움말", items: ["faq", "troubleshooting"] },
];

export const iconMap = { Rocket, BookOpen, Sparkles, Layers3, Store, PackageCheck, Cable, MessageSquareText, Compass, CircleHelp, ShieldCheck, GitBranch, Network, Workflow } as const;

export const docs: Doc[] = [
  {
    slug: "quick-start",
    title: "5분 시작",
    eyebrow: "처음 시작",
    description: "OPENCRAB 가입부터 MCP URL 복사까지 가장 짧은 사용 흐름입니다.",
    icon: "Rocket",
    featured: true,
    sections: [
      { heading: "목표", body: "처음에는 모든 기능을 이해하려고 하기보다, 마켓플레이스의 온톨로지 팩을 내 AI 도구에 연결해 실제로 질문해보는 것이 목표입니다.", bullets: ["OPENCRAB 계정 만들기", "마켓플레이스에서 팩 선택", "MCP URL 생성", "GPT, Claude 또는 개발 도구에 연결"] },
      { heading: "1단계 - OPENCRAB 접속", body: "브라우저에서 opencrab.sh에 접속합니다.", steps: ["https://opencrab.sh/ 열기", "오른쪽 상단 Start 또는 Sign in 선택", "이메일 인증 또는 Google Auth로 가입"] },
      { heading: "2단계 - 마켓플레이스 이동", body: "로그인 후 마켓플레이스로 이동해 원하는 온톨로지 팩을 고릅니다.", callout: "현재는 테스트 기간이라 배포된 팩을 무료로 이용할 수 있습니다. 정식 런칭은 6/1 예정입니다." },
      { heading: "3단계 - 팩 구매/적용", body: "선택한 팩을 구매 또는 적용하면 해당 데이터셋이 내 워크스페이스에 연결됩니다.", bullets: ["무료 팩은 바로 적용", "Pro/Expert 팩은 정책에 따라 결제 또는 승인 절차가 붙을 수 있음", "적용 후 오른쪽 MCP 패널을 확인"] },
      { heading: "4단계 - MCP URL 생성", body: "오른쪽 MCP 패널에서 URL을 생성하고 복사합니다.", steps: ["MCP 패널 열기", "Generate URL 또는 URL 생성 클릭", "복사 버튼으로 URL 저장", "외부 AI 도구의 커넥터/MCP 설정 화면에 붙여넣기"] },
      { heading: "5단계 - GPT 또는 Claude에서 연결", body: "GPT나 Claude에서 커넥터 또는 앱 만들기 메뉴를 열고, OPENCRAB에서 복사한 URL을 연결합니다.", bullets: ["GPT 앱 연결 참고 영상: https://youtu.be/KsGF34fcLXc", "연결 후 온톨로지 팩 이름을 언급하며 질문", "응답이 데이터셋 기반으로 나오는지 확인"] },
    ], next: ["what-is-opencrab", "mcp-url"]
  },
  { slug: "what-is-opencrab", title: "OPENCRAB이란?", eyebrow: "소개", description: "문서, 웹 리서치, 도메인 지식을 재사용 가능한 온톨로지 팩과 Graph RAG 흐름으로 바꾸는 플랫폼입니다.", icon: "BookOpen", sections: [
    { heading: "한 문장 정의", body: "OPENCRAB은 흩어진 지식을 엔티티, 개념, 증거, 관계, 주장 단위로 구조화해 AI가 다시 꺼내 쓸 수 있게 만드는 Ontology Graph RAG 플랫폼입니다." },
    { heading: "왜 필요한가", body: "일반 파일 업로드 RAG는 문서를 검색하는 데 강하지만, 도메인 지식의 관계와 맥락을 장기적으로 재사용하기 어렵습니다. OPENCRAB은 지식을 팩으로 묶고 MCP로 연결해 여러 AI 환경에서 계속 활용하게 합니다.", bullets: ["도메인별 지식 통합", "근거 기반 답변", "팩 단위 재사용", "AI 워크스페이스와 MCP 연결"] },
    { heading: "활용 예시", body: "마케팅 기획, 유튜브 전략, 브랜드·제품 분석, 리서치 노트 정리, 개인 지식 엔진, 조직의 내부 지식 검색에 사용할 수 있습니다." }
  ], next: ["ontology", "marketplace"] },
  { slug: "ontology", title: "온톨로지 쉽게 이해하기", eyebrow: "핵심 개념", description: "온톨로지를 비전공자도 이해할 수 있게 데이터 지도 관점으로 설명합니다.", icon: "Sparkles", featured: true, sections: [
    { heading: "온톨로지는 지식의 지도입니다", body: "문서 더미에서 중요한 사람, 제품, 개념, 사건, 증거를 뽑고 서로 어떤 관계인지 연결한 구조가 온톨로지입니다." },
    { heading: "시멘틱 문법", body: "OPENCRAB은 주체, 리소스, 증거, 개념, 결과, 클레임, 커뮤니티, 정책, 강도 같은 의미 단위를 다룰 수 있습니다. 정확한 세부 명칭은 OPENCRAB 공식 문서와 서비스 화면 기준으로 확인이 필요합니다.", bullets: ["Subject: 행동하거나 설명되는 주체", "Resource: 참조되는 자료나 자원", "Evidence: 답변의 근거", "Concept: 반복되는 핵심 개념", "Outcome/Claim/Policy: 결과, 주장, 규칙"] },
    { heading: "AI 답변이 달라지는 이유", body: "단순 키워드 검색이 아니라 관계 그래프를 따라 맥락을 찾기 때문에, GPT나 Claude가 특정 도메인의 구조를 더 안정적으로 이해할 수 있습니다." },
    { heading: "Evidence-first 구조", body: "공개 GitHub 문서 기준으로 OpenCrab/LocalCrab은 각 개념과 관계가 어떤 원문, 문서, 이미지, 청크에서 왔는지 추적 가능한 evidence-first 구조를 지향합니다.", bullets: ["엔티티와 관계를 근거 없이 승격하지 않는 방식", "source URL/path, timestamp, hash 같은 근거 메타데이터", "OCR/이미지 자료까지 evidence로 다루는 확장 가능성", "Neo4j import/check를 통한 그래프 무결성 검증"] }
  ], next: ["packs", "marketplace"] },
  { slug: "marketplace", title: "마켓플레이스에서 팩 고르기", eyebrow: "사용법", description: "테스트 기간에 배포된 온톨로지 팩을 선택하고 적용하는 방법입니다.", icon: "Store", featured: true, sections: [
    { heading: "팩이란?", body: "팩은 특정 주제나 도메인에 대해 미리 정리된 온톨로지 데이터셋입니다. 예를 들어 산업 리서치, 콘텐츠 전략, 제품 분석 지식이 팩으로 제공될 수 있습니다." },
    { heading: "선택 기준", body: "내가 AI에게 묻고 싶은 질문과 가장 가까운 도메인의 팩을 고르면 됩니다.", bullets: ["질문 주제가 팩 설명과 일치하는가", "공개/무료/유료 정책 확인", "최신 업데이트와 제공 범위 확인", "GPT/Claude 연결 목적에 맞는지 확인"] },
    { heading: "적용 후 확인", body: "팩을 적용한 뒤 MCP 패널에서 URL이 생성 가능한지, 테스트 질문에 팩 내용이 반영되는지 확인합니다." }
  ], next: ["packs", "mcp-url"] },
  { slug: "packs", title: "온톨로지 팩 운영 정책", eyebrow: "티어별", description: "무료, Pro, Expert 팩의 차이를 간단히 이해합니다.", icon: "PackageCheck", sections: [
    { heading: "무료", body: "배포된 공개 팩을 사용해 OPENCRAB의 검색과 연결 흐름을 체험합니다.", bullets: ["공개 온톨로지 팩 접근", "기본 graph search", "외부 AI 도구에서 조회"] },
    { heading: "Pro", body: "개인 또는 팀의 문서와 리서치 데이터를 기반으로 비공개 온톨로지 워크스페이스를 구축합니다.", bullets: ["Private document ingest", "Personal graph RAG workspace", "Isolated ontology storage"] },
    { heading: "Expert", body: "전문가가 자신의 온톨로지 팩을 만들고, 검토 후 판매·배포하는 모델입니다.", bullets: ["팩 퍼블리싱 워크플로우", "MCP 도구에서 역방향 ingest", "전문 지식 상품화"] }
  ], next: ["mcp-url"] },

  { slug: "localcrab-opencrab", title: "LocalCrab과 OpenCrab SaaS", eyebrow: "구조 이해", description: "LocalCrab은 온톨로지 팩을 만드는 로컬 공장이고, OpenCrab SaaS는 그 팩을 배포·설치·연결하는 hosted ecosystem입니다.", icon: "GitBranch", featured: true, sections: [
    { heading: "한 줄 관계", body: "공개 GitHub 문서 기준 핵심 문장은 LocalCrab builds. OpenCrab SaaS distributes. 입니다. 즉 만드는 곳과 배포하는 곳의 역할이 분리되어 있습니다." },
    { heading: "LocalCrab이 하는 일", body: "LocalCrab은 문서, 웹 리서치, 이미지, 로그 같은 원천 자료를 수집하고 파싱한 뒤 근거 인덱스와 그래프를 만들어 OpenCrab Pack v1 ZIP으로 내보내는 로컬 런타임에 가깝습니다.", bullets: ["자료 수집과 파싱", "evidence index 생성", "노드와 엣지 추출", "품질 검증과 Neo4j 검증", "OpenCrab Pack v1 ZIP export"] },
    { heading: "OpenCrab SaaS가 하는 일", body: "opencrab.sh의 hosted 서비스는 만들어진 팩을 업로드, 설치, 검색, 공유, 판매하고 MCP URL로 외부 AI 도구에 연결하는 배포 계층입니다.", bullets: ["마켓플레이스", "팩 설치와 적용", "Remote MCP URL 생성", "GPT, Claude, Codex, Cursor, Hermes-Agent 같은 도구 연결", "Expert 팩 퍼블리싱"] },
    { heading: "초보자에게 중요한 의미", body: "처음 사용하는 사람은 LocalCrab 내부 구조를 몰라도 됩니다. opencrab.sh에서 팩을 고르고 MCP URL을 복사하면 됩니다. 개발자나 Expert 사용자는 LocalCrab/Pack 구조를 이해하면 더 깊게 활용할 수 있습니다." }
  ], next: ["pack-structure", "marketplace"] },
  { slug: "pack-structure", title: "OpenCrab Pack 구조", eyebrow: "Pack v1", description: "OpenCrab 팩은 단순 문서 묶음이 아니라 근거, 그래프, 품질 리포트, 샘플 질문이 포함된 지식 그래프 패키지입니다.", icon: "Network", featured: true, sections: [
    { heading: "팩은 전달 계약입니다", body: "공개 문서의 OpenCrab Pack v1 ZIP Format은 LocalCrab과 OpenCrab SaaS 사이에서 팩을 전달하기 위한 계약처럼 동작합니다. 어떤 파일이 있어야 하고, 그래프와 evidence가 어떻게 담기는지 정해져 있습니다." },
    { heading: "대표 구성 파일", body: "팩 안에는 사용자에게 보이는 README뿐 아니라 그래프 데이터와 검증 결과가 함께 들어갑니다.", bullets: ["manifest.json", "graph/nodes.jsonl", "graph/edges.jsonl", "evidence/index.jsonl", "quality/report.json", "neo4j/import.cypher", "neo4j/opencrab_ingest.jsonl", "neo4j/export_status.json", "README.md", "sample_queries.json", "community_reports.json"] },
    { heading: "왜 신뢰에 도움이 되나요", body: "팩 구조에 evidence와 quality report가 포함되면 AI가 답변할 때 어떤 근거에서 나온 지식인지 추적하기 쉬워집니다. 물론 실제 정확성은 팩 제작 품질과 최신성에 따라 달라지므로 중요한 의사결정에는 원문 확인이 필요합니다." },
    { heading: "일반 사용자 관점", body: "처음에는 파일 이름을 외울 필요가 없습니다. OpenCrab 팩은 문서 묶음이 아니라 근거가 추적되는 지식 그래프 패키지라고 이해하면 충분합니다." }
  ], next: ["mcp-url", "workflow-builder"] },
  { slug: "workflow-builder", title: "Workflow agent builder", eyebrow: "Expert Workflow", description: "여러 온톨로지 팩을 순서대로 묶어 Remote MCP가 실행할 수 있는 재사용 워크플로우로 만드는 기능입니다.", icon: "Workflow", featured: true, sections: [
    { heading: "무엇을 만드는 기능인가요", body: "공식 사이트의 Workflow agent builder는 내 팩, 무료 팩, 유료 팩을 연결해 하나의 재사용 가능한 workflow로 구성하는 기능입니다. Remote MCP가 워크플로우 이름을 호출하면 정해진 순서대로 컨텍스트를 제공합니다." },
    { heading: "단일 팩과 다른 점", body: "단일 팩은 특정 도메인 지식을 연결하는 데 좋고, workflow는 여러 도메인의 지식을 단계적으로 조합하는 데 좋습니다.", bullets: ["브랜드 분석 팩 + 마케팅 전략 팩 + 콘텐츠 기획 팩", "정책/법률 팩 + 공공데이터 팩 + 제안서 작성 팩", "제품 분석 팩 + 고객 페르소나 팩 + 상세페이지 카피 팩"] },
    { heading: "추천 사용 흐름", body: "처음에는 하나의 공개 팩으로 MCP 연결을 테스트하고, 이후 반복해서 쓰는 질문 흐름이 생기면 workflow로 묶는 방식이 좋습니다.", steps: ["마켓플레이스에서 필요한 팩 적용", "각 팩이 원하는 답변을 주는지 개별 테스트", "Workflow에서 실행 순서 구성", "GPT/Claude/개발 도구에서 workflow 이름으로 호출"] },
    { heading: "주의사항", body: "무료/유료/비공개 팩을 함께 묶을 때는 권한, 결제, 데이터 처리 정책이 달라질 수 있습니다. 정식 런칭 전 UI와 가격 정책은 바뀔 수 있으니 실제 서비스 화면을 기준으로 확인하세요." }
  ], next: ["connect-gpt-claude", "connect-devtools"] },
  { slug: "security-privacy", title: "보안과 데이터 처리", eyebrow: "운영·보안", description: "MCP URL, 업로드 문서, 결제, 외부 처리 서비스에 대해 초보자가 알아야 할 보안 체크리스트입니다.", icon: "ShieldCheck", featured: true, sections: [
    { heading: "MCP URL은 비밀 주소처럼 다루기", body: "OPENCRAB에서 생성한 MCP URL은 내 워크스페이스나 적용된 데이터셋 접근 권한과 연결될 수 있습니다. 공개 채팅방, 블로그, 스크린샷, GitHub README에 그대로 올리지 않는 것이 안전합니다." },
    { heading: "처리될 수 있는 데이터", body: "공식 Privacy 문서 기준으로 계정 정보, 결제 정보, 업로드/연결 문서, 메타데이터, 온톨로지, 노드, 엣지, 검색 질의, 생성 결과, 접속 로그, 오류 기록, 보안 이벤트, 문의 내역 등이 처리될 수 있습니다." },
    { heading: "외부 서비스 연동 가능성", body: "서비스 운영 과정에서 인증/데이터 저장, 호스팅, 결제, AI 분석 API, 사용자가 직접 연결한 외부 서비스가 관여할 수 있습니다.", bullets: ["Supabase 등 인증/데이터 저장", "Vercel 등 호스팅/배포", "Paddle 등 결제 처리", "AI/embedding/analysis API provider", "Notion, Google Drive, GitHub 등 사용자가 직접 연결한 서비스"] },
    { heading: "초보자 체크리스트", body: "민감한 문서를 올리기 전에는 공개/비공개 범위, 삭제 가능 여부, 조직 정책, 결제/환불 정책, 로그 보관 정책을 확인하세요.", callout: "이 가이드는 공개 문서와 서비스 화면을 기준으로 정리한 안내입니다. 법적·보안 판단은 공식 약관과 최신 정책을 기준으로 확인해야 합니다." }
  ], next: ["troubleshooting", "faq"] },
  { slug: "developer-examples", title: "개발자 활용 예시", eyebrow: "생태계", description: "OpenCrab MCP와 온톨로지 팩을 앱, 의사결정 그래프, 공공데이터 실험에 활용하는 공개 사례를 정리했습니다.", icon: "Compass", sections: [
    { heading: "공개 repo 기준으로 본 생태계", body: "GitHub에는 OpenCrab 이름을 가진 여러 프로젝트가 있습니다. 모두 공식이라고 단정하면 안 되며, 아래 내용은 공개 README 기준으로 참고 가능한 예시입니다." },
    { heading: "AlexAI-MCP/OpenCrab", body: "LocalCrab, MetaOntology OS, CrabHarness, MCP server tools, OpenCrab Pack v1 ZIP 등 개발자 문서가 포함된 공개 저장소입니다. opencrab.sh와의 관계를 이해하는 데 가장 유용합니다." },
    { heading: "CrabForge", body: "OpenCrab MCP endpoint와 온톨로지 팩을 바탕으로 프론트엔드 앱 또는 GitHub Pages 사이트 생성을 돕는 실험성 builder로 보입니다.", bullets: ["MCP endpoint 입력", "팩 목록 로딩", "팩 선택", "사이트 목적/대상/페이지 구조/디자인 방향 입력", "GitHub OAuth 연결과 공개 repo 생성 흐름"] },
    { heading: "Life Decision Graph", body: "OpenCrab MCP 도구를 의사결정 그래프 앱에 활용하는 MVP 사례입니다. README에는 opencrab_search_packs, opencrab_query, opencrab_search_nodes, opencrab_get_node_context 같은 호출 흐름이 등장합니다." },
    { heading: "G2B pack ingest 실험", body: "공공 조달 데이터 JSON shard를 OpenCrab ingest에 활용하려는 실험 repo도 확인됩니다. 개발자는 특정 산업/공공데이터를 팩으로 바꿔 앱에 연결하는 방향을 참고할 수 있습니다." }
  ], next: ["connect-devtools", "pack-structure"] },
  { slug: "mcp-url", title: "MCP URL 생성", eyebrow: "연결 핵심", description: "OPENCRAB에서 생성한 URL을 외부 AI 도구에 붙여넣는 방법입니다.", icon: "Cable", featured: true, sections: [
    { heading: "MCP가 하는 일", body: "MCP는 AI 도구가 외부 데이터와 도구를 안전하게 호출할 수 있게 하는 연결 규격입니다. OPENCRAB의 URL은 온톨로지 팩을 AI 환경에 연결하는 입구입니다." },
    { heading: "생성 절차", body: "로그인 후 적용된 팩 상세 또는 워크스페이스 오른쪽 MCP 패널에서 URL을 생성합니다.", steps: ["적용된 팩 확인", "MCP 패널 열기", "URL 생성", "복사", "외부 도구의 커넥터/MCP 설정에 붙여넣기"] },
    { heading: "보안 주의", body: "MCP URL은 내 데이터셋 접근 권한과 연결될 수 있으므로 공개 채팅방이나 문서에 그대로 노출하지 않는 것이 좋습니다.", callout: "이 사이트는 URL을 입력받거나 저장하지 않습니다. 실제 OPENCRAB에서 생성한 URL은 본인만 보관하세요." }
  ], next: ["connect-gpt-claude", "connect-devtools"] },
  { slug: "connect-gpt-claude", title: "GPT·Claude 연결", eyebrow: "일반 사용자", description: "커넥터 또는 앱 만들기 기능으로 OPENCRAB 팩을 연결합니다.", icon: "MessageSquareText", sections: [
    { heading: "GPT 연결", body: "GPT에서 커넥터 또는 앱 만들기 화면을 열고 OPENCRAB MCP URL을 등록합니다. 자세한 흐름은 사용자가 공유한 참고 영상(https://youtu.be/KsGF34fcLXc)을 따라가면 됩니다." },
    { heading: "Claude 연결", body: "Claude에서도 커넥터 또는 MCP 연결을 지원하는 환경에서 같은 URL을 등록합니다. 조직/플랜별 UI는 달라질 수 있어 실제 메뉴명은 확인이 필요합니다." },
    { heading: "연결 후 테스트 질문", body: "연결이 끝나면 팩 이름과 목적을 포함해 질문하면 좋습니다.", bullets: ["이 OPENCRAB 온톨로지 팩 기준으로 핵심 개념을 요약해줘", "증거가 있는 주장만 뽑아서 표로 정리해줘", "이 도메인에서 중요한 주체와 리소스 관계를 설명해줘"] }
  ], next: ["connect-devtools", "faq"] },
  { slug: "connect-devtools", title: "개발 도구 연결", eyebrow: "Codex·Claude Code·Cursor", description: "MCP를 지원하는 개발 환경에서 OPENCRAB을 컨텍스트 도구로 활용합니다.", icon: "Compass", sections: [
    { heading: "지원 가능한 환경", body: "OPENCRAB에서 생성한 URL은 GPT, Claude뿐 아니라 Codex, Claude Code, Antigravity, Cursor, OpenClaw, Hermes-Agent 등 MCP 연결을 지원하는 환경에서도 사용할 수 있습니다." },
    { heading: "개발자가 얻는 장점", body: "프로젝트 도메인 문서, 정책, 리서치 팩을 MCP로 연결하면 코딩 에이전트가 코드 외부의 비즈니스 맥락을 더 잘 참고할 수 있습니다.", bullets: ["기획 문서 기반 구현", "도메인 용어 일관성", "근거 기반 의사결정", "프로젝트별 지식 재사용"] },
    { heading: "권장 방식", body: "처음에는 읽기 전용 성격의 공개/테스트 팩으로 연결을 확인한 뒤, 민감한 사내 데이터는 권한과 로그 정책을 확인하고 연결하세요." }
  ], next: ["troubleshooting"] },
  { slug: "launch-note", title: "베타 테스트와 런칭", eyebrow: "공지", description: "6/1 정식 런칭 전 테스트 기간 안내 문구입니다.", icon: "ShieldCheck", sections: [
    { heading: "현재 상태", body: "OPENCRAB은 6/1 정식 런칭 예정이며, 테스트 기간 동안 배포된 팩은 무료로 사용할 수 있다는 안내가 제공되었습니다." },
    { heading: "처음 막힐 때", body: "가입, 팩 적용, MCP 연결 과정이 어렵게 느껴질 수 있습니다. 막히는 부분은 단톡방에 질문하고, 테스트 피드백을 모아 서비스 개선에 반영하는 흐름을 권장합니다." }
  ], next: ["quick-start", "faq"] },
  { slug: "faq", title: "자주 묻는 질문", eyebrow: "도움말", description: "처음 사용자가 자주 막히는 지점을 정리했습니다.", icon: "CircleHelp", sections: [
    { heading: "OPENCRAB은 그냥 검색 서비스인가요?", body: "아니요. 단순 검색보다 지식을 의미 단위와 관계 그래프로 구조화해 AI가 재사용하도록 돕는 플랫폼에 가깝습니다." },
    { heading: "무료로 사용할 수 있나요?", body: "테스트 기간에는 배포된 팩을 무료로 이용할 수 있다는 안내가 있습니다. 정식 런칭 후 가격과 정책은 opencrab.sh의 Pricing과 공지를 확인해야 합니다." },
    { heading: "MCP URL은 어디에 쓰나요?", body: "GPT, Claude, Codex, Claude Code, Cursor, Hermes-Agent 같은 MCP 지원 환경에서 OPENCRAB 데이터셋을 연결하는 주소로 사용합니다." }
  ], next: ["troubleshooting"] },
  { slug: "troubleshooting", title: "문제 해결", eyebrow: "도움말", description: "가입, 팩 적용, MCP 연결이 안 될 때 확인할 항목입니다.", icon: "ShieldCheck", sections: [
    { heading: "인증 메일이 안 와요", body: "스팸함을 확인하고, 계속 안 오면 Google Auth로 먼저 가입해보세요." },
    { heading: "팩이 안 보여요", body: "로그인 상태, 마켓플레이스 필터, 테스트 기간 제공 범위를 확인하세요. 계정별 권한 차이가 있을 수 있습니다." },
    { heading: "AI 도구에서 연결이 안 돼요", body: "MCP URL을 새로 복사하고, 해당 AI 도구가 MCP/커넥터를 지원하는 플랜인지 확인하세요. URL이 외부에 노출되었다면 재생성이 필요할 수 있습니다." }
  ], next: ["quick-start"] },
];

export const docsBySlug = Object.fromEntries(docs.map((doc) => [doc.slug, doc]));
