import gsap from "gsap"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { SplitText } from "gsap/SplitText"
import Change from "./components/Change"
import Footer from "./components/Footer"

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
<div className="app">
  <div className="hero">

  <Navbar/>
  <Hero/>
  <Change/>
<Footer/>

  </div>
  </div>

  )
}

export default App