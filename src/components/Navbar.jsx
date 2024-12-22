import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="assets/koko-logo.png" 
              alt="KOKO Logo" 
              className="h-10 w-10 mr-2"
            />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary">
              $KOKO
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Tokenomics'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-primary transition-colors cursor-pointer"
              >
                {item}
              </Link>
            ))}
            <a
              href="#"
              className="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;