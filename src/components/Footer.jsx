import React from "react";
import {
  FaGithubSquare,
  FaInstagram,
  FaTelegram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center text-left p-3 md:p-6 text-sm md:text-lg mt-6 space-y-4 md:space-y-0">
      {/* Left Column */}
      <div className="space-y-4 text-center md:text-left">
        <h3 className="text-2xl text-gray-200 font-semibold">LAY LONGHAV</h3>
        <div className="flex flex-row justify-center md:justify-start gap-6 text-gray-400 text-4xl">
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
      </div>

      {/* Right Column */}
      <p className="text-gray-400 text-center md:text-right">
        ©2024 LAY LONGHAV
      </p>
    </div>
  );
};

export default Footer;
