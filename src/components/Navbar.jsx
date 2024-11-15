import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    closed: { x: "-100%", opacity: 0, transition: { duration: 0.5 } },
  };

  // Hover effect variant
  const linkHover = {
    hover: {
      scale: 1.1,
      color: "#3B82F6", // Change this to any color you like for hover effect
      transition: { duration: 0.3 },
    },
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
        <div
          className="max-w-[1300px] mx-auto flex justify-between text-gray-200
        text-xl items-center px-5 h-20"
        >
          <a href="#">Lay longhav</a>

          <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
            <li>
              <motion.div whileHover="hover" variants={linkHover}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : ""
                  }
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Home
                </NavLink>
              </motion.div>
            </li>
            <li>
              <motion.div whileHover="hover" variants={linkHover}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : ""
                  }
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About
                </NavLink>
              </motion.div>
            </li>
            <li>
              <motion.div whileHover="hover" variants={linkHover}>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : ""
                  }
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Skills
                </NavLink>
              </motion.div>
            </li>
            <li>
              <motion.div whileHover="hover" variants={linkHover}>
                <NavLink
                  to="/project"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : ""
                  }
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Projects
                </NavLink>
              </motion.div>
            </li>
            <li>
              <motion.div whileHover="hover" variants={linkHover}>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : ""
                  }
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </NavLink>
              </motion.div>
            </li>
          </ul>

          <div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>

          <motion.div
            initial={false}
            animate={nav ? "open" : "closed"}
            variants={menuVariants}
            className=" fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40 md:hidden"
          >
            <ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
              <li>
                <motion.div whileHover="hover" variants={linkHover}>
                  <NavLink
                    to="/"
                    onClick={closeNav}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className={({ isActive }) =>
                      isActive ? "text-blue-500" : ""
                    }
                  >
                    Home
                  </NavLink>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover="hover" variants={linkHover}>
                  <NavLink
                    to="/about"
                    onClick={closeNav}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className={({ isActive }) =>
                      isActive ? "text-blue-500" : ""
                    }
                  >
                    About
                  </NavLink>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover="hover" variants={linkHover}>
                  <NavLink
                    to="/skills"
                    onClick={closeNav}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className={({ isActive }) =>
                      isActive ? "text-blue-500" : ""
                    }
                  >
                    Skills
                  </NavLink>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover="hover" variants={linkHover}>
                  <NavLink
                    to="/project"
                    onClick={closeNav}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className={({ isActive }) =>
                      isActive ? "text-blue-500" : ""
                    }
                  >
                    Projects
                  </NavLink>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover="hover" variants={linkHover}>
                  <NavLink
                    to="/contact"
                    onClick={closeNav}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className={({ isActive }) =>
                      isActive ? "text-blue-500" : ""
                    }
                  >
                    Contact
                  </NavLink>
                </motion.div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="min-h-[70vh]"><Outlet /></div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Navbar;
