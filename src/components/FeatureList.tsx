export function FeatureList({
  features,
}: {
  features: { title: string; description: string; icon: string }[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="bg-card border border-border rounded-xl p-5 transition-all duration-200 hover:border-accent/30"
        >
          <div className="text-2xl mb-3">{feature.icon}</div>
          <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
          <p className="text-xs text-muted leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
