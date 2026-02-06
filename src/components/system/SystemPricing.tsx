import { Card } from "@/components/ui/Card";

function StarDivider() {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-star-gold/30" />
      <span className="text-star-gold text-sm">&#10022;</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-star-gold/30" />
    </div>
  );
}

function PriceBlock({
  label,
  time,
  price,
  sub,
}: {
  label: string;
  time: string;
  price: string;
  sub?: string;
}) {
  return (
    <div className="text-center">
      <p className="text-lavender/70 text-sm mb-1">{label}</p>
      <p className="text-white font-serif text-lg font-bold mb-1">{time}</p>
      <p className="text-star-gold font-bold text-xl">{price}</p>
      {sub && <p className="text-soft-pink font-bold text-base mt-1.5">({sub})</p>}
    </div>
  );
}

export function SystemPricing() {
  return (
    <div>
      {/* Currency explanation */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-star-gold/10 border border-star-gold/20">
          <span className="text-star-gold text-lg">&#10022;</span>
          <p className="text-white font-serif text-lg font-bold tracking-wide">
            &yen;100 = 100 リュミエ
          </p>
          <span className="text-star-gold text-lg">&#10022;</span>
        </div>
        <p className="text-lavender/50 text-xs mt-3">
          当店では「リュミエ」を通貨単位として使用しております
        </p>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Order Charge */}
        <Card hover={false} className="p-6 md:p-8">
          <div className="text-center mb-6">
            <h3 className="font-serif text-xl font-bold text-white mb-1">
              オーダー・チャージ
            </h3>
            <p className="text-lavender/60 text-xs">
              (1フード・1ドリンクオーダー必須)
            </p>
          </div>

          <PriceBlock
            label="初めの1Set"
            time="60min"
            price="500 リュミエ"
          />

          <StarDivider />

          <PriceBlock
            label="延長60min（1オーダー）"
            time="60min"
            price="500 リュミエ"
          />
        </Card>

        {/* All-you-can-drink */}
        <Card hover={false} className="p-6 md:p-8">
          <div className="text-center mb-6">
            <h3 className="font-serif text-xl font-bold text-white mb-1">
              飲み放題
            </h3>
            <p className="text-lavender/60 text-xs">&nbsp;</p>
          </div>

          <PriceBlock
            label="1Set"
            time="50min"
            price="2,500 リュミエ"
            sub="ノンアル 2,000 リュミエ"
          />

          <StarDivider />

          <PriceBlock
            label="延長"
            time="30min"
            price="1,500 リュミエ"
            sub="ノンアル 1,000 リュミエ"
          />
        </Card>
      </div>

      {/* Notes */}
      <div className="text-center mt-10 space-y-1.5">
        <p className="text-lavender/60 text-xs">自動延長制です。</p>
        <p className="text-lavender/60 text-xs">
          お時間の管理はご自身でお願いいたします。
        </p>
        <p className="text-lavender/60 text-xs">
          +Tax（消費税10%・サービス料10%）
        </p>
      </div>
    </div>
  );
}
