import { Card } from "@/components/ui/Card";
import type { MenuItem as MenuItemType } from "@/types";

type MenuItemProps = {
  item: MenuItemType;
};

export function MenuItem({ item }: MenuItemProps) {
  return (
    <Card>
      {/* Image placeholder */}
      <div className="aspect-[3/2] bg-gradient-to-br from-indigo to-navy flex items-center justify-center relative">
        <div className="text-center">
          <span className="text-star-gold text-xl">&#10022;</span>
          <p className="text-lavender/40 text-[10px] mt-1">PHOTO</p>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {item.isNew && (
            <span className="px-2 py-0.5 rounded-full bg-soft-pink text-text text-[10px] font-bold">
              NEW
            </span>
          )}
          {item.isRecommended && (
            <span className="px-2 py-0.5 rounded-full bg-star-gold text-night text-[10px] font-bold">
              おすすめ
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-serif text-sm font-bold text-text mb-0.5">
          {item.name}
        </h3>
        {item.nameEn && (
          <p className="text-text-muted text-[10px] tracking-wide mb-2">
            {item.nameEn}
          </p>
        )}
        <p className="text-text-muted text-xs leading-relaxed mb-3">
          {item.description}
        </p>
        <p className="text-star-gold font-bold text-sm">
          &#9733; {item.price.toLocaleString()}円
        </p>
      </div>
    </Card>
  );
}
