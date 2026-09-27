import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap contact-inner">
        <Reveal>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Have a project idea or internship opportunity?</h2>
          <p className="section-sub">Email: muaazbinshamshad@gmail.com</p>
          <div className="contact-links">
            <a className="btn btn-primary" href="mailto:muaazbinshamshad@gmail.com">
              Email Me
            </a>
            <a
              className="btn btn-secondary"
              href="https://www.linkedin.com/in/muaaz-bin-shamshad-97755932a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-secondary"
              href="https://github.com/muaazbinshamshad-crypto"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
