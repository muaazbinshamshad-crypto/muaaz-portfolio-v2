import Reveal from './Reveal.jsx'

const ITEMS = [
  { name: 'REST APIs', desc: 'Building backend services and endpoints with FastAPI.' },
  { name: 'Authentication & authorization', desc: 'Login, JWT tokens, protected routes and user roles.' },
  { name: 'CRUD systems', desc: 'Create, read, update, delete — the core of most backend features.' },
  { name: 'Database-backed applications', desc: 'Connecting an app to PostgreSQL and modeling the data it needs.' },
  { name: 'API validation', desc: 'Validating request data with Pydantic so bad input gets caught early.' },
  { name: 'Database migrations', desc: 'Managing schema changes over time with Alembic instead of by hand.' },
  { name: 'API documentation', desc: 'Documenting endpoints so they\u2019re actually usable, through Swagger/OpenAPI.' },
]

export default function HelpWith() {
  return (
    <section id="help">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="section-kicker">What I can build</p>
            <h2 className="section-title">The backend side of a product.</h2>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="help-list">
            {ITEMS.map((item) => (
              <div className="help-row" key={item.name}>
                <div className="help-name">{item.name}</div>
                <p className="help-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
