import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroSectionRef = useRef<HTMLElement>(null);

  // Handle initial animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroSectionRef.current) return;
      const rect = heroSectionRef.current.getBoundingClientRect();
      if (rect.top >= -rect.height && rect.bottom >= 0) {
        setScrollY(window.scrollY * 0.15); // Parallax speed factor
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCtaClick = () => {
    window.open('https://lacantera1.typeform.com/to/Y8ZLXiQD', '_blank');
  };

  return (
    <section 
      ref={heroSectionRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-white to-gray-50"
      aria-label="AYU Hero Section"
    >
      {/* Main container - aligned with navbar */}
      <div className="container max-w-screen-2xl mx-auto px-6 lg:px-8 h-full relative z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full gap-8 pb-16">
          
          {/* Text content - aligned with navbar logo */}
          <div className="lg:col-span-5 flex flex-col justify-center z-20 lg:pl-4">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 ${
                isVisible ? 'animate-fade-in' : ''
              }`}
            >
              Convierte el bienestar de tus colaboradores en una
              <span className="text-ayu-pink"> ventaja competitiva</span>
            </h1>
            
            <p
              className={`text-xl md:text-2xl text-gray-600 mb-8 opacity-0 ${
                isVisible ? 'animate-fade-in-delay-1' : ''
              }`}
            >
              AYU es el beneficio que mejora la vida de tus equipos y fortalece tu marca empleadora
            </p>
            
            <Button 
              onClick={handleCtaClick}
              className={`bg-ayu-pink hover:bg-opacity-90 text-white font-medium rounded-full py-6 px-8 text-lg w-fit opacity-0 ${
                isVisible ? 'animate-fade-in-delay-2' : ''
              }`}
            >
              Quiero conocer más de AYU
            </Button>
          </div>
          
          {/* Image layout - non-overlapping with proper spacing */}
          <div className="lg:col-span-7 relative h-full flex items-center">
            <div 
              className={`relative w-full h-[65vh] md:h-[75vh] lg:h-full opacity-0 ${
                isVisible ? 'animate-fade-in-delay-1' : ''
              }`}
            >
              {/* Primary image */}
              <div 
                className="absolute w-[60%] h-[65%] top-[5%] right-[5%] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-30 transform transition-transform duration-1000"
                style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
              >
                <img
                  src="/lovable-uploads/635d5ae6-2e27-4aa5-b17a-381b22d9ad2f.png"
                  alt="AYU community impact" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Secondary image - clear separation */}
              <div 
                className="absolute w-[45%] h-[50%] bottom-[15%] left-[10%] rounded-2xl overflow-hidden shadow-lg border-4 border-white z-20 transform transition-transform duration-1000"
                style={{ transform: `translateY(${scrollY * 0.3}px)` }}
              >
                <img
                  src="/lovable-uploads/0d95a648-25e2-4b31-af21-abf5902ade2d.png"
                  alt="AYU team member" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div 
                className="absolute top-[20%] left-[25%] w-32 h-32 rounded-full bg-ayu-yellow/10 z-0 animate-pulse"
                style={{ animationDuration: '6s' }}
              ></div>
              <div 
                className="absolute bottom-[25%] right-[20%] w-24 h-24 rounded-full bg-ayu-pink/10 z-0 animate-pulse"
                style={{ animationDuration: '7s' }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Mobile overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none z-10 lg:hidden"></div>
      </div>
      
      {/* Background elements */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-ayu-pink/10 via-ayu-yellow/5 to-transparent z-0"></div>
      <div className="hidden lg:block absolute top-24 right-0 w-64 h-64 rounded-full bg-ayu-yellow/5 z-0"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30 hidden md:flex flex-col items-center">
        <span className="text-sm text-gray-500 mb-2">Explora más</span>
        <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
          <ChevronDown className="h-5 w-5 text-ayu-pink" />
        </div>
      </div>
      
      {/* Background dots pattern */}
      <div 
        className="absolute top-0 left-0 w-full h-full z-0 opacity-40" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,52,151,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
