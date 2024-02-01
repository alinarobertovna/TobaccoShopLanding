import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import "./styles.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 md:px-12 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <img src="./logo.png" alt="Logo" className="h-24" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`md:flex items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
            <a href="/link1" className="text-gray-800 hover:text-gray-600 px-4 py-2 block md:inline-block">
              Link 1
            </a>
            <a href="/link2" className="text-gray-800 hover:text-gray-600 px-4 py-2 block md:inline-block">
              Link 2
            </a>
            <a href="/link3" className="text-gray-800 hover:text-gray-600 px-4 py-2 block md:inline-block">
              Link 3
            </a>
            <a href="/link4" className="text-gray-800 hover:text-gray-600 px-4 py-2 block md:inline-block">
              Link 4
            </a>

            {/* Shopping Cart */}
            <a href="/cart" className="text-gray-800 hover:text-gray-600 px-4 py-2 block md:inline-block">
              <ShoppingCartIcon className="h-6 w-6" />
            </a>

            {/* Search Icon */}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-gray-800 hover:text-gray-600 px-4 py-2">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search..."
              className={`ml-4 px-4 py-2 border rounded-md search-input ${isSearchOpen ? 'search-input-open' : ''}`}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
