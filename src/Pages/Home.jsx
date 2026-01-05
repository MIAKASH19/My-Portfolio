import React from 'react'
import Navbar from "../Components/Navbar.jsx"
import Hero from "../Components/Hero.jsx"
import About from '../Components/About.jsx'
import Skills from '../Components/Skills.jsx'
import Contact from '../Components/Contact.jsx'
import Footer from '../Components/Footer.jsx'
import Projects from '../Components/Project.jsx'
import Education from '../Components/Eduction.jsx'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Education></Education>
        <Skills />
        <Projects></Projects>
        <Contact />
        <Footer></Footer>
    </div>
  )
}

export default Home