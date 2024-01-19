import React from 'react';
import "./styles.css"; 

const HeaderAbout = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src="./guy.jpg"
        alt="Background"
        className="w-full h-auto md:h-screen object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8">
        {/* Top Section: Logo and Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img
              src="./logo.png"
              alt="Logo"
              className="h-12 md:h-24 w-auto self-center ml-4 md:ml-10"  
          />

          {/* Navigation Links */}
          <nav className="self-center">
              <ul className="flex space-x-1 md:space-x-4 items-center"> 
                  <li><a href="#link1" className="text-white hover:text-gray-300">Link 1</a></li>
                  <li><a href="#link2" className="text-white hover:text-gray-300">Link 2</a></li>
                  <li><a href="#link3" className="text-white hover:text-gray-300">Link 3</a></li>
              </ul>
          </nav>
        </div>

        {/* Bottom Section: About Text */}
        <div className="absolute top-1/4 md:top-[40%] left-0 p-2 md:p-4 rounded w-3/4 md:w-1/2 max-w-xs md:max-w-md ml-4 md:ml-16">
          <h2 className="header-title text-base md:text-xl">HAVANA CLUB</h2>
          <p className="header-text text-sm md:text-base">
            Savor the Moment, Embrace the Tradition - Only at Havana's Legacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderAbout;
