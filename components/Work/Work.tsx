'use client';

import { useEffect, useRef } from 'react';
import './Work.css';
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

function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="work" ref={sectionRef}>
      <div className="container">
        <div className="work-header reveal">
          <div className="work-header-left">
            <span className="section-label mono">Our Services</span>
            <h2 className="work-title">
              Solutions<br />
              <span className="text-muted">that deliver</span>
            </h2>
          </div>
          <Button href="#contact">
            Get a Quote <i className="ri-external-link-line"></i>
          </Button>
        </div>

        <div className="work-grid">
          {workItems.map((item, idx) => (
            <a
              href={item.href}
              className={`work-item reveal reveal-delay-${idx + 1}`}
              key={item.index}
            >
              <div className="work-item-header">
                <span className="work-index mono">{item.index}</span>
                <div className="work-meta">
                  <span className="work-category">{item.category}</span>
                  <span className="work-metric mono">{item.metric}</span>
                </div>
              </div>
              <h3 className="work-item-title">{item.title}</h3>
              <p className="work-item-desc">{item.description}</p>
              <div className="work-item-arrow">
                <i className="ri-arrow-right-up-line"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
