'use client';

import { useEffect, useRef, useState } from 'react';
import './ServicesGallery.css';
import { useScrollContext } from '../ScrollProvider';
import Button from '../Button/Button';

const workItems = [
  { index: '01', title: 'WEBSITE DEVELOPMENT', category: 'Web Solutions', metric: 'Property • Portfolio • Business • SaaS', href: '#contact', description: 'Custom-built, high-conversion websites for property listings, portfolios, businesses, and SaaS platforms optimized for SEO and modern speed standards.' },
  { index: '02', title: 'DIGITAL MARKETING', category: 'Growth Marketing', metric: 'SEO • SEM • PPC • Scaling', href: '#contact', description: 'Data-driven performance marketing campaigns designed to scale brand awareness, maximize conversion rates, and deliver high ROI.' },
  { index: '03', title: 'SOCIAL MEDIA MANAGEMENT', category: 'Social & Brand', metric: 'Strategy • Curation • Engagement', href: '#contact', description: 'End-to-end management of your social footprint, crafting custom aesthetics, strategic schedules, and active community engagement.' },
  { index: '04', title: 'GRAPHIC DESIGNING', category: 'Visual Arts', metric: 'Vector • UI Layout • Print Assets', href: '#contact', description: 'High-fidelity vector designs, bespoke visual elements, and stunning brand layouts engineered for modern digital and print media.' },
  { index: '05', title: 'VIDEO PRODUCTION', category: 'Media Production', metric: 'Shoots • Direction • Commercials', href: '#contact', description: 'Professional film production, scripting, and direction for luxury brand commercials, corporate profiles, and promotional media.' },
  { index: '06', title: 'VIDEO EDITING', category: 'Post-Production', metric: 'Cinematic • Color Grading • VFX', href: '#contact', description: 'Premium post-production involving cinematic pacing, precise sound design, professional color grading, and dynamic visual effects.' },
  { index: '07', title: 'BRANDING & IDENTITY DESIGN', category: 'Brand Architecture', metric: 'Logo • Style Guide • Assets', href: '#contact', description: 'Developing core visual assets, unified design systems, brand guidelines, and unique logo architectures that establish creative authority.' },
  { index: '08', title: 'EVENT MANAGEMENT', category: 'Experiential Marketing', metric: 'Planning • Execution • Branding', href: '#contact', description: 'Seamless coordination and design of corporate conferences, product launches, and luxury brand experiences from concept to execution.' },
  { index: '09', title: 'CONTENT CREATION', category: 'Creative Content', metric: 'Copy • Visuals • Storytelling', href: '#contact', description: 'Bespoke copywriting, captivating imagery, and multi-channel storytelling tailored to resonate with target audiences and drive action.' },
  { index: '10', title: 'PRINTING & MARKETING MATERIALS', category: 'Print Architecture', metric: 'Custom Print • Collaterals', href: '#contact', description: 'Premium-grade print architecture, including custom business cards, brochures, posters, and tangible marketing collateral with exquisite finishes.' },
  { index: '11', title: 'PHOTOGRAPHY & PRODUCT SHOOTS', category: 'Studio Photography', metric: 'High-Res • Commercial • Studio', href: '#contact', description: 'Ultra-high-definition product and lifestyle photography using studio lighting and editorial staging to present items in their best light.' },
  { index: '12', title: 'ADVERTISING & PROMOTIONAL CAMPAIGNS', category: 'Campaign Strategy', metric: 'Omnichannel • Leads • Analytics', href: '#contact', description: 'Targeted, multi-channel advertising strategy designed to secure premium leads, amplify campaign reach, and track user attribution.' },
  { index: '13', title: 'AI VOICE AGENTS', category: 'Voice Intelligence', metric: 'Support • Handling • HelpLine', href: '#contact', description: 'Intelligent voice agents for automated customer support, seamless call handling, helpline routing, and targeted marketing campaigns.' },
  { index: '14', title: 'SMART CHAT BOTS', category: 'Conversational AI', metric: 'Support • Handling • Guidance', href: '#contact', description: 'AI-powered conversational chatbots providing 24/7 client support, intelligent user guidance, and instant lead capture across platforms.' },
  { index: '15', title: 'CRM & ERP MANAGEMENT', category: 'Business Systems', metric: 'End-to-End Solutions', href: '#contact', description: 'Complete CRM & ERP implementation and management to streamline operations, boost productivity, and drive growth.' },
];

