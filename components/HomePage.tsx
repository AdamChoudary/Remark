'use client';

import dynamic from 'next/dynamic';
import { ScrollProvider } from './ScrollProvider';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Narrative from './Narrative/Narrative';
import ServicesGallery from './ServicesGallery/ServicesGallery';
import Capabilities from './Capabilities/Capabilities';
import Testimonial from './Testimonial/Testimonial';
import CTA from './CTA/CTA';
import Footer from './Footer/Footer';
import ScrollProgress from './ScrollProgress/ScrollProgress';

const Dither = dynamic(() => import('./Dither'), { ssr: false });

export default function HomePage() {
  return (
    <ScrollProvider>
      <ScrollProgress />
      <div className="app-container">
        <div className="dither-background">
          <Dither
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

        <div className="content-layer">
          <Header />
          <main>
            <Hero />
            <Narrative />
            <ServicesGallery />
            <Capabilities />
            <Testimonial />
            <CTA />
          </main>
          <Footer />
        </div>
      </div>
    </ScrollProvider>
  );
}
