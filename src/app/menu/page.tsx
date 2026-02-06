import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuCategory } from "@/components/menu/MenuCategory";

export const metadata: Metadata = {
  title: "メニュー",
  description:
    "星空食堂レトワールのメニュー一覧。星をモチーフにした創作料理やドリンク、デザートをお楽しみください。",
};

export default function MenuPage() {
  return (
    <div className="pt-24 pb-20 px-4 gradient-sky-subtle min-h-screen">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="メニュー" subtitle="MENU" />

        <p className="text-center text-lavender/70 text-sm mb-12 max-w-md mx-auto">
          星をモチーフにした創作料理の数々。
          <br />
          見た目も味もお楽しみいただけるメニューをご用意しております。
        </p>

        <MenuCategory />

        <p className="text-center text-lavender/50 text-xs mt-12">
          ※ 価格はすべて税込です。
          <br />
          ※ 季節や仕入れ状況により、メニューが変更になる場合がございます。
        </p>
      </div>
    </div>
  );
}
