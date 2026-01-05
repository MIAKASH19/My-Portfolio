import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close mobile menu after click
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900">
          MI Akash<span className="text-indigo-600">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer hover:text-indigo-600 transition-colors"
              onClick={() => handleScroll(link.id)}
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 flex flex-col items-center gap-6 py-6 text-gray-700 font-medium shadow-lg">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer hover:text-indigo-600 transition-colors text-lg"
              onClick={() => handleScroll(link.id)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
