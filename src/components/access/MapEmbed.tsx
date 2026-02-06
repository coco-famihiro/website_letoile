import { Card } from "@/components/ui/Card";

export function MapEmbed() {
  return (
    <Card hover={false} className="overflow-hidden">
      <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[300px]">
        <iframe
          src="https://maps.google.com/maps?q=Cafe%26Bar+L'Etoile+%E7%A7%8B%E8%91%89%E5%8E%9F%E3%83%AC%E3%83%88%E3%83%AF%E3%83%BC%E3%83%AB&z=17&output=embed&hl=ja"
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
