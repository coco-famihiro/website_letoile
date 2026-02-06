import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/data/siteConfig";

const infoRows = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "住所",
    value: siteConfig.address,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "営業時間",
    value: siteConfig.hours,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    label: "定休日",
    value: siteConfig.closedDay,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "最寄り駅",
    value: siteConfig.nearestStation,
  },
];

export function AccessInfo() {
  return (
    <Card hover={false} className="p-6 md:p-8">
      <h3 className="font-serif text-lg font-bold text-white mb-6">店舗情報</h3>

      <div className="space-y-5">
        {infoRows.map((row, i) => (
          <div key={i} className="flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-star-gold/10 flex items-center justify-center text-star-gold">
              {row.icon}
            </div>
            <div>
              <p className="text-lavender/50 text-xs mb-0.5">{row.label}</p>
              <p className="text-white text-sm">{row.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* SNS Links */}
      <div className="mt-8 pt-6 border-t border-lavender/10">
        <p className="text-lavender/50 text-xs mb-3">SNS</p>
        <div className="flex gap-3">
          <a
            href={siteConfig.sns.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-lavender/60 hover:bg-star-gold/20 hover:text-star-gold transition-all"
            aria-label="X"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </Card>
  );
}
