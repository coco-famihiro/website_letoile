"use client";

import { useState } from "react";
import { menuItems, menuCategories } from "@/data/menu";
import { MenuItem } from "./MenuItem";
import { cn } from "@/lib/utils";

export function MenuCategory() {
  const [activeCategory, setActiveCategory] = useState<string>("food");

  const filtered = menuItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {menuCategories.map((cat) => (
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
            <span className="mr-1.5">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Menu items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
