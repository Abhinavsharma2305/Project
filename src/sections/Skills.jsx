import React from "react";
import * as MarqueeModule from "react-fast-marquee";
import { VscAzure } from "react-icons/vsc";
import { DiCss3 } from "react-icons/di";

import {
  SiC,
  SiCplusplus,
  SiPython,
  SiMysql,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiBootstrap,
  SiPhp,
  SiDatabricks,
  SiApachespark,
  SiDocker,
  SiGit,
  SiGithub,
} from "react-icons/si";

const Marquee =
  MarqueeModule.default?.default ??
  MarqueeModule.default ??
  MarqueeModule;

const skills = [
  { name: "C", icon: <SiC /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Python", icon: <SiPython /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <DiCss3 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "React", icon: <SiReact /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Microsoft Azure", icon: <VscAzure /> },

  { name: "Azure Databricks", icon: <SiDatabricks /> },
  { name: "Apache Spark", icon: <SiApachespark /> },
   {
    name: "Power BI",
    icon: <span className="text-3xl font-bold">BI</span>,
  },
    {
    name: "Azure Data Factory",
    icon: <span className="text-3xl font-bold">ADF</span>,
  },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
];

export function Skills() {
  return (
    <section
    id = "skills"
     className="w-full overflow-hidden bg-black pt-30 pb-20">
      
      <h1 className="text-center text-4xl font-bold text-white">
        My Skills
      </h1>

      <p className="mt-2 mb-8 text-center text-sm font-medium text-white">
        Modern Application | Modern Technologies
      </p>

      <Marquee
        speed={90}
        direction="left"
        pauseOnHover={true}
        autoFill={true}
        gradient={false}
        className="py-4"
      >
        <div className="flex items-center gap-16 px-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex w-[100px] shrink-0 flex-col items-center justify-center text-cyan-400"
            >
              <div className="mb-2 text-5xl">
                {skill.icon}
              </div>

              <span className="whitespace-nowrap text-sm font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </Marquee>

    </section>
  );
}