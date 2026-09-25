import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    type: "Frontend Project",
    duration: "Personal Project",
    description:
      "A modern responsive developer portfolio website built to showcase my skills, projects, experience and professional profile.",
    technology: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
  
  },

  {
    title: "Retail Store Footfall & Sales Analysis",
    type: "Data Engineering Project",
    duration: "45 Days",
    description:
      "A cloud-based data engineering project analyzing the relationship between customer footfall and retail sales using Azure Data Factory, Databricks, ADLS Gen2 and Apache Spark.",
    technology: [
      "Azure",
      "ADF",
      "Databricks",
      "ADLS Gen2",
      "PySpark",
      "Power BI",
    ],

  },

  {
    title: "College ERP System",
    type: "Web Application",
    duration: "Personal Project",
    description:
      "A role-based college ERP system for managing students, teachers, subjects, timetable, attendance and marks with separate dashboards.",
    technology: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
 
  },

  // {
  //   title: "BeatSpire",
  //   type: "Full Stack Project",
  //   duration: "15 Days",
  //   description:
  //     "A mood-based music website that allows users to discover music according to their mood, with user authentication and email OTP verification.",
  //   technology: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "PHP",
  //     "MySQL",
  //     "Bootstrap",
  //   ],
  //   github: "#",
  //   live: "#",
  // },
];

export default function Projects()  {
return(
  <section
  id = "projects"
  className="w-full bg-black px-6 py-24 text-white md:px-12 lg:px-20"
  >
    <div className="mb-16 text-center">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
    My Work
    </p>

    <h2 className="text-4xl font-bold md:text-5xl">
    Projects
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 md:text-base">
    Projects I have built while exploring software developer,
    web technologies and data engineering
    </p>
    </div>

    <div className="relative mx-auto max-w-5xl">
    <div className="absolute left-4 top-0 h-full w-px bg-gray-700 md:left-6" />
    <div className="space-y-10">
    {projects.map((project , index)=>(
        <div
        key = {index}
        className="relative pl-10 md:pl-16"
        >
          <div className="absolute left-[9px] top-7 z-10 h-3 w-3 rounded-full border-2 border-cyan-400 bg-black shadow-[0_0_12px_rgba(34,211,238,0.8) md:left-[21px]" />

          <div  className="rounded-xl border border-grya-800 bg-[#0c111d] p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.06)] md:p-7">
          <div className="mb-4 flex flex-wrap iteams-center gap-3">
            <span className="rounded-md bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">

{project.duration}
            </span>
            <span className="text-xs text-gray-500">
            Project {String(index + 1).padStart(2,"0")}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white">
        {project.title}
          </h3>

          <p className="mt-2 text-sm font-semibold text-cyan-300">
        {project.type}
          </p>

          <p className="mt-5 max-w-4xl text-sm leading-7 text-gray-400">
          {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
        {project.technology.map((tech , techIndex) =>(
          <span 
          key = {techIndex}
          className="rounded-md bg-{#0151d2d] px-3 py-1.5 text-xs font-medium text-gray-300"
          >
              {tech}
          </span>
        ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
      {/* <a 
      href={project.github}
      target="_blank"
      rel = "nonreferrer"
      className="rounded-lg border border-gray-700 px-5 py-2 text-sm text-sm fomt-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
      >
        GitHub
      </a>
      <a 
      href={project.live}
      target="_blank"
      rel = "nonreferrer"
      className="rounded-lg bg-cyan-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300"
      >
        Live Demo
      </a> */}
          </div>
          </div>

        </div>
    ))}
    </div>
   
    </div>

  </section>
)
} 