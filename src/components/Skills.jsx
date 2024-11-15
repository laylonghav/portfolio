import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiJava,
} from "react-icons/di";
import {
  SiLaravel,
  SiCsharp,
  SiTailwindcss,
  SiMysql,
  SiPhp,
  SiFlutter,
  SiKotlin,
  SiPython,
  SiCplusplus,
} from "react-icons/si";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Reveal from "./Reveal";

import { FaMicrosoft, FaCamera } from "react-icons/fa"; // Microsoft and Camera icons
import {
  SiMicrosoftword,
  SiMicrosoftpowerpoint,
  SiMicrosoftexcel,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaudition,
} from "react-icons/si"; 
import { IoRefreshCircleOutline } from "react-icons/io5";
import { FaCog, FaUsers, FaRegClock, FaCrown, FaComments, FaBrain } from "react-icons/fa"; 
const otherSkills = [
  {
    name: "Problem Solving",
    level: 100,
    icon: <FaCog className="text-blue-600" />, // Gear icon for Problem Solving
  },
  {
    name: "Teamwork",
    level: 100,
    icon: <FaUsers className="text-green-600" />, // Group icon for Teamwork
  },
  {
    name: "Time Management",
    level: 100,
    icon: <FaRegClock className="text-orange-600" />, // Clock icon for Time Management
  },
  {
    name: "Leadership",
    level: 100,
    icon: <FaCrown className="text-red-600" />, // Crown icon for Leadership
  },
  {
    name: "Communication",
    level: 100,
    icon: <FaComments className="text-yellow-600" />, // Speech Bubble icon for Communication
  },
  {
    name: "Critical Thinking",
    level: 100,
    icon: <FaBrain className="text-purple-600" />, // Brain icon for Critical Thinking
  },
  {
    name: "Adaptive Skills",
    level: 100,
    icon: <IoRefreshCircleOutline className="text-teal-600" />, // Refresh icon for Adaptive Skills
  },
  {
    name: "MS Word",
    level: 95,
    icon: <SiMicrosoftword className="text-blue-500" />, // Microsoft Word icon
  },
  {
    name: "PowerPoint",
    level: 90,
    icon: <SiMicrosoftpowerpoint className="text-purple-500" />, // Microsoft PowerPoint icon
  },
  {
    name: "Excel",
    level: 85,
    icon: <SiMicrosoftexcel className="text-green-500" />, // Microsoft Excel icon
  },
  {
    name: "Photography",
    level: 70,
    icon: <FaCamera className="text-pink-500" />, // Photography icon
  },
  {
    name: "Adobe Photoshop",
    level: 80,
    icon: <SiAdobephotoshop className="text-blue-700" />, // Adobe Photoshop icon
  },
  {
    name: "Adobe Illustrator",
    level: 75,
    icon: <SiAdobeillustrator className="text-red-600" />, // Adobe Illustrator icon
  },
  {
    name: "Adobe Premiere",
    level: 70,
    icon: <SiAdobeaudition className="text-yellow-600" />, // Adobe Premiere icon (use Adobe Audition icon as placeholder)
  },
];


const skills = [
  {
    category: "Frontend",
    technologies: [
      {
        name: "HTML",
        icon: <DiHtml5 className="text-orange-600" />,
        progress: 90,
      },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" />, progress: 85 },
      {
        name: "Bootstrap",
        icon: <DiBootstrap className="text-purple-600" />,
        progress: 75,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-500" />,
        progress: 85,
      },
      {
        name: "React",
        icon: <DiReact className="text-blue-500" />,
        progress: 90,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-blue-400" />,
        progress: 70,
      },
      {
        name: "React Native",
        icon: <DiReact className="text-blue-500" />, // Same icon for React Native as React
        progress: 65,
      },
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      {
        name: "Node Js",
        icon: <DiNodejsSmall className="text-green-500" />,
        progress: 80,
      },
      {
        name: "React",
        icon: <DiReact className="text-blue-500" />,
        progress: 90,
      },
      {
        name: "GitHub",
        icon: <DiGithubBadge className="text-gray-600" />,
        progress: 85,
      },
      {
        name: "Laravel",
        icon: <SiLaravel className="text-red-500" />,
        progress: 60,
      },
      {
        name: "C#",
        icon: <SiCsharp className="text-purple-600" />,
        progress: 70,
      },
      {
        name: "Java",
        icon: <DiJava className="text-orange-500" />,
        progress: 75,
      },
      {
        name: "SQL",
        icon: <SiMysql className="text-blue-600" />, // MySQL icon
        progress: 80,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-blue-600" />,
        progress: 75,
      },
      {
        name: "PHP",
        icon: <SiPhp className="text-blue-600" />,
        progress: 70,
      },
      {
        name: "Flutter",
        icon: <SiFlutter className="text-indigo-500" />,
        progress: 60,
      },
      {
        name: "Kotlin",
        icon: <SiKotlin className="text-purple-600" />,
        progress: 65,
      },
      {
        name: "Python",
        icon: <SiPython className="text-yellow-500" />,
        progress: 80,
      },
      {
        name: "C",
        icon: <SiCplusplus className="text-gray-600" />,
        progress: 70,
      },
      {
        name: "C++",
        icon: <SiCplusplus className="text-gray-600" />,
        progress: 75,
      },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[1250px] mt-24 mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
          I worked on various frontend and fullstack projects. Check them{" "}
          <a href="#" className="underline">
            here
          </a>
          .
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-blue-600 p-6 rounded-lg bg-gray-900 shadow-lg w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 my-6 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center space-y-2"
                  >
                    {/* Language Icon Animation */}
                    <div className="icon-container animate-pulse">
                      <span className="text-4xl">{tech.icon}</span>
                    </div>
                    <span className="text-xl mt-2 font-bold">{tech.name}</span>
                    {/* Language Name Below the Icon */}
                    <span className="text-xl text-gray-500">
                      {tech.progress}%
                    </span>
                    {/* Progress Bar with Motion Animation */}
                    <div className="relative w-full mt-2">
                      <div className="progress-background w-full h-2 rounded-full bg-gray-300">
                        <motion.div
                          className="bg-green-500 progress-bar h-2 rounded-full"
                          initial={{ width: 0 }} // Start from 0 width
                          animate={{ width: `${tech.progress}%` }} // Animate to the progress width
                          transition={{ duration: 1.5, ease: "easeOut" }} // Set animation duration and easing
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full py-24 px-6"
      >
        <div className="text-center mt-16 mb-8">
          <p className="text-gray-200 text-4xl font-bold">Other Skills</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-gray-900 rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <div className="text-6xl">{skill.icon}</div>
              <h3 className="text-gray-200 text-2xl font-semibold mt-4">
                {skill.name}
              </h3>
              <p className="text-gray-400 text-lg mt-2">
                {skill.level}% Proficiency
              </p>
              <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
                <motion.div
                  className="bg-green-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 * index }}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
