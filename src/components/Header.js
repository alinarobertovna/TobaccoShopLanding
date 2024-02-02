import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import "./styles.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="header-wrapper">
      <nav className="main-container">
        <div className="logo-container">
          <div className="flex items-center">
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
            <a href="/link1" className="nav-link">
              Link 1
            </a>
            <a href="/link2" className="nav-link">
              Link 2
            </a>
            <a href="/link3" className="nav-link">
              Link 3
            </a>
            <a href="/link4" className="nav-link">
              Link 4
            </a>

            <a href="/cart" className="nav-link">
              <ShoppingCartIcon className="h-6 w-6" />
            </a>

            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="search-icon">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>

            <input
              type="text"
              placeholder="Search..."
              className={`search-input ${isSearchOpen ? 'search-input-open' : ''}`}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
