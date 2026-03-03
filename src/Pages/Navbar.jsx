import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg fixed w-full z-10 border-b border-gray-800">
      <div className="max-w-[1508px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Height increased (h-20) */}
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-bold text-yellow-400 hover:text-yellow-300 transition duration-150">
              Asian
            </a>
          </div>

          {/* Desktop Menu */}
  <div className="hidden md:block">
  <div className="ml-10 flex items-center space-x-8">

    {/* Menu Links */}
    <div className="flex items-center space-x-8 pr-6 border-r border-gray-700">

      <Link 
        to="/" 
        className="text-gray-300 hover:text-yellow-400 text-base font-medium transition-all duration-300"
      >
        Home
      </Link>

      <Link 
        to="/about" 
        className="text-gray-300 hover:text-yellow-400 text-base font-medium transition-all duration-300"
      >
        About
      </Link>

      <Link 
        to="/services" 
        className="text-gray-300 hover:text-yellow-400 text-base font-medium transition-all duration-300"
      >
        Services
      </Link>

      <Link 
        to="/projects" 
        className="text-gray-300 hover:text-yellow-400 text-base font-medium transition-all duration-300"
      >
        Projects
      </Link>

      <Link 
        to="/blog" 
        className="text-gray-300 hover:text-yellow-400 text-base font-medium transition-all duration-300"
      >
        Blog
      </Link>

    </div>

    {/* Hotline Section */}
  <Link 
  href="tel:+8801788360303"
  className="flex items-center space-x-2 text-sm font-semibold 
             text-yellow-400 hover:text-yellow-300 
             hover:scale-105 transition-all duration-300"
>
  <FiPhoneCall className="text-xl" />
  <span>+8801788-360303</span>
</Link>

    {/* Contact Button */}
    <Link
      to="/contact"
      className="bg-yellow-500 text-black px-6 py-2 rounded-full text-base font-semibold 
                 hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-0.5 
                 transition-all duration-300"
    >
      Contact
    </Link>

  </div>
</div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-7 w-7`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-7 w-7`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black border-t border-gray-800`}>
        <div className="px-4 pt-4 pb-6 space-y-3">

          <Link href="/" className="block text-gray-300 hover:text-red-400 text-lg font-medium">
            Home
          </Link>

          <Link href="/about" className="block text-gray-300 hover:text-green-400 text-lg font-medium">
            About
          </Link>

          <Link href="/services" className="block text-gray-300 hover:text-blue-400 text-lg font-medium">
            Services
          </Link>

          {/* Contact Button Mobile */}
          <Link
            href="/contact"
            className="block bg-yellow-500 text-black text-center py-3 rounded-md font-semibold hover:bg-yellow-400 transition duration-150"
          >
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;