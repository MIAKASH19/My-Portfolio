import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden mt-16 md:mt-0"
    >
      {/* Floating Background Circles */}
      <motion.div
        className="absolute top-10 -left-20 w-60 h-60 rounded-full bg-indigo-300 opacity-20 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "loop" }}
      />
      <motion.div
        className="absolute bottom-20 -right-10 w-72 h-72 rounded-full bg-purple-300 opacity-20 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
      />

      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left: Text & Buttons */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Mazaharul Islam Akash
            </span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Frontend Developer | I create visually stunning, interactive websites
            using <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">Tailwind CSS</span>, and modern web
            technologies.
          </p>

          {/* Resume & Socials */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg hover:scale-105 transform transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 mt-2 sm:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 text-2xl transition-transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-700 text-2xl transition-transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 text-2xl transition-transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-800 text-2xl transition-transform hover:scale-110"
              >
                <FaFacebook />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          className="md:w-1/2 flex justify-center items-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-200"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://i.ibb.co/3y6KqbBh/MI-Pro.jpg"
              alt="Mazaharul Islam Akash"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating Gradient Circle */}
          <motion.div
            className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-30"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
