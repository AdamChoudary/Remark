const items = [
  "Web Development",
  "Brand Identity",
  "Conversational AI",
  "Creative Production",
  "Digital Marketing",
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-border-subtle bg-void/80 w-full">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-6 md:px-8">
        {items.map((item, i) => (
          <div key={item} className="flex items-center gap-8">
            {i > 0 && (
              <span aria-hidden className="h-1 w-1 rotate-45 bg-accent/60" />
            )}
            <span className="text-xs font-medium tracking-[0.18em] text-muted/80 uppercase select-none transition-colors duration-300 hover:text-fg">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
