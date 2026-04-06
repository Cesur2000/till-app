import { AppData } from "@/data/types";
import { AppCard } from "./AppCard";

export function AppGrid({ apps }: { apps: AppData[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {apps.map((app) => (
        <AppCard key={app.slug} app={app} />
      ))}
    </div>
  );
}
