import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const skills = {
  Frontend: [
    { name: "HTML", level: 95, icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS", level: 90, icon: <SiCss3 className="text-blue-600" /> },
    { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "JavaScript", level: 85, icon: <SiJavascript className="text-yellow-500" /> },
    { name: "React", level: 85, icon: <SiReact className="text-sky-500" /> },
  ],
  Backend: [
    { name: "Node.js", level: 70, icon: <SiNodedotjs className="text-green-600" /> },
    { name: "Express", level: 70, icon: <SiExpress className="text-gray-700" /> },
    { name: "MongoDB", level: 65, icon: <SiMongodb className="text-green-700" /> },
  ],
  Tools: [
    { name: "Git", level: 90, icon: <SiGit className="text-orange-600" /> },
    { name: "GitHub", level: 90, icon: <SiGithub className="text-gray-900" /> },
    { name: "VS Code", level: 95, icon: <DiVisualstudio className="text-blue-600" /> },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-20 bg-gradient-to-r from-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {Object.keys(skills).map((category, index) => (
            <motion.div
              key={category}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-indigo-600">{category}</h3>
              <div className="flex flex-col gap-4 mt-4">
                {skills[category].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700 text-lg">{skill.icon}</span>
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-3 rounded-full">
                      <motion.div
                        className="bg-indigo-600 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
