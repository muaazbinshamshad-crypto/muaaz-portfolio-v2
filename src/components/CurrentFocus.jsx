import Reveal from './Reveal.jsx'

export default function CurrentFocus() {
  return (
    <section className="focus" id="focus">
      <div className="wrap">
        <Reveal>
          <p>
            I'm currently focused on backend development — building{' '}
            <span>APIs</span>, working with databases, authentication and
            learning how production backend systems are actually put together.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
