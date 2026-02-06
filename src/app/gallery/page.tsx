import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "ギャラリー",
  description:
    "星空食堂レトワールの店内やキャスト、イベントの写真ギャラリーです。",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-20 px-4 gradient-sky-subtle min-h-screen">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="ギャラリー" subtitle="GALLERY" />

        <p className="text-center text-lavender/70 text-sm mb-12 max-w-md mx-auto">
          店内の雰囲気やキャスト、イベントの様子をご覧ください。
        </p>

        <GalleryGrid />
      </div>
    </div>
  );
}
