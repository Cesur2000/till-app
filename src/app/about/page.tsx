import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}. Independent iOS developer building privacy-first, clean apps.`,
};

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <SectionTitle title="About" />

          <div className="space-y-12">
            {/* Bio */}
            <div>
              <h2 className="text-lg font-semibold mb-3">
                Hi, I&apos;m {siteConfig.name} 👋
              </h2>
              <p className="text-muted leading-relaxed">{siteConfig.bio}</p>
            </div>

            {/* What I Build */}
            <div>
              <h2 className="text-lg font-semibold mb-3">What I Build</h2>
              <p className="text-muted leading-relaxed">
                I focus on iOS apps — native Swift applications that take
                advantage of the latest Apple technologies like Dynamic Island,
                Live Activities, and WidgetKit. Each app is designed to be
                simple, useful, and respectful of your time and data.
              </p>
            </div>

            {/* Philosophy */}
            <div>
              <h2 className="text-lg font-semibold mb-5">Philosophy</h2>
              <div className="space-y-4">
                {siteConfig.philosophy.map((item) => (
                  <div
                    key={item.title}
                    className="bg-card border border-border rounded-xl p-5"
                  >
                    <h3 className="font-semibold text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Swift",
                  "SwiftUI",
                  "UIKit",
                  "ActivityKit",
                  "WidgetKit",
                  "CoreLocation",
                  "StoreKit",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted bg-card border border-border px-3 py-1.5 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3">
              <Link
                href="/apps"
                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-accent text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View My Apps
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-card border border-border text-sm font-medium text-text hover:border-accent hover:bg-card-hover transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
