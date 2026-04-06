import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { getAllApps, getAppBySlug } from "@/data/apps";
import { siteConfig } from "@/data/site";

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
    title: `${app.name} Support`,
    description: `Support and FAQ for ${app.name} — ${app.subtitle}`,
  };
}

export default async function AppSupportPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) notFound();

  const support = app.support;
  if (!support) notFound();

  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-center">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Support
          </h1>
          <p className="mt-2 text-muted">
            {app.name} — {app.subtitle}
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-3xl px-6">
          {/* Features */}
          {support.features && support.features.length > 0 && (
            <div className="bg-card border border-border rounded-2xl p-6 md:p-7 mb-5">
              <span className="inline-block bg-green text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-3">
                Features
              </span>
              <h2 className="text-base font-semibold mb-3 text-accent">
                What is {app.name}?
              </h2>
              <p className="text-sm text-[#ccc] mb-4">{support.intro}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {support.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="bg-[#1a1a2e] border border-border rounded-xl p-3 text-center"
                  >
                    <span className="text-xl block mb-1">{feature.icon}</span>
                    <span className="text-xs text-[#ccc]">{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {support.faq && support.faq.length > 0 && (
            <div className="bg-card border border-border rounded-2xl p-6 md:p-7 mb-5">
              <span className="inline-block bg-accent text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-3">
                FAQ
              </span>
              <h2 className="text-base font-semibold mb-4 text-accent">
                Frequently Asked Questions
              </h2>
              <div className="space-y-0">
                {support.faq.map((item, index) => (
                  <div
                    key={item.question}
                    className={`py-4 ${index > 0 ? "border-t border-border" : ""}`}
                  >
                    <strong className="text-sm block mb-1">
                      Q: {item.question}
                    </strong>
                    <p className="text-sm text-[#aaa] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Troubleshooting */}
          {support.troubleshooting && support.troubleshooting.length > 0 && (
            <div className="bg-card border border-border rounded-2xl p-6 md:p-7 mb-5">
              <span className="inline-block bg-orange text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-3">
                Troubleshooting
              </span>
              <h2 className="text-base font-semibold mb-4 text-accent">
                Common Issues
              </h2>
              {support.troubleshooting.map((issue) => (
                <div key={issue.title} className="mb-5 last:mb-0">
                  <h3 className="text-sm font-semibold mb-2">{issue.title}</h3>
                  <ol className="list-decimal list-inside space-y-1">
                    {issue.steps.map((step) => (
                      <li key={step} className="text-sm text-[#ccc]">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          )}

          {/* Contact Support */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-7 mb-5">
            <h2 className="text-base font-semibold mb-3 text-accent">
              Contact Support
            </h2>
            <p className="text-sm text-[#ccc] mb-4">
              Can&apos;t find an answer above? We&apos;re here to help. Send us an email and
              we&apos;ll get back to you within 24 hours.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold bg-accent text-white hover:opacity-90 transition-opacity"
            >
              📧 Email Support
            </a>
            <p className="mt-4 text-xs text-muted">{siteConfig.email}</p>
          </div>

          {/* App Info */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-7 mb-5">
            <h2 className="text-base font-semibold mb-3 text-accent">
              App Information
            </h2>
            <ul className="space-y-2 text-sm text-[#ccc]">
              <li>
                <strong className="text-foreground">App Name:</strong> {app.name}
              </li>
              <li>
                <strong className="text-foreground">Platform:</strong> iOS 16.1+
              </li>
              <li>
                <strong className="text-foreground">Languages:</strong> English, Turkish
              </li>
              <li>
                <strong className="text-foreground">Privacy Policy:</strong>{" "}
                <Link
                  href={`/apps/${app.slug}/privacy`}
                  className="text-accent hover:underline"
                >
                  View Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href={`/apps/${app.slug}`}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              ← Back to {app.name}
            </Link>
            <Link
              href={`/apps/${app.slug}/privacy`}
              className="text-sm text-accent hover:underline"
            >
              Privacy Policy →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
