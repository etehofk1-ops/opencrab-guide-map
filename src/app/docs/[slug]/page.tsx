import { notFound } from "next/navigation";
import { DocPage } from "@/components/DocPage";
import { Sidebar } from "@/components/Sidebar";
import { docs, docsBySlug } from "@/lib/docs";

export function generateStaticParams() { return docs.map((doc) => ({ slug: doc.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = docsBySlug[slug];
  if (!doc) return {};
  return { title: `${doc.title} · OpenCrab 가이드맵`, description: doc.description };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = docsBySlug[slug];
  if (!doc) notFound();
  return <div className="docsShell"><Sidebar active={slug} /><DocPage doc={doc} /></div>;
}
