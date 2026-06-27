'use client';

import { useEffect, useRef } from 'react';
import './Narrative.css';

const problems = [
  {
    number: '01',
    title: 'Outdated or no web presence',
    description: 'Your competitors are online and thriving while your business lacks a professional digital footprint.',
  },
  {
    number: '02',
    title: 'Customer queries going unanswered',
    description: 'Missed calls, delayed responses, and overwhelmed support teams cost you customers every day.',
  },
  {
    number: '03',
    title: 'Manual processes slowing growth',
    description: 'Without proper CRM & ERP systems, your business operations are inefficient and error-prone.',
  },
];

function Narrative() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="narrative section-top-line" ref={sectionRef}>
      <div className="container">
        <div className="narrative-header reveal">
          <span className="section-label mono">THE PROBLEM</span>
          <h2 className="narrative-title">
            Why most agencies<br />
            fail to deliver
          </h2>
        </div>

        <div className="problem-grid">
          {problems.map((problem, index) => (
            <div
              className={`problem-card reveal reveal-delay-${index + 1}`}
              key={problem.number}
            >
              <span className="problem-number mono">{problem.number}</span>
              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-desc">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="solution reveal">
          <div className="solution-line"></div>
          <div className="solution-content">
            <span className="section-label mono accent">The Solution</span>
            <h3 className="solution-title">
              The <span className="accent">Remark</span> difference
            </h3>
            <p className="solution-desc">
              We don&apos;t just build websites — we engineer every touchpoint of your brand&apos;s digital presence. From custom web platforms and AI-driven conversational intelligence to performance growth marketing, premium brand identity, and high-end video production, our multidisciplinary team delivers solutions that scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Narrative;
