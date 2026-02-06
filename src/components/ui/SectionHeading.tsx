type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  dark?: boolean;
};

export function SectionHeading({ title, subtitle, dark = false }: SectionHeadingProps) {
  return (
    <div className="text-center mb-10 md:mb-14">
      {/* Star decoration */}
      <div className="flex items-center justify-center gap-3 mb-3">
        <span className={`text-xs ${dark ? "text-star-gold/60" : "text-star-gold"}`}>
          &#10022;
        </span>
        <span className={`block w-12 h-px ${dark ? "bg-lavender/30" : "bg-text/20"}`} />
        <span className={`text-xs ${dark ? "text-star-gold/60" : "text-star-gold"}`}>
          &#10022;
        </span>
      </div>

      <h2
        className={`font-serif text-2xl md:text-3xl font-bold tracking-wide ${
          dark ? "text-white" : "text-text"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-2 text-sm tracking-widest ${
            dark ? "text-lavender/60" : "text-text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Bottom decoration */}
      <div className="flex items-center justify-center gap-3 mt-3">
        <span className={`block w-8 h-px ${dark ? "bg-lavender/30" : "bg-text/20"}`} />
        <span className={`text-[10px] ${dark ? "text-star-gold/40" : "text-star-gold/60"}`}>
          &#9733;
        </span>
        <span className={`block w-8 h-px ${dark ? "bg-lavender/30" : "bg-text/20"}`} />
      </div>
    </div>
  );
}
