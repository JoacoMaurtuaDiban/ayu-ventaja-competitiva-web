
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  const handleCtaClick = () => {
    window.open('https://forms.gle/WVWPfYodxZE6Lk6J7', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FF3497]`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        <div className="logo">
          <img src="/lovable-uploads/debbb9a0-1a56-4aec-add1-b5a8cba7cb56.png" alt="AYU Logo" className="h-10 md:h-12" />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#beneficios" className="text-white hover:underline font-medium">Beneficios</a>
          <a href="#planes" className="text-white hover:underline font-medium">Planes</a>
          <a href="#proceso" className="text-white hover:underline font-medium">Cómo funciona</a>
          <a href="#impacto" className="text-white hover:underline font-medium">Impacto</a>
          <Button 
            className="bg-[#FFE523] text-black hover:bg-[#FFE523]/90"
            onClick={handleCtaClick}
          >
            Contactar
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FF3497] py-4 px-4 absolute w-full animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#beneficios" 
              className="text-white hover:underline font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Beneficios
            </a>
            <a 
              href="#planes" 
              className="text-white hover:underline font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Planes
            </a>
            <a 
              href="#proceso" 
              className="text-white hover:underline font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ¿Por que AYU?
            </a>
            <a 
              href="#proceso" 
              className="text-white hover:underline font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Como funciona
            </a>
            <Button 
              className="bg-[#FFE523] text-black hover:bg-[#FFE523]/90 self-start"
              onClick={handleCtaClick}
            >
              Contactar
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
