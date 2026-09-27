export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <p className="hero-eyebrow hero-anim" style={{ animationDelay: '0ms' }}>
          Computer Science Student
        </p>
        <h1 className="hero-anim" style={{ animationDelay: '80ms' }}>
          Muaaz Bin Shamshad
        </h1>
        <p className="hero-eyebrow hero-anim" style={{ animationDelay: '150ms', marginBottom: 20 }}>
          Backend Development <span>&middot;</span> Python <span>&middot;</span> FastAPI <span>&middot;</span> PostgreSQL
        </p>
        <p className="hero-sub hero-anim" style={{ animationDelay: '220ms' }}>
          I'm a Computer Science student learning backend development by building real
          projects with Python, FastAPI and PostgreSQL.
        </p>
        <div className="hero-actions hero-anim" style={{ animationDelay: '300ms' }}>
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn-secondary" href="mailto:muaazbinshamshad@gmail.com">
            Email Me
          </a>
        </div>
      </div>
    </header>
  )
}
