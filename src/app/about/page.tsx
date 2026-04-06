import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { CTAButton } from "@/components/CTAButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — iOS Developer building clean, focused apps.`,
};

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <SectionTitle title="About Me" />

          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Hi, I&apos;m <strong className="text-foreground">{siteConfig.name}</strong> — an indie iOS
              developer building clean, focused apps for the App Store.
            </p>

            <p>
              I believe great software should be simple, respectful, and
              useful. Every app I build follows a set of principles that I care
              deeply about:
            </p>
          </div>

          {/* Philosophy */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="text-sm font-semibold mb-1">Privacy-First</h3>
              <p className="text-xs text-muted leading-relaxed">
                Your data stays on your device. No tracking, no analytics
                that identify you, no selling your information.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="text-2xl mb-3">✨</div>
              <h3 className="text-sm font-semibold mb-1">Clean UX</h3>
              <p className="text-xs text-muted leading-relaxed">
                Minimal interfaces that get out of your way. No clutter, no
                unnecessary features — just what you need.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="text-sm font-semibold mb-1">Performance</h3>
              <p className="text-xs text-muted leading-relaxed">
                Built with native technologies for speed and reliability.
                Apps that launch fast and run smoothly.
              </p>
            </div>
          </div>

          {/* What I Build */}
          <div className="mt-12 space-y-6 text-muted leading-relaxed">
            <h2 className="text-xl font-semibold text-foreground">What I Build</h2>
            <p>
              I specialise in iOS apps that integrate deeply with the Apple
              ecosystem — including Live Activities, Dynamic Island, widgets,
              and native system features. I focus on utility apps that solve
              real problems with elegant solutions.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Swift",
                "SwiftUI",
                "UIKit",
                "ActivityKit",
                "WidgetKit",
                "CoreLocation",
                "StoreKit",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-card border border-border text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <CTAButton href="/apps">View My Apps →</CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
