import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/Subtract.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <nav
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center py-4 md:py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Mumair Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-gray-900">Mumair</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8" role="list">
              {navLinks.map((link) => (
                <li key={link.name} role="listitem">
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              download
              className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown - This closes the nav properly */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <ul className="space-y-1" role="list">
                {navLinks.map((link) => (
                  <li key={link.name} role="listitem">
                    <a
                      href={link.href}
                      className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-base font-medium rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/cv.pdf"
                download
                className="block w-full text-left px-3 py-2 text-white bg-orange-500 hover:bg-orange-600 text-base font-medium rounded-md mt-2"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
