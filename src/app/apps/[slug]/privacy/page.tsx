import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { LegalTextBlock } from "@/components/LegalTextBlock";
import { getAllApps, getAppBySlug } from "@/data/apps";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllApps().map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return {};

  return {
    title: `${app.name} Privacy Policy`,
    description: `Privacy Policy for ${app.name} — ${app.subtitle}`,
  };
}

export default async function AppPrivacyPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) notFound();

  const policy = app.privacyPolicy;
  if (!policy) notFound();

  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-center">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-muted">
            {app.name} — {app.subtitle}
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-3xl px-6">
          {policy.sections.map((section) => (
            <LegalTextBlock
              key={section.title}
              title={section.title}
              badge={section.badge}
              content={section.content}
            />
          ))}

          <p className="text-center text-muted text-sm mt-10">
            Last Updated: {policy.lastUpdated}
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href={`/apps/${app.slug}`}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              ← Back to {app.name}
            </Link>
            <Link
              href={`/apps/${app.slug}/support`}
              className="text-sm text-accent hover:underline"
            >
              Support →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
