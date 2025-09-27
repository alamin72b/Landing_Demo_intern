import React from 'react';

const Footer = ({
  socialLinks = [
    {
      icon: `${import.meta.env.BASE_URL}icons/Vector.png`,
      href: "https://facebook.com/yourhandle",
      label: "Facebook",
    },
    {
      icon: `${import.meta.env.BASE_URL}icons/Vector(1).png`,
      href: "https://twitter.com/yourhandle",
      label: "Twitter",
    },
    {
      icon: `${import.meta.env.BASE_URL}icons/Vector(2).png`,
      href: "https://instagram.com/yourhandle",
      label: "Instagram",
    },
    {
      icon: `${import.meta.env.BASE_URL}icons/Vector(3).png`,
      href: "https://linkedin.com/in/yourhandle",
      label: "LinkedIn",
    },
  ],
}) => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 inline-flex items-center">
            <span className="w-8 h-8 bg-orange-500 rounded-full mr-2 flex items-center justify-center text-white font-script">mu</span>
            MuUmair
          </h1>
        </div>
        {/* Navigation */}
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-gray-700">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-orange-500 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Social Links */}
        <div className="mb-8 flex justify-center space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center text-gray-800 hover:text-orange-500 transition-colors duration-200"
              aria-label={`Follow on ${link.label}`}
            >
              <img src={link.icon} alt={link.label} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
      {/* Copyright Bar */}
      <div className="bg-gray-800 py-4 text-center text-white text-sm">
        <p>© 2023 Mumair All Rights Reserved, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;