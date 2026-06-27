'use client';

import dynamic from 'next/dynamic';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Narrative from './Narrative/Narrative';
import Work from './Work/Work';
import Capabilities from './Capabilities/Capabilities';
import Testimonial from './Testimonial/Testimonial';
import CTA from './CTA/CTA';
import Footer from './Footer/Footer';

// Dither uses WebGL/Three.js — must be loaded client-side only (no SSR)
const Dither = dynamic(() => import('./Dither'), { ssr: false });

export default function HomePage() {
  return (
    <div className="app-container">
      {/* Dither Background - Full screen, receives pointer events */}
      <div className="dither-background">
        <Dither
          waveColor={[0.15, 0.02, 0.02]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={5}
          pixelSize={3.0}
          waveAmplitude={0.3}
          waveFrequency={2.5}
          waveSpeed={0.12}
        />
      </div>

      {/* Content layer - pointer events pass through to Dither */}
      <div className="content-layer">
        <Header />
        <main>
          <Hero />
          <Narrative />
          <Work />
          <Capabilities />
          <Testimonial />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
