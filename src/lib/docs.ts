import { BookOpen, Cable, CircleHelp, Compass, Layers3, MessageSquareText, PackageCheck, Rocket, ShieldCheck, Sparkles, Store } from "lucide-react";

export type Section = { heading: string; body: string; bullets?: string[]; callout?: string; steps?: string[] };
export type Doc = { slug: string; title: string; eyebrow: string; description: string; icon: string; sections: Section[]; next?: string[] };

export const navGroups = [
  { label: "시작하기", items: ["quick-start", "what-is-opencrab", "launch-note"] },
  { label: "핵심 이해", items: ["ontology", "marketplace", "packs"] },
  { label: "연결하기", items: ["mcp-url", "connect-gpt-claude", "connect-devtools"] },
  { label: "도움말", items: ["faq", "troubleshooting"] },
];

export const iconMap = { Rocket, BookOpen, Sparkles, Layers3, Store, PackageCheck, Cable, MessageSquareText, Compass, CircleHelp, ShieldCheck } as const;

export const docs: Doc[] = [
  {
    slug: "quick-start",
    title: "5분 시작",
    eyebrow: "처음 시작",
    description: "OPENCRAB 가입부터 MCP URL 복사까지 가장 짧은 사용 흐름입니다.",
    icon: "Rocket",
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
  { slug: "ontology", title: "온톨로지 쉽게 이해하기", eyebrow: "핵심 개념", description: "온톨로지를 비전공자도 이해할 수 있게 데이터 지도 관점으로 설명합니다.", icon: "Sparkles", sections: [
    { heading: "온톨로지는 지식의 지도입니다", body: "문서 더미에서 중요한 사람, 제품, 개념, 사건, 증거를 뽑고 서로 어떤 관계인지 연결한 구조가 온톨로지입니다." },
    { heading: "시멘틱 문법", body: "OPENCRAB은 주체, 리소스, 증거, 개념, 결과, 클레임, 커뮤니티, 정책, 강도 같은 의미 단위를 다룰 수 있습니다. 정확한 세부 명칭은 OPENCRAB 공식 문서와 서비스 화면 기준으로 확인이 필요합니다.", bullets: ["Subject: 행동하거나 설명되는 주체", "Resource: 참조되는 자료나 자원", "Evidence: 답변의 근거", "Concept: 반복되는 핵심 개념", "Outcome/Claim/Policy: 결과, 주장, 규칙"] },
    { heading: "AI 답변이 달라지는 이유", body: "단순 키워드 검색이 아니라 관계 그래프를 따라 맥락을 찾기 때문에, GPT나 Claude가 특정 도메인의 구조를 더 안정적으로 이해할 수 있습니다." }
  ], next: ["packs", "marketplace"] },
  { slug: "marketplace", title: "마켓플레이스에서 팩 고르기", eyebrow: "사용법", description: "테스트 기간에 배포된 온톨로지 팩을 선택하고 적용하는 방법입니다.", icon: "Store", sections: [
    { heading: "팩이란?", body: "팩은 특정 주제나 도메인에 대해 미리 정리된 온톨로지 데이터셋입니다. 예를 들어 산업 리서치, 콘텐츠 전략, 제품 분석 지식이 팩으로 제공될 수 있습니다." },
    { heading: "선택 기준", body: "내가 AI에게 묻고 싶은 질문과 가장 가까운 도메인의 팩을 고르면 됩니다.", bullets: ["질문 주제가 팩 설명과 일치하는가", "공개/무료/유료 정책 확인", "최신 업데이트와 제공 범위 확인", "GPT/Claude 연결 목적에 맞는지 확인"] },
    { heading: "적용 후 확인", body: "팩을 적용한 뒤 MCP 패널에서 URL이 생성 가능한지, 테스트 질문에 팩 내용이 반영되는지 확인합니다." }
  ], next: ["packs", "mcp-url"] },
  { slug: "packs", title: "온톨로지 팩 운영 정책", eyebrow: "티어별", description: "무료, Pro, Expert 팩의 차이를 간단히 이해합니다.", icon: "PackageCheck", sections: [
    { heading: "무료", body: "배포된 공개 팩을 사용해 OPENCRAB의 검색과 연결 흐름을 체험합니다.", bullets: ["공개 온톨로지 팩 접근", "기본 graph search", "외부 AI 도구에서 조회"] },
    { heading: "Pro", body: "개인 또는 팀의 문서와 리서치 데이터를 기반으로 비공개 온톨로지 워크스페이스를 구축합니다.", bullets: ["Private document ingest", "Personal graph RAG workspace", "Isolated ontology storage"] },
    { heading: "Expert", body: "전문가가 자신의 온톨로지 팩을 만들고, 검토 후 판매·배포하는 모델입니다.", bullets: ["팩 퍼블리싱 워크플로우", "MCP 도구에서 역방향 ingest", "전문 지식 상품화"] }
  ], next: ["mcp-url"] },
  { slug: "mcp-url", title: "MCP URL 생성", eyebrow: "연결 핵심", description: "OPENCRAB에서 생성한 URL을 외부 AI 도구에 붙여넣는 방법입니다.", icon: "Cable", sections: [
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
