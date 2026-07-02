const items = [
  "Web Development",
  "Brand Identity",
  "Conversational AI",
  "Creative Production",
  "Digital Marketing",
];

export function TrustStrip() {
  // Not a band: the hero's closing caption line. Same void surface as the hero,
  // no borders — the drawn seam was doing nothing but announcing a division.
  return (
    <section className="relative w-full bg-void">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 pb-14 pt-2 md:px-8 md:pb-20">
        {items.map((item, i) => (
          <div key={item} className="flex items-center gap-8">
            {i > 0 && (
              <span aria-hidden className="h-1 w-1 rotate-45 bg-accent/60" />
            )}
            <span className="text-xs font-medium tracking-[0.18em] text-muted/80 uppercase select-none">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
