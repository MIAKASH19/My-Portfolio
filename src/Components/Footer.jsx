import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">Mazaharul Islam Akash</h1>
          <p className="text-gray-200 mt-1">Frontend Developer | Web Enthusiast</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <a href="#home" className="hover:text-gray-200 transition">
            Home
          </a>
          <a href="#about" className="hover:text-gray-200 transition">
            About
          </a>
          <a href="#skills" className="hover:text-gray-200 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-200 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-200 transition">
            Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/MIAKASH19"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mi-akash/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.facebook.com/mazaharul.islam.98434"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-white/30 pt-6 text-center text-gray-200 text-sm">
        &copy; {new Date().getFullYear()} Mazaharul Islam Akash. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;