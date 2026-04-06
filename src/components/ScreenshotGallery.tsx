import Image from "next/image";

export function ScreenshotGallery({
  screenshots,
  appName,
}: {
  screenshots: string[];
  appName: string;
}) {
  if (screenshots.length === 0) return null;

  return (
    <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
      {screenshots.map((src, index) => (
        <div
          key={src}
          className="shrink-0 snap-center rounded-2xl overflow-hidden border border-border"
        >
          <Image
            src={src}
            alt={`${appName} screenshot ${index + 1}`}
            width={280}
            height={560}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
