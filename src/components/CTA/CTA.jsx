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
                        <Button href="mailto:hello@remarkstudio.agency" variant="primary">
                            Start Conversation <i className="ri-arrow-right-line"></i>
                        </Button>
                        <span className="form-note mono">
                            or email directly: <a href="mailto:hello@remarkstudio.agency">hello@remarkstudio.agency</a>
                        </span>
                    </div>
                </div>

                {/* Quick links */}
                <div className="cta-links reveal reveal-delay-2">
                    <a href="https://www.instagram.com/remark_studios" target="_blank" rel="noopener noreferrer" className="cta-link">
                        <i className="ri-instagram-line"></i>
                        <span>Instagram</span>
                    </a>
                    <a href="https://www.tiktok.com/@remark.studio" target="_blank" rel="noopener noreferrer" className="cta-link">
                        <i className="ri-tiktok-line"></i>
                        <span>TikTok</span>
                    </a>
                    <a href="https://wa.me/923355970322" target="_blank" rel="noopener noreferrer" className="cta-link">
                        <i className="ri-whatsapp-line"></i>
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CTA
