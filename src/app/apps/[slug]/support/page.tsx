import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { getAppBySlug, getAllAppSlugs } from "@/data/apps";
import { siteConfig } from "@/data/site";

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
    title: `${app.name} Support`,
    description: `Get help with ${app.name}. FAQ, troubleshooting, and contact support.`,
  };
}

export default async function AppSupportPage({ params }: PageProps) {
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
            Support
          </h1>
          <p className="text-muted text-center mt-2">
            {app.name} — {app.subtitle}
          </p>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-6 space-y-5">
          {/* Intro */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <p className="text-sm text-[#ccc] leading-relaxed">
              {app.support.intro}
            </p>
          </div>

          {/* Features overview */}
          {app.features.length > 0 && (
            <div className="bg-card border border-border rounded-2xl p-6">
              <span className="inline-block bg-green/15 text-green text-[0.65rem] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
                Features
              </span>
              <h2 className="text-base font-semibold text-accent mb-3">
                What is {app.name}?
              </h2>
              <p className="text-sm text-[#ccc] leading-relaxed mb-4">
                {app.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {app.features.map((f) => (
                  <div
                    key={f.title}
                    className="bg-card-hover border border-border rounded-lg py-2.5 px-3.5 text-center text-sm text-[#ccc]"
                  >
                    <span className="text-lg mr-1.5">{f.icon}</span>
                    {f.title}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {app.support.faq.length > 0 && (
            <div className="bg-card border border-border rounded-2xl p-6">
              <span className="inline-block bg-accent text-white text-[0.65rem] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
                FAQ
              </span>
              <h2 className="text-base font-semibold text-accent mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {app.support.faq.map((item) => (
                  <div
                    key={item.question}
                    className="border-t border-border pt-4 first:border-t-0 first:pt-0"
                  >
                    <h3 className="font-semibold text-sm mb-1">
                      Q: {item.question}
                    </h3>
                    <p className="text-sm text-[#aaa] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Troubleshooting */}
          {app.support.troubleshooting &&
            app.support.troubleshooting.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-6">
                <span className="inline-block bg-orange/15 text-orange text-[0.65rem] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
                  Troubleshooting
                </span>
                <h2 className="text-base font-semibold text-accent mb-4">
                  Common Issues
                </h2>
                {app.support.troubleshooting.map((issue) => (
                  <div key={issue.title} className="mb-5 last:mb-0">
                    <h3 className="font-semibold text-sm mb-2">
                      {issue.title}
                    </h3>
                    <ol className="list-decimal pl-5 space-y-1">
                      {issue.steps.map((step, i) => (
                        <li
                          key={i}
                          className="text-sm text-[#ccc] leading-relaxed"
                        >
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            )}

          {/* Contact */}
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <h2 className="text-base font-semibold text-accent mb-2">
              Contact Support
            </h2>
            <p className="text-sm text-[#ccc] leading-relaxed mb-4">
              Can&apos;t find an answer above? We&apos;re here to help. Send us
              an email and we&apos;ll get back to you within 24 hours.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center px-6 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              📧 Email Support
            </a>
            <p className="text-xs text-muted mt-3">{siteConfig.email}</p>
          </div>

          {/* App Info */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-base font-semibold text-accent mb-3">
              App Information
            </h2>
            <ul className="text-sm text-[#ccc] space-y-1.5">
              <li>
                <strong className="text-text">App Name:</strong> {app.name}
              </li>
              <li>
                <strong className="text-text">Platform:</strong> iOS 16.1+
              </li>
              <li>
                <strong className="text-text">Privacy Policy:</strong>{" "}
                <Link
                  href={`/apps/${app.slug}/privacy`}
                  className="text-accent hover:underline"
                >
                  View Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <Link
              href={`/apps/${app.slug}`}
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              ← Back to {app.name}
            </Link>
            <Link
              href={`/apps/${app.slug}/privacy`}
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              Privacy Policy →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
