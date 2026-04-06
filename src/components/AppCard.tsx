"use client";

import Link from "next/link";
import { AppData } from "@/data/types";
import { AppIcon } from "./AppIcon";

function StatusBadge({ status }: { status: AppData["status"] }) {
  const styles = {
    live: "bg-green/15 text-green",
    coming: "bg-orange/15 text-orange",
    dev: "bg-accent/15 text-accent",
  };
  const labels = {
    live: "Live",
    coming: "Coming Soon",
    dev: "In Development",
  };

  return (
    <span
      className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

export function AppCard({ app }: { app: AppData }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-200 flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <AppIcon
          src={app.icon}
          alt={`${app.name} icon`}
          fallback={app.name.charAt(0)}
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold truncate">{app.name}</h3>
            <StatusBadge status={app.status} />
          </div>
          <p className="text-muted text-sm leading-relaxed line-clamp-2">
            {app.subtitle}
          </p>
        </div>
      </div>

      <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
        {app.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {app.status === "live" && app.appStoreUrl && (
          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-accent text-white text-xs font-medium hover:opacity-90 transition-opacity"
          >
            App Store
          </a>
        )}
        <Link
          href={`/apps/${app.slug}`}
          className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-card-hover border border-border text-xs font-medium text-text hover:border-accent transition-colors"
        >
          Learn More
        </Link>
        <Link
          href={`/apps/${app.slug}/privacy`}
          className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs text-muted hover:text-text transition-colors"
        >
          Privacy
        </Link>
        <Link
          href={`/apps/${app.slug}/support`}
          className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs text-muted hover:text-text transition-colors"
        >
          Support
        </Link>
      </div>
    </div>
  );
}
