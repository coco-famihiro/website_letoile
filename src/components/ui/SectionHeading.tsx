type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-10 md:mb-14">
      {/* Star decoration */}
      <div className="flex items-center justify-center gap-3 mb-3">
        <span className="text-xs text-star-gold/60">&#10022;</span>
        <span className="block w-12 h-px bg-lavender/30" />
        <span className="text-xs text-star-gold/60">&#10022;</span>
      </div>

      <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm tracking-widest text-lavender/60">
          {subtitle}
        </p>
      )}

      {/* Bottom decoration */}
      <div className="flex items-center justify-center gap-3 mt-3">
        <span className="block w-8 h-px bg-lavender/30" />
        <span className="text-[10px] text-star-gold/40">&#9733;</span>
        <span className="block w-8 h-px bg-lavender/30" />
      </div>
    </div>
  );
}
