const stats = [
  { value: "150+", label: "Happy Clients" },
  { value: "300+", label: "Projects Delivered" },
  { value: "24/7", label: "Support Available" },
];

export function StatsBar() {
  return (
    <section className="bg-bg-med border-y border-border-subtle">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-3 divide-x divide-border-subtle py-12 md:py-16">
          {stats.map((s) => (
            <div key={s.label} className="group flex flex-col items-center px-2 text-center">
              <p className="font-display text-[clamp(2.25rem,6vw,4rem)] font-semibold leading-none tracking-[-0.02em] text-fg tabular-nums
                transition-colors duration-300 ease-out-expo group-hover:text-accent">
                {s.value}
              </p>
              <p className="mt-3 text-[10px] tracking-[0.18em] text-subtle uppercase md:text-[11px]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
