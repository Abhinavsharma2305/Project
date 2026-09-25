import {motion} from "framer-motion";
import React from "react";
import p from "../assets/portfolio_image.png"
import { section } from "framer-motion/client";



export default function About(){
  const stats = [
    {label : "Experience" , value : "1+ years"},
    {label : "Speciality" , value : "Full Stack"},
    {label : "Focus" , value : "Performance & UX"},
  ]; 
  return(
    <section 
    id ="about"
    >

   
    <div className="bg-black w-full flex justify-center pt-22 pb-0">
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-9 px-6 py-12">
    <motion.div className = "relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2x bg-gradient-to-br from-[#1cd8d2] / 2 to-[#302b63] / 20 border-[#1cd8d2] / 25">
      <img
       src = {p} 
       alt="profile" 
       className="absolute inset-0 w-full h-full object-cover" />
    </motion.div>
    <div className="flex-1 flex flex-col justify-center text-center md:text-left">
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
        Abhinav Sharma
      </h2>

      <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
      Full Stack developer
      </p>
      <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
        I build scalable, morden application with a strong focus on clean architecture, delightful UX, and performance. My toolkit spans HTML,
        CSS, JAVASCRIPT , PHP , MYSQL , REACTJS , TAILWIND CSS - bringing ideas to life from concept to production with robust APIs and smooth interface,

      </p>
    <div className="mt-6 grid grid-col-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto md:mx-0">
      {stats.map((item , i) => (
        <motion.div key={i} className="rounded-xl border border-white/10 px-4 py-3 text-center"
        initial={{opacity:0 , y: 10}}
        whileInView={{opacity:1 , y:0}}
        transition={{delay:0.05 * i , duration:0.4}}
        viewport={{once:true , amout:0.3}}>
          <div className="text-sm text-gray-400">{item.label}</div>
          <div className="text-base font-semibold">{item.value}</div>
          </motion.div>
      ))}
    </div>
    <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
      <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-50 transition">View Projects</a>
      <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white/20 px-5 py-3 hover:bg-white/20 transition">Get in touch</a>
    </div>

    <p className="mt-10 max-w-3xl text-gray-300 text-base sm:text-lg leading-relaxed text-center md:text-left">
      I am passionate about building modern web application, learning new
      technologies, and continously improving my skills through real-world
      projects.
    </p>
    </div>
    </div>
   
    </div>

    <div>
      
    </div>
     </section>
    
   
    

  )
}