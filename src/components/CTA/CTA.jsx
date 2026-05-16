import { useEffect, useRef } from 'react'
import './CTA.css'
import Button from '../Button/Button'

function CTA() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.2 }
        )

        const elements = sectionRef.current?.querySelectorAll('.reveal')
        elements?.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <section id="contact" className="cta" ref={sectionRef}>
            <div className="cta-grid-bg"></div>
            <div className="container">
                <div className="cta-content reveal">
                    <span className="section-label mono">Ready to scale?</span>
                    <h2 className="cta-title">
                        Let's build your<br />
                        <span className="text-muted">digital future.</span>
                    </h2>
                </div>

                <div className="cta-form reveal reveal-delay-1">
                    <div className="form-actions">
                        <Button href="mailto:contact@devtechsolutions.com" variant="primary">
                            Start Conversation <i className="ri-arrow-right-line"></i>
                        </Button>
                        <span className="form-note mono">
                            or email directly: <a href="mailto:contact@devtechsolutions.com">contact@devtechsolutions.com</a>
                        </span>
                    </div>
                </div>

                {/* Quick links */}
                <div className="cta-links reveal reveal-delay-2">
                    <a href="https://www.instagram.com/dev.tech.solutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="cta-link">
                        <i className="ri-instagram-line"></i>
                        <span>Instagram</span>
                    </a>
                    <a href="https://github.com/AdamChoudary/" target="_blank" rel="noopener noreferrer" className="cta-link">
                        <i className="ri-github-line"></i>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CTA
