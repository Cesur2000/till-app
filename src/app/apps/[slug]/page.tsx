import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { FeatureList } from "@/components/FeatureList";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { CTAButton } from "@/components/CTAButton";
import { AppIcon } from "@/components/AppIcon";
import { AppGrid } from "@/components/AppGrid";
import { getAppBySlug, getAllAppSlugs, apps } from "@/data/apps";

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
    title: app.name,
    description: app.subtitle,
    openGraph: {
      title: `${app.name} — ${app.subtitle}`,
      description: app.description,
    },
  };
}

export default async function AppDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  const otherApps = apps.filter((a) => a.slug !== app.slug);

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex items-start gap-5 mb-6">
            <AppIcon
              src={app.icon}
              alt={`${app.name} icon`}
              fallback={app.name.charAt(0)}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-[1.25rem]"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {app.name}
              </h1>
              <p className="text-muted text-lg mt-1">{app.subtitle}</p>
              {app.category && (
                <span className="inline-block text-xs text-muted mt-2 bg-card border border-border px-2.5 py-0.5 rounded-full">
                  {app.category}
                </span>
              )}
            </div>
          </div>

          <p className="text-muted leading-relaxed max-w-2xl mb-8">
            {app.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {app.status === "live" && app.appStoreUrl && (
              <CTAButton href={app.appStoreUrl} external>
                Download on App Store
              </CTAButton>
            )}
            <CTAButton href={`/apps/${app.slug}/privacy`} variant="secondary">
              Privacy Policy
            </CTAButton>
            <CTAButton href={`/apps/${app.slug}/support`} variant="secondary">
              Support
            </CTAButton>
          </div>
        </Container>
      </section>

      {/* Screenshots */}
      {app.screenshots.length > 0 && (
        <section className="py-12 border-t border-border">
          <Container>
            <SectionTitle title="Screenshots" />
            <ScreenshotGallery screenshots={app.screenshots} />
          </Container>
        </section>
      )}

      {/* Features */}
      {app.features.length > 0 && (
        <section className="py-12 border-t border-border">
          <Container>
            <SectionTitle title="Features" />
            <FeatureList features={app.features} />
          </Container>
        </section>
      )}

      {/* FAQ */}
      {app.faq && app.faq.length > 0 && (
        <section className="py-12 border-t border-border">
          <Container>
            <SectionTitle title="FAQ" />
            <div className="space-y-4 max-w-2xl">
              {app.faq.map((item) => (
                <div
                  key={item.question}
                  className="bg-card border border-border rounded-xl p-5"
                >
                  <h3 className="font-semibold text-sm mb-2">
                    {item.question}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Footer */}
      <section className="py-12 border-t border-border">
        <Container>
          <div className="flex flex-wrap items-center gap-4">
            {app.status === "live" && app.appStoreUrl && (
              <CTAButton href={app.appStoreUrl} external>
                Download on App Store
              </CTAButton>
            )}
            <CTAButton href={`/apps/${app.slug}/privacy`} variant="secondary">
              Privacy Policy
            </CTAButton>
            <CTAButton href={`/apps/${app.slug}/support`} variant="secondary">
              Support
            </CTAButton>
          </div>
        </Container>
      </section>

      {/* More apps */}
      {otherApps.length > 0 && (
        <section className="py-12 border-t border-border">
          <Container>
            <SectionTitle title="More Apps" />
            <AppGrid apps={otherApps} />
          </Container>
        </section>
      )}

      <section className="py-8 border-t border-border">
        <Container>
          <Link
            href="/apps"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            ← All Apps
          </Link>
        </Container>
      </section>
    </>
  );
}
