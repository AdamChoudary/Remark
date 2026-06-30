const items = [
  "Web Development",
  "Brand Identity",
  "Conversational AI",
  "Creative Production",
  "Digital Marketing",
];

export function TrustStrip() {
  return (
    <section className="relative border-t border-border-subtle bg-void/80 overflow-hidden w-full">
      <div className="flex animate-marquee gap-20 py-4 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-xs tracking-[0.18em] text-muted/60 uppercase select-none"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
