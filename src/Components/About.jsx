import React from "react";
import { FaPaintBrush, FaGamepad, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const cards = [
  {
    icon: <FaLaptopCode className="text-indigo-600 mx-auto mb-4 text-4xl" />,
    title: "Web Development",
    desc: "Creating interactive websites & responsive UI.",
  },
  {
    icon: <FaPaintBrush className="text-indigo-600 mx-auto mb-4 text-4xl" />,
    title: "Creativity",
    desc: "Designing UI with attention to aesthetics and detail.",
  },
  {
    icon: <FaGamepad className="text-indigo-600 mx-auto mb-4 text-4xl" />,
    title: "Hobbies",
    desc: "Painting, gaming, and exploring tech trends.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 bg-gradient-to-r from-purple-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            I am Mazaharul Islam Akash, a passionate Frontend Developer specializing in building interactive and visually stunning websites using React, Tailwind CSS, and modern web technologies. I love crafting user interfaces that are both functional and aesthetically pleasing.
          </motion.p>
          <motion.p
            className="text-gray-700 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I enjoy creating smooth animations, exploring new design trends, and experimenting with micro-interactions. I thrive in environments where creativity meets logic.
          </motion.p>
          <motion.p
            className="text-gray-700 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Outside of coding, I enjoy painting 🎨, playing video games 🎮, and exploring new technologies 💻. I always try to balance learning with fun, which keeps my work fresh and innovative.
          </motion.p>
        </motion.div>

        {/* Right: Cards */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
            >
              {card.icon}
              <h3 className="font-semibold text-gray-900">{card.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
