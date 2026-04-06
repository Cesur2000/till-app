import Link from "next/link";
import { Container } from "@/components/Container";
import { AppGrid } from "@/components/AppGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";
import { getFeaturedApps } from "@/data/apps";

export default function HomePage() {
  const featuredApps = getFeaturedApps();

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/apps"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold bg-accent text-white hover:opacity-90 transition-opacity"
              >
                View Apps
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold bg-card border border-border text-foreground hover:border-accent transition-colors"
              >
                About Me
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Apps */}
      {featuredApps.length > 0 && (
        <section className="pb-24">
          <Container>
            <SectionTitle
              title="Featured Apps"
              subtitle="Apps I've built for the App Store"
            />
            <AppGrid apps={featuredApps} />
          </Container>
        </section>
      )}

      {/* About Section */}
      <section className="py-24 border-t border-border">
        <Container>
          <div className="max-w-2xl">
            <SectionTitle title="About" />
            <p className="text-muted leading-relaxed">
              I&apos;m an indie iOS developer focused on building clean, useful apps.
              I believe in privacy-first design, minimal interfaces, and
              software that respects your time and attention. Every app I build
              is crafted with care — no bloat, no unnecessary complexity.
            </p>
            <Link
              href="/about"
              className="inline-block mt-6 text-sm font-medium text-accent hover:underline"
            >
              Learn more →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
