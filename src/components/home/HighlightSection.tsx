import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { menuItems } from "@/data/menu";

export function HighlightSection() {
  const recommended = menuItems.filter((item) => item.isRecommended).slice(0, 3);

  return (
    <section className="py-20 md:py-28 px-4 bg-cream">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="おすすめメニュー" subtitle="RECOMMENDATION" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommended.map((item) => (
            <Card key={item.id}>
              {/* Image placeholder */}
              <div className="aspect-[3/2] bg-gradient-to-br from-indigo to-navy flex items-center justify-center">
                <div className="text-center">
                  <span className="text-star-gold text-2xl">&#10022;</span>
                  <p className="text-lavender/40 text-[10px] mt-1">PHOTO</p>
                </div>
              </div>

              <div className="p-5">
                {item.isNew && (
                  <span className="inline-block px-2 py-0.5 rounded-full bg-soft-pink text-text text-[10px] font-bold mb-2">
                    NEW
                  </span>
                )}
                <h3 className="font-serif text-base font-bold text-text mb-1">
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
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
          >
            すべてのメニューを見る
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
