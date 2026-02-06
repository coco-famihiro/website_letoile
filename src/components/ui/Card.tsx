import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/5 border border-lavender/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)] overflow-hidden backdrop-blur-sm",
        hover && "transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,211,117,0.08)] hover:-translate-y-1 hover:border-star-gold/20",
        className
      )}
    >
      {children}
    </div>
  );
}
