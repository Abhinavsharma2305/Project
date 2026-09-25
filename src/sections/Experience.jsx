import { useState } from "react"; 
const experiences = [ 
    { company: "Kish Technologies Software Pvt. Ltd.", 
        role: "Web Development Intern", 
        duration: "15 Days", 
        location: "Jaipur, Rajasthan",
         description: "Worked on web development projects using PHP, MySQL, HTML, CSS, JavaScript and Bootstrap.",
          technologies: [ "PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap", ], 
  },
  { company: "Coplur Technologies Pvt. Ltd.",
     role: "Data Engineering Intern", 
     duration: "45 Days",
      location: "Jaipur, Rajasthan",
       description: "Worked on data engineering workflows using Microsoft Azure, Azure Data Factory, Azure Databricks, ADLS Gen2 and Apache Spark.",
        technologies: [ "Azure", "Data Factory", "Databricks", "PySpark", "ADLS Gen2", ],
  }, 

  // { company: "Company Name", 
  //           role: "Frontend Developer",
  //            duration: "2 Months",
  //             location: "Remote", 
  //             description: "Developed responsive and reusable user interfaces using React, JavaScript and Tailwind CSS.", 
  //             technologies: [ "React", "JavaScript", "Tailwind CSS", "HTML", "CSS", ], 
  // },
  // { company: "Company Name",
  //                role: "Software Developer Intern",
  //                 duration: "3 Months",
  //                  location: "Remote",
  //                  description: "Worked on developing web applications and implementing frontend and backend functionality.", 
  //                  technologies: [ "React", "Node.js", "Express", "MongoDB", ],
  //  }, 
                  ];

export default function Experience() {
  const [current, setcurrent] = useState(0)

  const nextExperience = () => {
    setcurrent((prev) => (prev + 1) % experiences.length);

  };
  const previousexperience = () => {
    setcurrent((prev) => (prev -1 +experiences.length) % experiences.length);
  };
  const experience = experiences[current];

  return (
    <section 
    id = "experience"
    className="min-h-screen bg-black text-white px-6 py-20"
    >

      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-gray-400 text-sm uppercase tracking-[4px]">
        My Journey
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-3">
        Experience
        </h2>

        <div className="w-20 h-1 bg-white mx-auto mt-5 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="border border-gray-700 rounded-2xl p-8 md:p-12 bg-zinc-950 shadow-2xl">

          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5">
            <div>
              <p className="text-gray-400 text-sm mb-2">
                  {experience.duration}
              </p>

              <h3 className="text-2xl md:text-3xl font-bold">
                {experience.role}
              </h3>

              <h4 className="text-lg text-gray-300 mt-2">
                {experience.company}

              </h4>
            </div>

            <div className="text-gray-400 text-sm">
            📍 {experience.location}
            </div>

          </div>

          <div className="border-t border-gray-800 my-8">
            <h5 className="text-lg font-semibold mb-3">
            About the role
            </h5>

            <p className="text-gray-400 leading-7">
              {experience.description}
            </p>
          </div>

          <div className="mt-8">
          <h5 className="text-lg font-semibold mb-4">
          Technologies
          </h5>

          <div className="flex flex-wrap gap-3">
          {experience.technologies.map((tech , index) =>(
            <span 
            key = {index}
            className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-300 hover:border-b-white hover:text-white transition
            ">
              {tech}
            </span>
          ))}
          </div>
          </div>

          <div className="text-center mt-10 text-gray-500"> 
          {current + 1} / {experience.length}
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-8">
          <button onClick={previousexperience}
          className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            ← Previous
          </button>

          <button onClick={nextExperience}
          className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Next →
         </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {experiences.map((_, index)=>(
            <button 
            key = {index}
            onClick={()=> setcurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
              ? "w-8 bg-white"
              : "w-2 bg-gray-600"
            }`}>

            </button>
          ))}
        </div>

      </div>

    </section>
  );
}