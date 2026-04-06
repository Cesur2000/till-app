import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}. Questions, feedback, or just want to say hello.`,
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-xl">
          <SectionTitle
            title="Contact"
            subtitle="Have a question, feedback, or just want to say hello? I'd love to hear from you."
          />

          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold mb-2">Send an Email</h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              The fastest way to reach me. I usually reply within 24 hours.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center px-6 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              📧 {siteConfig.email}
            </a>
          </div>

          <div className="mt-8 bg-card border border-border rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold mb-2">App Support</h2>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Need help with a specific app? Visit the app&apos;s support page
              for FAQ, troubleshooting, and direct contact.
            </p>
            <Link
              href="/apps"
              className="text-sm text-accent hover:underline"
            >
              Browse apps →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
