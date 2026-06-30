const stats = [
  { value: "150+", label: "Happy Clients" },
  { value: "300+", label: "Projects Delivered" },
  { value: "24/7", label: "Support Available" },
];

export function StatsBar() {
  return (
    <section className="bg-bg-med border-y border-border-subtle">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 py-8">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-4">
              {i > 0 && <span className="hidden h-8 w-px bg-border-subtle md:block" aria-hidden="true" />}
              <p className="font-display text-2xl font-light text-fg tabular-nums">{s.value}</p>
              <p className="text-[10px] tracking-[0.15em] text-subtle uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
