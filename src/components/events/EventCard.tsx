"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { EventItem } from "@/types";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const date = new Date(event.date);
  const month = date.toLocaleDateString("ja-JP", { month: "short" });
  const day = date.getDate();

  return (
    <Card className="flex flex-col sm:flex-row overflow-visible">
      {/* Date badge */}
      <div className="sm:w-24 sm:min-h-full flex sm:flex-col items-center justify-center gap-2 sm:gap-0 p-4 bg-star-gold/5 sm:rounded-l-2xl border-b sm:border-b-0 sm:border-r border-lavender/10">
        <span className="text-star-gold text-xs font-bold">{month}</span>
        <span className="text-white text-2xl font-serif font-bold">{day}</span>
      </div>

      {/* Content */}
      <div className="flex-1 p-5">
        <div className="flex items-start gap-2 mb-2">
          <span
            className={cn(
              "px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0",
              event.category === "event"
                ? "bg-lilac/20 text-lilac"
                : "bg-star-gold/15 text-star-gold"
            )}
          >
            {event.category === "event" ? "イベント" : "おしらせ"}
          </span>
        </div>

        <h3 className="font-serif text-base font-bold text-white mb-2">
          {event.title}
        </h3>

        <p className="text-lavender/70 text-sm leading-relaxed">
          {isExpanded ? event.content : event.summary}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-xs text-lavender/60 hover:text-star-gold transition-colors inline-flex items-center gap-1"
        >
          {isExpanded ? "閉じる" : "詳しく見る"}
          <svg
            className={cn("w-3 h-3 transition-transform", isExpanded && "rotate-180")}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </Card>
  );
}
