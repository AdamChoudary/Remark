import { useEffect, useRef } from 'react'
import './Work.css'
import Button from '../Button/Button'

const workItems = [
    {
        index: '01',
        title: 'WEBSITE DEVELOPMENT',
        category: 'Web Solutions',
        metric: 'Property • Portfolio • Business • SaaS',
        href: '#contact',
        description: 'Custom-built websites for property listings, portfolios, businesses, and SaaS platforms that convert visitors into customers.'
    },
    {
        index: '02',
        title: 'AI VOICE AGENTS',
        category: 'Voice Intelligence',
        metric: 'Support • Handling • HelpLine • Marketing',
        href: '#contact',
        description: 'Intelligent voice agents for customer support, call handling, helpline automation, and marketing outreach campaigns.'
    },
    {
        index: '03',
        title: 'SMART CHAT BOTS',
        category: 'Conversational AI',
        metric: 'Support • Handling • Guidance',
        href: '#contact',
        description: 'AI-powered chatbots for customer support, customer handling, and user guidance — available 24/7 across all channels.'
    },
    {
        index: '04',
        title: 'CRM & ERP MANAGEMENT',
        category: 'Business Systems',
        metric: 'End-to-End Solutions',
        href: '#contact',
        description: 'Complete CRM & ERP implementation and management to streamline operations, boost productivity, and drive growth.'
    }
]

function Work() {
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
                    <Button
                        href="#contact"
                    >
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
    )
}

export default Work
