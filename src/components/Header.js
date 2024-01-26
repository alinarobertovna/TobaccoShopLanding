import React, { useState } from 'react';
import "./styles.css";

const HeaderAbout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src="./guy2.jpg"
        alt="Background"
        className="w-full h-auto md:h-screen object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8">
        {/* Top Section: Logo and Navigation */}
        <div className="flex justify-between items-start">
          {/* Logo */}
          <img
            src="./logo (2).png"
            alt="Logo"
            className="h-12 md:h-24 lg:h-48 w-auto self-start ml-4 md:ml-10"
          />

          {/* Burger Menu Icon */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav className={`absolute md:relative top-16 right-0 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center bg-black md:bg-transparent p-4 md:p-0">
              <li><a href="#link1" className="text-white hover:text-gray-300">Link 1</a></li>
              <li><a href="#link2" className="text-white hover:text-gray-300">Link 2</a></li>
              <li><a href="#link3" className="text-white hover:text-gray-300">Link 3</a></li>
            </ul>
          </nav>
        </div>

        {/* Bottom Section: About Text and Buttons */}
        <div className="absolute top-1/3 md:top-[40%] left-0 p-2 md:p-4 rounded w-full md:w-3/4 lg:w-1/2 max-w-xs md:max-w-md ml-4 md:ml-16">
          <h2 className="header-title">HAVANA CLUB</h2>
          <p className="header-text">
            Savor the Moment, Embrace the Tradition
          </p>
          {/* Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-start">
            <button className="bg-white text-black border border-black hover:bg-black hover:text-white px-4 py-2 rounded-full transition duration-300">
              Visit our shop
            </button>
            <button className="bg-white text-black border border-black hover:bg-black hover:text-white px-4 py-2 rounded-full transition duration-300">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAbout;
