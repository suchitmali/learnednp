import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Component/Navbar'
import './pages/Home'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import OurProjects from './pages/OurProjects'
import About_us from './pages/About_us'
import Contact from './pages/Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Home/>
    <Gallery/>
    <OurProjects/>
    <About_us/>
    <Contact/>
    <Footer/>
  </StrictMode>,
)
