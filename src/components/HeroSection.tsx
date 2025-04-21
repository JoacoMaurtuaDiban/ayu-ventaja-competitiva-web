
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set elements to visible after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ayu-yellow opacity-5 rounded-bl-[200px]"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-ayu-pink opacity-5 rounded-tr-[150px]"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="max-w-xl order-2 lg:order-1 z-10">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
            >
              Convierte el bienestar de tus colaboradores en una 
              <span className="text-ayu-pink"> ventaja competitiva</span>
            </h1>
            
            <p 
              className={`text-xl md:text-2xl text-gray-600 mb-8 opacity-0 ${isVisible ? 'animate-fade-in-delay-1' : ''}`}
            >
              AYU es el beneficio que mejora la vida de tus equipos y fortalece tu marca empleadora
            </p>
            
            <button 
              className={`ayu-btn-primary text-lg px-8 py-4 opacity-0 ${isVisible ? 'animate-fade-in-delay-2' : ''}`}
            >
              Quiero conocer más de AYU
            </button>
          </div>
          
          {/* Hero image */}
          <div className={`relative order-1 lg:order-2 opacity-0 ${isVisible ? 'animate-fade-in-delay-1' : ''}`}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-ayu-yellow rounded-full opacity-60 blur-md"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-ayu-pink rounded-full opacity-60 blur-md"></div>
              
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/604fadb6-a73c-4006-833c-2f41ea028f58.png" 
                  alt="Trabajadores AYU" 
                  className="w-full h-auto object-cover rounded-3xl transform transition-all hover:scale-105 duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
