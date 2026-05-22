import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenCrab 가이드맵",
  description: "OPENCRAB 가입, 온톨로지 팩 적용, MCP URL 생성, GPT·Claude 연결을 위한 문서형 가이드 사이트",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}</body></html>;
}
