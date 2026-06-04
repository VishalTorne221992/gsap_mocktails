import React from 'react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails.jsx'
import { ScrollTrigger, SplitText } from 'gsap/all.js'
import About from './components/About'
import Art from './components/Art.jsx'
import Menu from './components/Menu.jsx'



gsap.registerPlugin(ScrollTrigger, SplitText)


const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <Menu />
    </main>
  )
}

export default App