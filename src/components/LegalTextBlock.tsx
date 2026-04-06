export function LegalTextBlock({
  title,
  badge,
  content,
}: {
  title: string;
  badge?: string;
  content: string;
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-7 mb-5">
      {badge && (
        <span className="inline-block bg-accent text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-base font-semibold mb-3 text-accent">{title}</h2>
      <div
        className="legal-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
