import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import UseCases from './sections/UseCases'
import Showcase from './sections/Showcase'
import Testimonials from './sections/Testimonials'
import Stats from './sections/Stats'
import Resources from './sections/Resources'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <Showcase />
        <Testimonials />
        <Stats />
        <Resources />
      </main>
      <Footer />
    </div>
  )
}

export default App