import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventList } from "@/components/events/EventList";

export const metadata: Metadata = {
  title: "イベント・おしらせ",
  description:
    "星空食堂レトワールのイベント情報やおしらせ一覧です。",
};

export default function EventsPage() {
  return (
    <div className="pt-24 pb-20 px-4 gradient-sky-subtle min-h-screen">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="イベント・おしらせ" subtitle="EVENTS & NEWS" />

        <p className="text-center text-lavender/70 text-sm mb-12 max-w-md mx-auto">
          星空食堂レトワールの最新イベント情報や
          <br />
          おしらせをお届けします。
        </p>

        <EventList />
      </div>
    </div>
  );
}
