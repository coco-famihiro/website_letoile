import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
        variant === "primary" &&
          "bg-star-gold text-night hover:bg-star-pale hover:shadow-[0_0_20px_rgba(255,211,117,0.3)]",
        variant === "secondary" &&
          "bg-white/10 text-lavender border border-lavender/30 hover:bg-white/20 hover:text-white",
        className
      )}
    >
      {children}
    </Link>
  );
}
