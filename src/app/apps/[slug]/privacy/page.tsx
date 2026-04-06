import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { LegalTextBlock } from "@/components/LegalTextBlock";
import { getAppBySlug, getAllAppSlugs } from "@/data/apps";

export function generateStaticParams() {
  return getAllAppSlugs().map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return {};

  return {
    title: `${app.name} Privacy Policy`,
    description: `Privacy Policy for ${app.name}. Learn how we handle your data.`,
  };
}

export default async function AppPrivacyPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        <Container>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
            Privacy Policy
          </h1>
          <p className="text-muted text-center mt-2">
            {app.name} — {app.subtitle}
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-6 space-y-5">
          {app.privacy.sections.map((section) => (
            <LegalTextBlock
              key={section.title}
              title={section.title}
              badge={section.badge}
              content={section.content}
            />
          ))}

          <p className="text-center text-muted text-sm pt-8">
            Last Updated: {app.privacy.lastUpdated}
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Link
              href={`/apps/${app.slug}`}
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              ← Back to {app.name}
            </Link>
            <Link
              href={`/apps/${app.slug}/support`}
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              Support →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
