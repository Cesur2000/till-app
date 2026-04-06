"use client";

import { useState } from "react";
import Image from "next/image";

interface AppIconProps {
  src?: string;
  alt: string;
  fallback: string;
  className?: string;
}

export function AppIcon({
  src,
  alt,
  fallback,
  className = "w-16 h-16 rounded-2xl",
}: AppIconProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`${className} bg-card-hover border border-border flex items-center justify-center text-2xl shrink-0`}
      >
        {fallback}
      </div>
    );
  }

  return (
    <div
      className={`${className} bg-card-hover border border-border shrink-0 overflow-hidden relative`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setHasError(true)}
        unoptimized
      />
    </div>
  );
}
