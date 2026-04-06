import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { AppGrid } from "@/components/AppGrid";
import { apps } from "@/data/apps";

export const metadata: Metadata = {
  title: "Apps",
  description: "iOS apps built by Mesut Yagci. Clean, focused, privacy-first.",
};

export default function AppsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionTitle
          title="Apps"
          subtitle="iOS apps I've designed, built, and shipped."
        />
        <AppGrid apps={apps} />
      </Container>
    </section>
  );
}
