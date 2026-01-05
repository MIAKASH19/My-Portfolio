import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 bg-gradient-to-r from-purple-50 to-indigo-50"
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
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-5xl font-semibold text-indigo-600 mb-4">
              Get in Touch
            </h3>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-indigo-600 text-xl" />
              <span className="text-gray-700 text-lg">mszharul1990@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-indigo-600 text-xl" />
              <span className="text-gray-700 text-lg">+8801830144301</span>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-600 text-xl" />
              <span className="text-gray-700 text-lg">+8801830144301 </span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => e.preventDefault()} // Placeholder, handle your submit
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="mt-2 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
