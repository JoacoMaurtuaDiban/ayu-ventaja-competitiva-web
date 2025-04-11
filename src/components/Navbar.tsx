
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="logo">
          <img src="/lovable-uploads/debbb9a0-1a56-4aec-add1-b5a8cba7cb56.png" alt="AYU Logo" className="h-10 md:h-12" />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#beneficios" className="text-gray-800 hover:text-ayu-pink font-medium">Beneficios</a>
          <a href="#planes" className="text-gray-800 hover:text-ayu-pink font-medium">Planes</a>
          <a href="#proceso" className="text-gray-800 hover:text-ayu-pink font-medium">Cómo funciona</a>
          <a href="#impacto" className="text-gray-800 hover:text-ayu-pink font-medium">Impacto</a>
          <button className="ayu-btn-primary">Contactar</button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute w-full animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#beneficios" 
              className="text-gray-800 hover:text-ayu-pink font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Beneficios
            </a>
            <a 
              href="#planes" 
              className="text-gray-800 hover:text-ayu-pink font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Planes
            </a>
            <a 
              href="#proceso" 
              className="text-gray-800 hover:text-ayu-pink font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cómo funciona
            </a>
            <a 
              href="#impacto" 
              className="text-gray-800 hover:text-ayu-pink font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Impacto
            </a>
            <button className="ayu-btn-primary self-start">Contactar</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
