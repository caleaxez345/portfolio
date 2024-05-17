import './App.css'
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Projects from './Projects';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
