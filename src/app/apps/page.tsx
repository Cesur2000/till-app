import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { AppGrid } from "@/components/AppGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { getAllApps } from "@/data/apps";

export const metadata: Metadata = {
  title: "Apps",
  description: "iOS apps built by Mesut Yagci — clean, focused, and privacy-first.",
};

export default function AppsPage() {
  const apps = getAllApps();

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle
          title="Apps"
          subtitle="iOS apps I've built and published on the App Store"
        />
        <AppGrid apps={apps} />
      </Container>
    </section>
  );
}
