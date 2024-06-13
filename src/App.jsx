import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './pages/Index';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Particle from './components/Particles';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Particle />
            <Navbar />
              <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/about-me' element={<AboutMe />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Projects />} />
              </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  )
}

export default App
