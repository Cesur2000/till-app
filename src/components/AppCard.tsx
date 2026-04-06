import Link from "next/link";
import type { App } from "@/data/apps";

const statusLabels: Record<App["status"], { label: string; color: string }> = {
  live: { label: "Live", color: "bg-green text-white" },
  coming: { label: "Coming Soon", color: "bg-orange text-white" },
  dev: { label: "In Development", color: "bg-muted text-white" },
};

export function AppCard({ app }: { app: App }) {
  const status = statusLabels[app.status];

  return (
    <div className="bg-card border border-border rounded-2xl p-6 transition-all duration-200 hover:border-accent/50">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center text-3xl shrink-0">
          {app.icon.startsWith("/") ? (
            <span className="text-2xl">📱</span>
          ) : (
            <span>{app.icon}</span>
          )}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold truncate">{app.name}</h3>
            <span
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${status.color}`}
            >
              {status.label}
            </span>
          </div>
          <p className="text-sm text-muted line-clamp-2">{app.subtitle}</p>
        </div>
      </div>

      <p className="text-sm text-muted mb-5 line-clamp-3">{app.description}</p>

      <div className="flex flex-wrap gap-2">
        {app.appStoreUrl && app.appStoreUrl !== "#" && (
          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-accent text-white hover:opacity-90 transition-opacity"
          >
            App Store
          </a>
        )}
        <Link
          href={`/apps/${app.slug}`}
          className="text-xs font-medium px-3 py-1.5 rounded-lg bg-background border border-border text-foreground hover:border-accent transition-colors"
        >
          Learn More
        </Link>
        <Link
          href={`/apps/${app.slug}/privacy`}
          className="text-xs font-medium px-3 py-1.5 rounded-lg bg-background border border-border text-muted hover:border-accent hover:text-foreground transition-colors"
        >
          Privacy
        </Link>
        <Link
          href={`/apps/${app.slug}/support`}
          className="text-xs font-medium px-3 py-1.5 rounded-lg bg-background border border-border text-muted hover:border-accent hover:text-foreground transition-colors"
        >
          Support
        </Link>
      </div>
    </div>
  );
}
