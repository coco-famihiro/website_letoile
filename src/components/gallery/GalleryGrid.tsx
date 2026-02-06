"use client";

import { useState } from "react";
import { galleryItems, galleryCategories } from "@/data/gallery";
import { GalleryModal } from "./GalleryModal";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/types";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === cat.key
                ? "bg-star-gold text-night shadow-[0_0_15px_rgba(255,211,117,0.2)]"
                : "bg-white/5 text-lavender/70 border border-lavender/20 hover:bg-white/10 hover:text-white"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {filtered.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={cn(
              "group relative overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,211,117,0.1)]",
              i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
            )}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-110`}
            />

            {/* Star decoration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-star-gold/30 text-3xl group-hover:text-star-gold/60 transition-colors">
                &#10022;
              </span>
            </div>

            {/* Caption overlay */}
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-night/80 to-transparent">
              <p className="text-white text-xs">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      <GalleryModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
