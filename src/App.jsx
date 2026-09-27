import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CurrentFocus from './components/CurrentFocus.jsx'
import HelpWith from './components/HelpWith.jsx'
import TechStack from './components/TechStack.jsx'
import Projects from './components/Projects.jsx'
import LearningJourney from './components/LearningJourney.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CurrentFocus />
        <HelpWith />
        <TechStack />
        <Projects />
        <LearningJourney />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
