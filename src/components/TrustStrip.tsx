"use client";

const items = [
  { title: "Web Development", subtitle: "Architecture & Code", img: "/Enhance Image Quality Jul 06.jpeg" },
  { title: "Brand Identity", subtitle: "Visual Design Systems", img: "/Image Quality Improvement 2K Jul 06.jpeg" },
  { title: "Conversational AI", subtitle: "Automated Intelligence", img: "/Image Quality Improvement 2K Jul 06.jpeg" },
  { title: "Creative Production", subtitle: "Content & Media", img: "/Image Quality Improvement 2K Jul 06.jpeg" },
  { title: "Digital Marketing", subtitle: "Growth & Strategy", img: "/Background Image Text Jul 06.jpeg" },
];

function MarqueeItem({ item }: { item: typeof items[0] }) {
  return (
    <div className="group/item relative flex h-[160px] cursor-pointer items-center justify-center px-12">
      
      {/* Invisible static clone to permanently lock container width so siblings NEVER move */}
      <span className="invisible whitespace-nowrap text-[12px] font-bold tracking-[0.18em] uppercase">
        {item.title}
      </span>

      {/* Expanding Background Box (Stretches outwards to touch sibling texts without pushing the flex layout!) */}
      <div className="absolute top-2 bottom-2 left-2 right-2 -z-10 overflow-hidden rounded-sm transition-all duration-700 ease-[cubic-bezier(0.2,1,0.3,1)] group-hover/item:-left-12 group-hover/item:-right-12 group-hover/item:-top-6 group-hover/item:-bottom-6 group-hover/item:bg-[#0a0a0a] group-hover/item:shadow-[0_0_30px_rgba(0,0,0,0.8)]">
        {/* Background Image Reveal */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover/item:opacity-60">
          <img src={item.img} alt="" className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Animated Main Title (Sweeps from center to Top-Left corner of expanded box) */}
      <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[12px] font-medium tracking-[0.18em] text-muted/80 uppercase transition-all duration-700 ease-[cubic-bezier(0.2,1,0.3,1)] group-hover/item:-left-6 group-hover/item:top-2 group-hover/item:translate-x-0 group-hover/item:translate-y-0 group-hover/item:font-bold group-hover/item:text-white">
        {item.title}
      </span>
      
      {/* Subtitle (Fades into Bottom-Left corner of expanded box) */}
      <span className="absolute bottom-0 -left-6 z-10 translate-y-2 whitespace-nowrap text-[10px] tracking-widest text-gray-400 uppercase opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,1,0.3,1)] group-hover/item:translate-y-0 group-hover/item:opacity-100">
        {item.subtitle}
      </span>

    </div>
  );
}

export function TrustStrip() {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <section className="relative z-30 w-full -mt-[120px] overflow-hidden bg-transparent pb-6">
      
      {/* Inline Keyframes */}
      <style>{`
        @keyframes endless-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-endless-marquee {
          animation: endless-marquee 45s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Scrolling Track Container */}
      <div className="flex w-full">
        {/* The Track (Directly pauses on hover via robust CSS) */}
        <div className="flex w-max animate-endless-marquee pause-on-hover items-center">
          {duplicatedItems.map((item, i) => (
            <MarqueeItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
