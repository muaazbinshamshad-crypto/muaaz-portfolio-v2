import Reveal from './Reveal.jsx'

const STEPS = [
  { title: 'Basic FastAPI CRUD', desc: 'Started with simple create/read/update/delete endpoints.', state: 'done' },
  { title: 'Working with PostgreSQL', desc: 'Connected projects to a real relational database instead of in-memory data.', state: 'done' },
  { title: 'Authentication / JWT', desc: 'Learned password hashing and how JWT auth actually works end to end.', state: 'done' },
  { title: 'Building larger APIs', desc: 'Started combining auth, relationships and more endpoints in one project.', state: 'done' },
  { title: 'Moving to SQLAlchemy', desc: 'Switched to an ORM instead of writing raw queries everywhere.', state: 'done' },
  { title: 'Alembic migrations', desc: 'Learned to manage schema changes properly instead of editing the database by hand.', state: 'done' },
  { title: 'Testing & deployment', desc: 'Currently moving toward pytest, Docker and actually deploying a project.', state: 'current' },
]

export default function LearningJourney() {
  return (
    <section id="journey">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="section-kicker">Learning journey</p>
            <h2 className="section-title">How I got here.</h2>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <div className="timeline">
            {STEPS.map((s) => (
              <div className={`timeline-item ${s.state}`} key={s.title}>
                <span className="timeline-dot" />
                <p className="timeline-title">{s.title}</p>
                <p className="timeline-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
