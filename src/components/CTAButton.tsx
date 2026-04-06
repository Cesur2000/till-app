import Link from "next/link";

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200";
  const variants = {
    primary: "bg-accent text-white hover:opacity-90",
    secondary:
      "bg-card border border-border text-foreground hover:border-accent",
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
