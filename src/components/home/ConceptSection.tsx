import { SectionHeading } from "@/components/ui/SectionHeading";

export function ConceptSection() {
  return (
    <section className="gradient-cream py-20 md:py-28 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="コンセプト" subtitle="CONCEPT" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="space-y-5">
            <p className="text-text leading-relaxed text-sm md:text-base">
              「星空食堂レトワール」は、満天の星空の下でお食事と会話を楽しめる、
              星空をコンセプトにしたコンセプトカフェ＆食堂です。
            </p>
            <p className="text-text leading-relaxed text-sm md:text-base">
              天井一面に広がるプラネタリウムのような星空演出と、
              星をモチーフにした創作料理の数々。
              個性豊かなキャストたちが、あなただけの特別なひとときをお届けします。
            </p>
            <p className="text-text-muted text-sm">
              日常を忘れて、星の世界へ迷い込んでみませんか？
            </p>
          </div>

          {/* Decorative placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy to-indigo flex items-center justify-center overflow-hidden">
              <StarDecoration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarDecoration() {
  return (
    <div className="text-center p-8">
      <div className="text-star-gold text-4xl mb-3">&#10022;</div>
      <p className="text-lavender/60 text-xs tracking-widest">PHOTO</p>
      <p className="text-lavender/40 text-[10px] mt-1">店内イメージ</p>
    </div>
  );
}
