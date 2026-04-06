import Image from "next/image";

export function ScreenshotGallery({ screenshots }: { screenshots: string[] }) {
  if (!screenshots.length) return null;

  return (
    <div className="overflow-x-auto pb-4 -mx-6 px-6">
      <div className="flex gap-4">
        {screenshots.map((src, index) => (
          <div
            key={index}
            className="shrink-0 w-56 aspect-[9/19.5] rounded-2xl overflow-hidden border border-border bg-card relative"
          >
            <Image
              src={src}
              alt={`Screenshot ${index + 1}`}
              fill
              className="object-cover"
              loading="lazy"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
