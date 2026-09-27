import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-short">
        <Reveal>
          <p className="section-kicker">About</p>
          <p>
            I'm a Computer Science undergraduate learning backend development by building
            projects instead of only following tutorials. Most of what I'm learning comes
            from actually running into problems, debugging them, and figuring out how the
            pieces fit together.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
