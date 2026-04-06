import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
          <p className="text-muted text-lg mb-8">
            This page doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-5 py-2.5 rounded-xl bg-accent text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Go Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
