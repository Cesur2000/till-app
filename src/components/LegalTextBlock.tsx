interface LegalTextBlockProps {
  title: string;
  badge?: string;
  content: string;
}

export function LegalTextBlock({ title, badge, content }: LegalTextBlockProps) {
  return (
    <section className="bg-card border border-border rounded-2xl p-6 sm:p-7">
      {badge && (
        <span className="inline-block bg-accent text-white text-[0.65rem] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-base font-semibold text-accent mb-3">{title}</h2>
      <div
        className="text-sm text-[#ccc] leading-relaxed [&_ul]:pl-5 [&_ul]:mt-2 [&_li]:mb-1.5 [&_strong]:text-text [&_a]:text-accent [&_a]:hover:underline"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
}
