import Reveal from './Reveal.jsx'

const FEATURED_FEATURES = [
  'User registration & login',
  'JWT authentication',
  'Protected endpoints',
  'User roles / authorization',
  'Support tickets',
  'Comments on tickets',
  'PostgreSQL database',
  'SQLAlchemy ORM',
  'Alembic migrations',
  'Swagger/OpenAPI docs',
]

const OTHER_PROJECTS = [
  {
    name: 'Task Management API',
    problem: 'Built while learning FastAPI, PostgreSQL and authentication together on one project.',
    built:
      'A task management backend with user registration, login, password hashing and JWT authentication, protected routes, and PostgreSQL relationships between users, projects and tasks.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'JWT', 'Authentication', 'Authorization', 'SQL', 'REST API'],
    github: 'https://github.com/muaazbinshamshad-crypto/Task-Management-api',
  },
  {
    name: 'Student Management API',
    problem: 'An earlier project — my first real attempt at a FastAPI + PostgreSQL backend.',
    built:
      'A backend API for managing student records with FastAPI and PostgreSQL — CRUD operations, database integration, request validation and API testing through Swagger.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQL', 'REST API', 'CRUD', 'Pydantic', 'Swagger'],
    github: null,
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">What I've actually built.</h2>
            <p className="section-sub">
              Personal learning projects, not client work — each one taught me something
              I didn't know how to do before.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <article className="featured-project">
            <div className="featured-badge">
              <span className="dot" />
              Main project — actively working on this
            </div>
            <div className="project-head">
              <h3 className="project-name">Support Ticket API</h3>
            </div>
            <p className="project-problem">
              A support system needs more than a login screen — it needs to know who owns
              a ticket, track its status and priority, and let people comment on it. This
              is my attempt at building that properly.
            </p>
            <ul className="featured-list">
              {FEATURED_FEATURES.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="project-tech">
              {['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'JWT', 'Pydantic'].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a
                className="btn btn-primary"
                href="https://github.com/muaazbinshamshad-crypto/Support-Ticket-API"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </article>
        </Reveal>

        {OTHER_PROJECTS.map((p, i) => (
          <Reveal delay={100 + i * 60} key={p.name}>
            <article className="project">
              <div className="project-head">
                <h3 className="project-name">{p.name}</h3>
              </div>
              <p className="project-problem">{p.problem}</p>
              <div className="project-col" style={{ marginBottom: 20 }}>
                <h4>What I built</h4>
                <p>{p.built}</p>
              </div>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                {p.github ? (
                  <a className="btn btn-secondary" href={p.github} target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                ) : (
                  <span className="btn btn-secondary" style={{ opacity: 0.6, cursor: 'default' }}>
                    Repository link coming soon
                  </span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
