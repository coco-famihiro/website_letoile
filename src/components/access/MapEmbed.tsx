import { Card } from "@/components/ui/Card";

export function MapEmbed() {
  return (
    <Card hover={false} className="overflow-hidden">
      {/* Placeholder map area */}
      <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[300px] bg-gradient-to-br from-navy to-indigo flex items-center justify-center relative">
        {/* Decorative grid lines to simulate a map */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-lavender" />
          <div className="absolute top-2/4 left-0 right-0 h-px bg-lavender" />
          <div className="absolute top-3/4 left-0 right-0 h-px bg-lavender" />
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-lavender" />
          <div className="absolute left-2/4 top-0 bottom-0 w-px bg-lavender" />
          <div className="absolute left-3/4 top-0 bottom-0 w-px bg-lavender" />
        </div>

        <div className="text-center z-10">
          {/* Pin icon */}
          <div className="mx-auto w-12 h-12 rounded-full bg-star-gold/20 flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-star-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-lavender text-sm font-medium">星空食堂レトワール</p>
          <p className="text-lavender/40 text-xs mt-1">
            ※ 実際のGoogle Mapsはこちらに埋め込まれます
          </p>
        </div>
      </div>
    </Card>
  );
}
