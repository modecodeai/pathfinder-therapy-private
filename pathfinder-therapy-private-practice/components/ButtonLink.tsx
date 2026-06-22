import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const variants = {
  primary: "bg-ink text-linen hover:bg-slateleaf",
  secondary: "border border-ink/15 bg-linen text-ink hover:border-ink/30 hover:bg-white",
  ghost: "text-ink underline decoration-clay/50 underline-offset-8 hover:decoration-ink"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick
}: ButtonLinkProps) {
  const isGhost = variant === "ghost";

  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition",
        isGhost ? "px-0 py-2" : "min-h-12 px-5 py-3 shadow-sm",
        variants[variant],
        className
      ].join(" ")}
      onClick={onClick}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