const PANEL_SIZE = 3;
type WorkItem = typeof workItems[number];
const panels: WorkItem[][] = [];
for (let i = 0; i < workItems.length; i += PANEL_SIZE) {
  panels.push(workItems.slice(i, i + PANEL_SIZE));
}

const panelTitles = [
  'Digital Presence',
  'Creative Craft',
  'Brand & Experience',
  'Tactical Growth',
  'Intelligent Systems',
];

function ServicesGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { isDesktop } = useScrollContext();
  const [activePanel, setActivePanel] = useState(0);

  useEffect(() => {
    if (!isDesktop || !sectionRef.current) return;
    const section = sectionRef.current;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const offsetTop = section.offsetTop;
      const totalDistance = panels.length * window.innerHeight;
      const raw = (scrollTop - offsetTop) / totalDistance;
      const clamped = Math.max(0, Math.min(1, raw));
      setActivePanel(Math.round(clamped * (panels.length - 1)));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop || !sectionRef.current || !trackRef.current) return;
    let ctx: { revert: () => void } | null = null;

    async function setup() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current!;
      const track = trackRef.current!;
      const totalPanels = panels.length;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'none' } });

        tl.to(track, {
          xPercent: -(totalPanels - 1) * 100,
          ease: 'none',
        });

        ScrollTrigger.create({
          trigger: section,
          pin: true,
          pinSpacing: true,
          start: 'top top',
          end: `+=${totalPanels * 100}%`,
          scrub: 0.8,
          invalidateOnRefresh: true,
          animation: tl,
        });
      }, section);
    }

    setup();

    return () => {
      ctx?.revert();
    };
  }, [isDesktop]);

  useEffect(() => {
    if (isDesktop) return;
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const elements = section.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isDesktop]);

  return (
    <section id="services" className="services-gallery" ref={sectionRef}>
      <div className="services-track" ref={trackRef}>
        {panels.map((panel, panelIdx) => (
          <div className="services-panel" key={panelIdx}>
            <div className="container">
              <div className="panel-header">
                <span className="panel-number mono">{String(panelIdx + 1).padStart(2, '0')} / {String(panels.length).padStart(2, '0')}</span>
                <h3 className="panel-title">{panelTitles[panelIdx]}</h3>
              </div>
              <div className="panel-cards">
                {panel.map((item, cardIdx) => {
                  const isLastCard = panelIdx === panels.length - 1 && cardIdx === panel.length - 1;
                  if (isLastCard) {
                    return (
                      <div className="gallery-card transition-card reveal" key="transition">
                        <div className="transition-content">
                          <span className="transition-label mono">All 15 Services</span>
                          <h3 className="transition-title">From digital foundations</h3>
                          <p className="transition-desc">Websites, AI, marketing, design — we deliver end-to-end across every discipline.</p>
                          <Button href="#capabilities" variant="primary">
                            See how we deliver <i className="ri-arrow-right-up-line"></i>
                          </Button>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <a
                      href={item.href}
                      className={`gallery-card reveal reveal-delay-${cardIdx + 1}`}
                      key={item.index}
                    >
                      <div className="card-header">
                        <span className="card-index mono">{item.index}</span>
                        <span className="card-category mono">{item.category}</span>
                      </div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-desc">{item.description}</p>
                      <div className="card-footer">
                        <span className="card-metric mono">{item.metric}</span>
                        <span className="card-arrow">
                          <i className="ri-arrow-right-up-line"></i>
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-progress" aria-hidden="true">
        <div className="progress-dots">
          {panels.map((_, i) => (
            <div
              className={`progress-dot${i === activePanel ? ' active' : ''}${i < activePanel ? ' past' : ''}`}
              key={i}
            />
          ))}
        </div>
        <span className="progress-label mono">Scroll to explore services</span>
      </div>

      {activePanel === 0 && (
        <div className="gallery-scroll-hint" aria-hidden="true">
          <span className="mono">Scroll to explore →</span>
        </div>
      )}
    </section>
  );
}

export default ServicesGallery;
