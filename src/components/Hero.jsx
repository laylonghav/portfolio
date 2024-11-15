import React from "react";
import profilepic from "../assets/longhav.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiJava,
  DiPhp,
} from "react-icons/di";
import { SiCsharp, SiGit, SiLaravel, SiVuedotjs } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const skills = [
    {
      icon: <DiHtml5 className="text-orange-600 text-6xl" />,
      name: "HTML5",
      level: 90,
    },
    {
      icon: <DiCss3 className="text-blue-600 text-6xl" />,
      name: "CSS3",
      level: 85,
    },
    {
      icon: <DiJavascript1 className="text-yellow-500 text-6xl" />,
      name: "JavaScript",
      level: 80,
    },
    {
      icon: <DiReact className="text-blue-500 text-6xl" />,
      name: "React",
      level: 75,
    },
    {
      icon: <DiNodejsSmall className="text-green-500 text-6xl" />,
      name: "Node.js",
      level: 70,
    },
    {
      icon: <SiCsharp className="text-purple-500 text-6xl" />,
      name: "C#",
      level: 75,
    },
    {
      icon: <DiJava className="text-red-500 text-6xl" />,
      name: "Java",
      level: 80,
    },
    {
      icon: <SiGit className="text-orange-500 text-6xl" />,
      name: "Git",
      level: 85,
    },
    {
      icon: <SiLaravel className="text-red-600 text-6xl" />,
      name: "Laravel",
      level: 70,
    },
    {
      icon: <DiPhp className="text-indigo-500 text-6xl" />,
      name: "PHP",
      level: 80,
    },
    {
      icon: <SiVuedotjs className="text-green-600 text-6xl" />,
      name: "Vue.js",
      level: 75,
    },
  ];

  return (
    <div className="mt-56  max-w-[1500px] mx-auto relative ">
      <div className="grid lg:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Fullstack Developer",
              1000,
              "Webdesigner",
              1000,
              "Consultant",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HELLO, I AM <br />
            <span className="text-blue-700">LAY LONGHAV</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate fullstack developer with over 5 years of
            experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col lg:flex-row items-start gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto items-start p-4 border
    border-blue-700 rounded-xl"
              onClick={() => {
                const link = document.createElement("a");
                link.href =
                  "https://drive.google.com/uc?export=download&id=1IDuB1yESbBk7m1YNnjKPq6NBpQ0eu6lb";
                link.download = "laylonghav_CV.pdf"; // Name for the downloaded file
                link.click();
              }}
            >
              Download CV
            </motion.button>

            <div className="grid grid-cols-6 gap-4 md:grid-cols-6 justify-center text-5xl sm:text-6xl md:text-6xl text-blue-700 z-20">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/laylonghav"
                target="_blank"
                className="transition-transform duration-200"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/feed/?trk=cold_join_sign_in"
                target="_blank"
                className="transition-transform duration-200"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/laylonghav"
                target="_blank"
                className="transition-transform duration-200"
              >
                <AiOutlineInstagram />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://t.me/laylonghav"
                target="_blank"
                className="transition-transform duration-200"
              >
                <FaTelegram />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://youtube.com/@laylonghav"
                target="_blank"
                className="transition-transform duration-200"
              >
                <FaYoutube />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/laylonghav"
                target="_blank"
                className="transition-transform duration-200"
              >
                <FaFacebookF />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilepic}
          className="w-[300px] md:w-[450px] m-5 outline outline-offset-4 outline-blue-600"
          style={{
            borderRadius: "500px",
            boxShadow: "0 0px 80px rgba(29,78,216, 0.7)", // Blue shadow// Green shadow (Tailwind green-500)
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full py-24 px-6"
      >
        <div className="text-center mb-8">
          <p className="text-gray-200 text-4xl font-bold">My Tech Stack</p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
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

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
