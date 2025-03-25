import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react"; // Icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold">About Us</h2>
          <p className="mt-2 text-gray-400">
            Your go-to online store for quality products at unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gray-400"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gray-400"><Twitter size={20} /></a>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Newsletter</h2>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="mt-2 p-2 w-full bg-gray-800 text-white border border-gray-700 rounded"
            />
            <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} MegaMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
