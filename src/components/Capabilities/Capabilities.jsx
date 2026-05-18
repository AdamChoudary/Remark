import { useEffect, useRef } from 'react'
import './Capabilities.css'
import CurvedLoop from '../CurvedLoop'

const capabilities = [
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Development',
        description: 'Property sites, portfolios, business websites & SaaS platforms. Modern, responsive, and SEO-optimized.',
        featured: true
    },
    {
        icon: 'ri-customer-service-2-line',
        title: 'Voice Agents',
        description: 'AI-powered voice agents for customer support, call handling, helplines, and marketing campaigns.'
    },
    {
        icon: 'ri-robot-2-line',
        title: 'Chat Bots',
        description: 'Intelligent conversational bots for customer support, handling, and user guidance across platforms.'
    },
    {
        icon: 'ri-database-2-line',
        title: 'CRM & ERP',
        description: 'End-to-end CRM & ERP solutions to streamline your business operations and boost efficiency.'
    },
    {
        icon: 'ri-shield-check-line',
        title: 'Scalable & Secure',
        description: 'Enterprise-grade security and infrastructure built to scale with your growing business.'
    },
    {
        icon: 'ri-line-chart-line',
        title: 'Analytics & Insights',
        description: 'Data-driven dashboards and reporting to track performance and make informed decisions.'
    }
]

const tools = ['REACT', 'NEXT.JS', 'AI & MACHINE LEARNING', 'OPENAI', 'FIGMA', 'ADOBE CREATIVE SUITE', 'DAVINCI RESOLVE', 'META ADS', 'GOOGLE ANALYTICS', 'SALESFORCE', 'NODE.JS', 'PYTHON']

function Capabilities() {
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
            { threshold: 0.1, rootMargin: '-50px' }
        )

        const elements = sectionRef.current?.querySelectorAll('.reveal')
        elements?.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <section id="capabilities" className="capabilities" ref={sectionRef}>
            <div className="container">
                <div className="capabilities-header reveal">
                    <span className="section-label mono">Capabilities</span>
                    <h2 className="capabilities-title">
                        What we<br />
                        <span className="accent">bring to the table</span>
                    </h2>
                </div>

                <div className="cap-grid">
                    {capabilities.map((cap, index) => (
                        <div
                            className={`cap-card ${cap.featured ? 'featured' : ''} reveal reveal-delay-${(index % 3) + 1}`}
                            key={index}
                        >
                            <div className="cap-icon">
                                <i className={cap.icon}></i>
                            </div>
                            <h3 className="cap-title">{cap.title}</h3>
                            <p className="cap-desc">{cap.description}</p>
                        </div>
                    ))}
                </div>

                {/* Tool curved loop */}
                <div className="reveal">
                    <CurvedLoop
                        marqueeText={tools.join(' ✦ ') + ' ✦ '}
                        speed={2}
                        curveAmount={80}
                        direction="left"
                        interactive
                        className="capabilities-loop-text"
                    />
                </div>
            </div>
        </section>
    )
}

export default Capabilities
