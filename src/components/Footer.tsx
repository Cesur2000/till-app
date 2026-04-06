import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6 text-sm text-muted">
              <li>
                <Link
                  href="/apps"
                  className="hover:text-text transition-colors"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-text transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-text transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
