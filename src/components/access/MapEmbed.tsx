import { Card } from "@/components/ui/Card";

export function MapEmbed() {
  return (
    <Card hover={false} className="overflow-hidden">
      <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[300px]">
        <iframe
          src="https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E7%A5%9E%E7%94%B0%E6%9D%BE%E6%B0%B8%E7%94%BA+%E6%B2%B3%E6%9C%AC%E3%83%93%E3%83%AB&output=embed&hl=ja&z=17"
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
