import './App.css'
import Header from './Header';
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
      <Header/>
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
