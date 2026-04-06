import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { AppGrid } from "@/components/AppGrid";
import { siteConfig } from "@/data/site";
import { getFeaturedApps, apps } from "@/data/apps";

export default function HomePage() {
  const featured = getFeaturedApps();

  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              {siteConfig.name}
            </h1>
            <p className="text-xl text-muted mt-4">{siteConfig.tagline}</p>
            <div className="flex gap-3 mt-8">
              <Link
                href="/apps"
                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-accent text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View Apps
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-card border border-border text-sm font-medium text-text hover:border-accent hover:bg-card-hover transition-all"
              >
                About Me
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Apps */}
      {featured.length > 0 && (
        <section className="py-16 border-t border-border">
          <Container>
            <SectionTitle
              title="Featured Apps"
              subtitle="Apps I've built and shipped to the App Store."
            />
            <AppGrid apps={featured} />
            {apps.length > featured.length && (
              <div className="mt-8 text-center">
                <Link
                  href="/apps"
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  View all apps →
                </Link>
              </div>
            )}
          </Container>
        </section>
      )}

      {/* Intro */}
      <section className="py-16 border-t border-border">
        <Container>
          <div className="max-w-2xl">
            <SectionTitle title="About" />
            <p className="text-muted leading-relaxed">{siteConfig.bio}</p>
            <Link
              href="/about"
              className="inline-block mt-6 text-sm text-accent hover:underline"
            >
              Read more →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
