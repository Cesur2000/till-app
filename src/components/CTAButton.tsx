import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200";
  const styles = {
    primary: `${base} bg-accent text-white hover:opacity-90`,
    secondary: `${base} bg-card border border-border text-text hover:border-accent hover:bg-card-hover`,
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles[variant]}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles[variant]}>
      {children}
    </Link>
  );
}
