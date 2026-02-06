import { Card } from "@/components/ui/Card";

export function MapEmbed() {
  return (
    <Card hover={false} className="overflow-hidden">
      <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[300px]">
        <iframe
          src="https://maps.google.com/maps?q=35.69838,139.77309&z=17&output=embed&hl=ja"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "300px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="星空食堂レトワール 地図"
        />
      </div>
    </Card>
  );
}
