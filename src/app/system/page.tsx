import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SystemPricing } from "@/components/system/SystemPricing";

export const metadata: Metadata = {
  title: "システム",
  description:
    "星空食堂レトワールの料金システム。オーダー・チャージや飲み放題など、ご利用料金をご案内いたします。",
};

export default function SystemPage() {
  return (
    <div className="pt-24 pb-20 px-4 gradient-sky-subtle min-h-screen">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="システム" subtitle="SYSTEM" />

        <p className="text-center text-lavender/70 text-sm mb-12 max-w-md mx-auto">
          星空食堂レトワールのご利用料金をご案内いたします。
        </p>

        <SystemPricing />
      </div>
    </div>
  );
}
