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
        "rounded-2xl bg-white shadow-[0_4px_20px_rgba(45,43,85,0.08)] overflow-hidden",
        hover && "transition-all duration-300 hover:shadow-[0_8px_30px_rgba(45,43,85,0.12)] hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
