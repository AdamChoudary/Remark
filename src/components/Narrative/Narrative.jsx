import { useEffect, useRef } from 'react'
import './Narrative.css'

const problems = [
    {
        number: '01',
        title: "Outdated or no web presence",
        description: "Your competitors are online and thriving while your business lacks a professional digital footprint."
    },
    {
        number: '02',
        title: "Customer queries going unanswered",
        description: "Missed calls, delayed responses, and overwhelmed support teams cost you customers every day."
    },
    {
        number: '03',
        title: "Manual processes slowing growth",
        description: "Without proper CRM & ERP systems, your business operations are inefficient and error-prone."
    }
]

function Narrative() {
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
        <section id="process" className="narrative" ref={sectionRef}>
            <div className="container">
                {/* Section header */}
                <div className="narrative-header reveal">
                    <span className="section-label mono">The Problem</span>
                    <h2 className="narrative-title">
                        Your business deserves<br />
                        better than <span className="strike">good enough</span>
                    </h2>
                </div>

                {/* Problem cards */}
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

                {/* Solution */}
                <div className="solution reveal">
                    <div className="solution-line"></div>
                    <div className="solution-content">
                        <span className="section-label mono accent">The Solution</span>
                        <h3 className="solution-title">
                            Your vision. Our expertise.<br />
                            <span className="accent">Scalable digital solutions.</span>
                        </h3>
                        <p className="solution-desc">
                            From custom web platforms and AI-driven conversational intelligence to performance growth marketing, premium brand identity, high-end video production, and custom print materials — we engineer every touchpoint of your brand's digital and physical presence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Narrative
