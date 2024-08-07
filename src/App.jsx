import React, { useState , useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './pages/Index';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Particle from './components/Particles';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('pageThemeIsDark')));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
      try{
          localStorage.setItem('pageThemeIsDark', JSON.stringify(isDark));
      } catch(e) {
          console.error('Failed to set page theme: ', e);
      }
  }, [isDark]);

  {/*If isDark set to light, if not set to black to the root element of the document */}
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'black')
  }, [isDark])
 
  return (
    <>
    {isLoading ? ( 
      <Preloader theme={isDark  ? 'black' : 'light'} />
    ) : (
      <BrowserRouter>
        <ScrollToTop>
          <Particle />
            <Navbar isDark={isDark} setIsDark={setIsDark} />
              <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/about-me' element={<AboutMe />} />
                <Route path='/contact' element={<Contact isDark={isDark} />} />
                <Route path='/projects' element={<Projects />} />
              </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
      )} 
    </>
  );
}

export default App
