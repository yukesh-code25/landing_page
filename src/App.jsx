  
import Navbar from './components/Navbar.jsx'
import HeroSection from './section/HeroSection.jsx'
import About from './section/About.jsx'
import Stats from './section/Stats.jsx'
import Dishes from './section/Dishes.jsx'
import Features from './section/Features.jsx'
import BookingProcess from './section/BookingProcess.jsx'
import Timing from './section/Timing.jsx'
import TestimonialSection from './section/TestimonialSection.jsx'
import FAQs from './section/FAQs.jsx'
import CTA from './section/CTA.jsx'
import Footer from './components/Footer.jsx'
import LenisScroll from './components/LenisScroll.jsx'


const App = () => {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Dishes />
      <Features />
      <BookingProcess />
      <Timing/>
      <TestimonialSection />
      <FAQs/>
      <CTA />
      <Footer />
    </>
  )
}

export default App