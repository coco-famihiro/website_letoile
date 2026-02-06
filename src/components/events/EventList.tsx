"use client";

import { useState } from "react";
import { eventItems } from "@/data/events";
import { EventCard } from "./EventCard";
import { cn } from "@/lib/utils";

const categories = [
  { key: "all", label: "すべて" },
  { key: "event", label: "イベント" },
  { key: "news", label: "おしらせ" },
] as const;

export function EventList() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? eventItems
      : eventItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === cat.key
                ? "bg-star-gold text-night shadow-[0_0_15px_rgba(255,211,117,0.2)]"
                : "bg-white text-text-muted hover:bg-lilac/20 hover:text-text"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Event list */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {filtered.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-text-muted text-sm py-12">
          該当する記事はありません。
        </p>
      )}
    </div>
  );
}
