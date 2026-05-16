import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Narrative from './components/Narrative/Narrative'
import Work from './components/Work/Work'
import Capabilities from './components/Capabilities/Capabilities'
import Testimonial from './components/Testimonial/Testimonial'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import Dither from './components/Dither'
import './App.css'

function App() {
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
  )
}

export default App
