import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {FaGithub, FaLinkedin } from "react-icons/fa6";
import avator from "../assets/avator.png"
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const roles = [
  "Web Developer",
  "Frontend Developer",
  "React Developer"
];

// const glowVariants ={
//   initial : {scale : 1 , y :0 , filter : "drop-shadow(0 0 0 rgba(0,0,0,0))"},
//   hover :{
//     scale:1.2 , y:-3,
//     filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18 rgba(16,185,129,0.8))",
//     transition:{type :"spring" , stiffness : 300 , damping : 0.08}}
  
// }


const socials = [
  // {Icon : FaXTwitter , label: "X" , href : "#"},
  {Icon : FaLinkedin , label : "Linkedin" , href : "https://linkedin.com/in/abhinav-sharma-aaba21340"},
  {Icon : FaGithub , label : "GitHub" , href : "https://github.com/Abhinavsharma2305"},

]
export default function Home() {
  const [index, setIndex] = useState(0);
  const [subindex, setSubindex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subindex < current.length) {
        setSubindex(v => v + 1);
      }

      else if (!deleting && subindex === current.length) {
        setTimeout(() => setDeleting(true), 1200);
      }

      else if (deleting && subindex > 0) {
        setSubindex(v => v - 1);
      }

      else if (deleting && subindex === 0) {
        setDeleting(false);
        setIndex(p => (p + 1) % roles.length);
      }

    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);

  }, [subindex, index, deleting]);


  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden  bg-[url('/src/assets/avator.png')] bg-cover bg-center bg-no-repeat"
    >

      {/* Background */}
      <div className="absolute inset-0">

        {/* <div
          className="
            absolute -top-32 -left-32
            w-[70vw] sm:w-[50vw] md:w-[40vw]
            h-[70vw] sm:h-[50vw] md:h-[40vw]
            max-w-[500px] max-h-[500px]
            rounded-full
            bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-30 sm:opacity-20 md:opacity-10
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse
          "
        /> */}

        {/* <div
          className="
            absolute -bottom-32 -right-32
            w-[70vw] sm:w-[50vw] md:w-[40vw]
            h-[70vw] sm:h-[50vw] md:h-[40vw]
            max-w-[500px] max-h-[500px]
            rounded-full
            bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-30 sm:opacity-20 md:opacity-10
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse
          "
        /> */}

      </div>


      {/* Main Content */}
      <div
        className="
          relative z-10 h-full w-full max-w-7xl
          mx-auto
          grid grid-cols-1 lg:grid-cols-2
        "
      >

        <div
          className="
            flex flex-col justify-center
            h-full text-center lg:text-left
            relative
          "
        >

          <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">

           <div className="h-[48px] w-full flex items-center justify-center lg:justify-start">
  <h1 className="text-white text-4xl font-bold whitespace-nowrap">
    {roles[index].substring(0, subindex)}
  </h1>
</div>
            <br />       
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text
             bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
             initial={{opacity:0 , y:40}}
             animate={{opacity:1 , y:0}}
             transition = {{duration : 1}}
             >
              Hello I'm
              <br></br>
               <span className="text-white font-medium sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
              Abhinav Sharma
            </span>
            </motion.h1>
           <motion.p className="mt-6 text-base sm-:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
           initial={{opacity:0 , y:20}}
           animate={{opacity:1 , y:0}}
           transition={{delay:0.4 , duration:0.8}}>
      I turn complex ideas into seamless , high-impact web experiences - building morden , scalable , and lightning-fast applications that make a difference 
           </motion.p>

          <motion.div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
          opacity={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.4 , duration:0.8}}>

            <a href="#projects"  
            className ="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f]  to-[#302b63] shadow-lg hover:scale-105 transition-all text-white px-6 py-3 rounded-full font-medium text-lg shadow-lg hover:opacity-90 ">View My Work</a>
            <a href="/public/abhinav sharma resume.pdf" 
            target="_blank"
            className ="bg-gradient-to-r bg-white shadow-lg hover:scale-105 transition-all text-black px-6 py-3 rounded-full font-medium text-lg shadow-lg hover:opacity-90 ">My Resume</a>


          </motion.div>
          <div className=" mt-10 flex flex-gap -10 text-2xl lg:justify-start md:text-3xl justify-center">
            {socials.map(({Icon , label , href})=>
            <motion.a
             key={label}
              href={href}             
              target="_blank"
              aria-label={label}
              rel="noopener noreferrer"
              // variants = {glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="text-gray-300 m-2">
                <Icon />
            </motion.a>)}

            <motion.a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abhinavsharam9672@gmail.com"
              target = "_blank"
              rel = "noopener noreferrer"
              initial = "initial"
              whileHover="hover"
              // WhileTap = "tap"
              className="text-gray-300 transition-colours duration-200 inline-flex ml-2 items-center justify-center"
              >
              <MdOutlineMarkEmailUnread />
                
              
              </motion.a>
          </div>
</div>
</div>
        <div className="relative hidden lg:block">

  {/* <div
    className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
    style={{
      right: "10px",
      width: "min(22vw, 410px)",
      height: "min(40vw, 760px)",
      borderRadius: "50%",
      filter: "blur(38px)",
      opacity: 0.32,
      background:
        "conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)",
    }}
  /> */}

  <motion.img
    // src={avator}
    // alt="Abhinav Sharma"
    className="
      absolute top-1/2 -translate-y-1/2
      object-contain
      select-none
      pointer-events-none
    "
    style={{
      right: "-200px",
      width: "min(40vw, 650px)",
      maxHeight: "85vh",
    }}
    initial={{ opacity: 0, y: 40, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
  />

</div>
</div>
</section>
    

    //avatar ki jagha lap laga kar yellow light ko font ki taraf point karo
    
  );
}

