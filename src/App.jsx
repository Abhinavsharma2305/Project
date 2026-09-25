import NavBar from "./Components/NavBar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import {Skills}  from "./sections/Skills";
import Home from "./sections/Home";
import Footer from "./sections/Footer";
import  About  from "./sections/About";

export default function App(){
  return (
    
    <div className="relative gradient font-bold text-white">

    {/* <ParticlesBackground /> */}
    <NavBar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    <Footer />




    </div>
   
  )
}