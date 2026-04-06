import { AppFeature } from "@/data/types";

export function FeatureList({ features }: { features: AppFeature[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="bg-card border border-border rounded-xl p-5"
        >
          <div className="text-2xl mb-3">{feature.icon}</div>
          <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
          <p className="text-muted text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
