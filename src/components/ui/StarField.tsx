"use client";

import { useMemo } from "react";

type StarFieldProps = {
  count?: number;
  className?: string;
};

export function StarField({ count = 60, className = "" }: StarFieldProps) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.3,
    }));
  }, [count]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {stars.map((s) => (
        <div
          key={s.id}
          className="star absolute rounded-full bg-star-pale"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            "--duration": s.duration,
            "--delay": s.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
