import Reveal from './Reveal.jsx'

const CURRENT = ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Pydantic', 'JWT', 'Git', 'GitHub']
const LEARNING = ['pytest', 'Docker', 'Deployment']

export default function TechStack() {
  return (
    <section id="stack">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="section-kicker">Stack</p>
            <h2 className="section-title">What I actually use, and what's next.</h2>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="stack-block">
            <p className="stack-label">Currently working with</p>
            <div className="chip-row">
              {CURRENT.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="stack-block">
            <p className="stack-label learning">Currently learning</p>
            <div className="chip-row">
              {LEARNING.map((t) => (
                <span className="chip learning-chip" key={t}>{t}</span>
              ))}
            </div>
            <p className="stack-note">Not mastered yet — just what I'm working through next.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
