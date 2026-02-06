import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccessInfo } from "@/components/access/AccessInfo";
import { MapEmbed } from "@/components/access/MapEmbed";

export const metadata: Metadata = {
  title: "アクセス",
  description:
    "星空食堂レトワールへのアクセス方法・店舗情報です。営業時間・住所・地図をご確認いただけます。",
};

export default function AccessPage() {
  return (
    <div className="pt-24 pb-20 px-4 gradient-sky-subtle min-h-screen">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="アクセス" subtitle="ACCESS" />

        <p className="text-center text-lavender/70 text-sm mb-12 max-w-md mx-auto">
          ご来店をお待ちしております。
          <br />
          お気軽にお越しください。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AccessInfo />
          <MapEmbed />
        </div>
      </div>
    </div>
  );
}
