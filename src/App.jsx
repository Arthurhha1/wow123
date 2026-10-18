import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Destinations from './components/Destinations.jsx'
import Culinary from './components/Culinary.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Destinations />
        <Culinary />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
