import type { App } from "@/data/apps";
import { AppCard } from "./AppCard";

export function AppGrid({ apps }: { apps: App[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {apps.map((app) => (
        <AppCard key={app.slug} app={app} />
      ))}
    </div>
  );
}
