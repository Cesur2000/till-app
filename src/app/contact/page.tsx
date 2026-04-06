import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-xl">
          <SectionTitle
            title="Contact"
            subtitle="Have a question, feedback, or just want to say hi?"
          />

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <p className="text-muted leading-relaxed mb-6">
              The best way to reach me is by email. I typically respond within
              24 hours.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold bg-accent text-white hover:opacity-90 transition-opacity"
            >
              📧 Send Email
            </a>

            <p className="mt-4 text-sm text-muted">
              {siteConfig.email}
            </p>
          </div>

          <div className="mt-8 bg-card border border-border rounded-2xl p-6 md:p-8">
            <h3 className="text-base font-semibold mb-3">App Support</h3>
            <p className="text-sm text-muted leading-relaxed">
              For app-specific support, please visit the support page for the
              relevant app. You can find support links on each app&apos;s page or
              in the footer of the app&apos;s listing.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
