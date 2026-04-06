import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FeatureList } from "@/components/FeatureList";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { SectionTitle } from "@/components/SectionTitle";
import { CTAButton } from "@/components/CTAButton";
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
    title: app.name,
    description: app.subtitle,
    openGraph: {
      title: app.name,
      description: app.subtitle,
    },
  };
}

export default async function AppDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) notFound();

  const statusLabels = {
    live: { label: "Live on App Store", color: "bg-green" },
    coming: { label: "Coming Soon", color: "bg-orange" },
    dev: { label: "In Development", color: "bg-muted" },
  };

  const status = statusLabels[app.status];

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-border">
        <Container>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card border border-border flex items-center justify-center text-4xl md:text-5xl shrink-0">
              📱
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {app.name}
                </h1>
                <span
                  className={`text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider text-white ${status.color}`}
                >
                  {status.label}
                </span>
              </div>
              <p className="text-lg text-muted">{app.subtitle}</p>
              <p className="mt-4 text-muted leading-relaxed max-w-xl">
                {app.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {app.appStoreUrl && app.appStoreUrl !== "#" && (
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
            </div>
          </div>
        </Container>
      </section>

      {/* Screenshots */}
      {app.screenshots.length > 0 && (
        <section className="py-16 border-b border-border">
          <Container>
            <SectionTitle title="Screenshots" />
            <ScreenshotGallery screenshots={app.screenshots} appName={app.name} />
          </Container>
        </section>
      )}

      {/* Features */}
      <section className="py-16 border-b border-border">
        <Container>
          <SectionTitle
            title="Features"
            subtitle={`What ${app.name} offers`}
          />
          <FeatureList features={app.features} />
        </Container>
      </section>

      {/* FAQ */}
      {app.faq && app.faq.length > 0 && (
        <section className="py-16 border-b border-border">
          <Container>
            <SectionTitle title="Frequently Asked Questions" />
            <div className="max-w-2xl space-y-6">
              {app.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="text-sm font-semibold mb-1">{item.question}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16">
        <Container>
          <div className="flex flex-wrap items-center gap-4">
            {app.appStoreUrl && app.appStoreUrl !== "#" && (
              <CTAButton href={app.appStoreUrl} external>
                Download {app.name}
              </CTAButton>
            )}
            <CTAButton href={`/apps/${app.slug}/privacy`} variant="secondary">
              Privacy Policy
            </CTAButton>
            <CTAButton href={`/apps/${app.slug}/support`} variant="secondary">
              Support
            </CTAButton>
            <Link
              href="/apps"
              className="text-sm text-muted hover:text-foreground transition-colors ml-2"
            >
              ← All Apps
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
