import { StarField } from "@/components/ui/StarField";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="relative gradient-sky py-20 md:py-28 px-4 overflow-hidden">
      <StarField count={40} />

      <div className="relative z-10 text-center mx-auto max-w-2xl">
        <p className="text-star-gold text-2xl mb-4">&#10022;</p>
        <h2 className="font-serif text-2xl md:text-3xl text-white font-bold mb-4">
          星の輝きの下で
          <br />
          お待ちしております
        </h2>
        <p className="text-lavender/80 text-sm mb-10 leading-relaxed">
          ご予約なしでもご来店いただけます。
          <br />
          お気軽にお越しください。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/access">アクセス・店舗情報</Button>
          <Button href="/events" variant="secondary">
            イベント情報
          </Button>
        </div>
      </div>
    </section>
  );
}
