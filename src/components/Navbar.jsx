import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
    name:"Home",
    slug:"/"
    }, 
   
  ];

  const mobileLinks = [...navLinks];

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 left-0  pr-10 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}

        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          MegaMart
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.slug}
              className="text-white font-medium hover:text-gray-400 transition duration-300 relative group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-100 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <div
        className={`md:hidden bg-white border-t shadow-lg absolute w-full left-0 transition-all duration-300 ease-in-out ${
          isOpen ? "top-16 opacity-100" : "-top-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {mobileLinks.map((item, index) => (
            <Link
              key={index}
              to={item.slug}
              className="text-gray-700 font-medium hover:text-blue-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
