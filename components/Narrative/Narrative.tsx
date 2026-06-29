'use client';

import { useReveal } from '@/hooks/useReveal';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import './Narrative.css';

function Narrative() {
  const sectionRef = useReveal(0.05);

  return (
    <section className="narrative section-top-line" ref={sectionRef}>

      <div className="container">
        <SectionHeader
          eyebrow="The Challenge"
          title="Three things holding your business back"
          className="reveal"
        />

        {/* ─── Cards ─── */}
        <div className="narrative-cards reveal">

          <article className="narrative-card">
            <div className="narrative-card-accent" aria-hidden="true" />
            <span className="narrative-card-num">01</span>
            <h3 className="narrative-card-title">Web Presence</h3>
            <p className="narrative-card-body">
              While your competitors are capturing market share online, an outdated
              web presence leaves you invisible. A modern website isn&apos;t
              optional&mdash;it&apos;s the cost of entry. We&apos;ve delivered{' '}
              <strong>over 200 projects</strong> from the ground up.
            </p>
          </article>

          <article className="narrative-card">
            <div className="narrative-card-accent" aria-hidden="true" />
            <span className="narrative-card-num">02</span>
            <h3 className="narrative-card-title">Voice &amp; AI</h3>
            <p className="narrative-card-body">
              Every missed call, every delayed response is a customer lost. AI voice
              agents don&apos;t sleep, don&apos;t take breaks. Across{' '}
              <strong>50+ web properties</strong>, automation reduced response
              times by <strong>80%</strong>.
            </p>
          </article>

          <article className="narrative-card">
            <div className="narrative-card-accent" aria-hidden="true" />
            <span className="narrative-card-num">03</span>
            <h3 className="narrative-card-title">Systems &amp; Operations</h3>
            <p className="narrative-card-body">
              Fragmented tools and manual processes are the silent ceiling on growth.
              We engineer integrated CRM and ERP systems that maintain{' '}
              <strong>99.9% uptime</strong> so your team focuses on what matters.
            </p>
          </article>

        </div>

        {/* ─── Pull Quote ─── */}
        <div className="narrative-quote reveal">
          <div className="narrative-quote-rule" aria-hidden="true" />
          <p className="narrative-quote-line" style={{ '--i': 0 } as React.CSSProperties}>
            What if the gap between
          </p>
          <p className="narrative-quote-line" style={{ '--i': 1 } as React.CSSProperties}>
            idea and execution was
          </p>
          <p className="narrative-quote-line" style={{ '--i': 2 } as React.CSSProperties}>
            just a conversation?
          </p>
        </div>

        {/* ─── Closing ─── */}
        <div className="narrative-close reveal">
          <span className="narrative-close-eyebrow">The Remark Difference</span>
          <p className="narrative-close-title">
            We don&apos;t just build websites&mdash;we engineer every touchpoint.
          </p>
          <p className="narrative-close-desc">
            Websites, AI agents, chatbots, CRM, marketing, design&mdash;end-to-end
            across every discipline. One team, one vision, seamless integration.
          </p>
          <a className="btn btn-primary" href="#contact">
            Start your journey
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Narrative;
