'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Button from '@/components/Button/Button';
import './Services.css';

const categories = [
  'Digital Presence',
  'Creative Craft',
  'Brand & Experience',
  'Tactical Growth',
  'Intelligent Systems',
];

const services = [
  { id: '01', title: 'Website Development', category: 'Web Solutions', metric: '50+ Projects', desc: 'Custom-built, high-conversion websites for property listings, portfolios, businesses, and SaaS platforms optimized for SEO and modern speed standards.' },
  { id: '02', title: 'Digital Marketing', category: 'Growth Marketing', metric: '200+ Campaigns', desc: 'Data-driven performance marketing campaigns designed to scale brand awareness, maximize conversion rates, and deliver high ROI.' },
  { id: '03', title: 'Social Media Management', category: 'Social & Brand', metric: '100+ Brands', desc: 'End-to-end management of your social footprint, crafting custom aesthetics, strategic schedules, and active community engagement.' },
  { id: '04', title: 'Graphic Designing', category: 'Visual Arts', metric: '500+ Designs', desc: 'High-fidelity vector designs, bespoke visual elements, and stunning brand layouts engineered for modern digital and print media.' },
  { id: '05', title: 'Video Production', category: 'Media Production', metric: '300+ Films', desc: 'Professional film production, scripting, and direction for luxury brand commercials, corporate profiles, and promotional media.' },
  { id: '06', title: 'Video Editing', category: 'Post-Production', metric: '1000+ Edits', desc: 'Premium post-production involving cinematic pacing, precise sound design, professional color grading, and dynamic visual effects.' },
  { id: '07', title: 'Branding & Identity', category: 'Brand Architecture', metric: '80+ Brands', desc: 'Developing core visual assets, unified design systems, brand guidelines, and unique logo architectures that establish creative authority.' },
  { id: '08', title: 'Event Management', category: 'Experiential', metric: '60+ Events', desc: 'Seamless coordination and design of corporate conferences, product launches, and luxury brand experiences from concept to execution.' },
  { id: '09', title: 'Content Creation', category: 'Creative Content', metric: '2000+ Assets', desc: 'Bespoke copywriting, captivating imagery, and multi-channel storytelling tailored to resonate with target audiences and drive action.' },
  { id: '10', title: 'Printing & Materials', category: 'Print', metric: '1000+ Prints', desc: 'Premium-grade print architecture, including custom business cards, brochures, posters, and tangible marketing collateral with exquisite finishes.' },
  { id: '11', title: 'Photography', category: 'Studio', metric: '500+ Shoots', desc: 'Ultra-high-definition product and lifestyle photography using studio lighting and editorial staging to present items in their best light.' },
  { id: '12', title: 'Advertising', category: 'Campaigns', metric: '150+ Campaigns', desc: 'Targeted, multi-channel advertising strategy designed to secure premium leads, amplify campaign reach, and track user attribution.' },
  { id: '13', title: 'AI Voice Agents', category: 'Voice AI', metric: '200+ Deployments', desc: 'Intelligent voice agents for automated customer support, seamless call handling, helpline routing, and targeted marketing campaigns.' },
  { id: '14', title: 'Smart Chat Bots', category: 'Conversational AI', metric: '300+ Bots', desc: 'AI-powered conversational chatbots providing 24/7 client support, intelligent user guidance, and instant lead capture across platforms.' },
  { id: '15', title: 'CRM & ERP', category: 'Business Systems', metric: '30+ Systems', desc: 'Complete CRM & ERP implementation and management to streamline operations, boost productivity, and drive growth.' },
];

export default function ServicesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-page" ref={sectionRef}>
      <Header />
      <main>
        <section className="services-hero section-top-line">
          <div className="services-hero-spotlight" />
          <div className="container">
            <div className="services-hero-content">
              <h1 className="reveal">Our Services</h1>
              <p className="services-hero-subtitle reveal reveal-delay-1">15 disciplines, one integrated approach</p>
              <div className="services-category-pills glass reveal reveal-delay-2">
                {categories.map((cat) => (
                  <span key={cat} className="badge">{cat}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="services-hero-hairline" />
        </section>

        <section className="services-grid-section section-top-line">
          <div className="container">
            <div className="services-grid">
              {services.map((service, i) => {
                const delayClass = `reveal-delay-${(i % 3) + 1}`;
                return (
                  <article key={service.id} className={`service-card reveal ${delayClass}`}>
                    <div className="service-card-top">
                      <span className="service-index micro">{service.id}</span>
                      <span className="badge">{service.category}</span>
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc body-sm">{service.desc}</p>
                    <div className="service-metric micro">{service.metric}</div>
                    <div className="service-card-accent" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="services-cta section-top-line">
          <div className="container">
            <div className="services-cta-content reveal">
              <h2>Ready to get started?</h2>
              <p className="services-cta-subtitle">Let&apos;s talk about your project</p>
              <Button variant="primary" className="services-cta-btn">
                Start a Project <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
