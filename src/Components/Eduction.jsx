import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "National University",
    year: "2023 - Current",
    details: "Focused on Web Development, Data Structures, and Software Engineering.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Gazipur Cantonment College",
    year: "2020 - 2022",
    details: "Completed Science major with focus on Mathematics and Physics.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Dhaka High School",
    year: "2017 - 2019",
    details: "Completed Secondary School with excellent grades in Science stream.",
  },
];

const Education = () => {
  return (
    <section id="education" className="w-full py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-3 hover:scale-105 transition-transform cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-indigo-600">{edu.degree}</h3>
              <p className="text-gray-700 font-medium">{edu.institution}</p>
              <p className="text-gray-500 italic">{edu.year}</p>
              <p className="text-gray-600 text-sm mt-2">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
