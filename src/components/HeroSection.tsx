
import React, { useEffect, useState } from 'react';

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
    <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16 min-h-[90vh] flex items-center relative">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-ayu-yellow rounded-bl-[100px]"></div>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl">
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
            className={`ayu-btn-primary text-lg opacity-0 ${isVisible ? 'animate-fade-in-delay-2' : ''}`}
          >
            Quiero conocer más de AYU
          </button>
        </div>
        
        <div className={`relative md:justify-self-end opacity-0 ${isVisible ? 'animate-fade-in-delay-3' : ''}`}>
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-ayu-yellow rounded-full opacity-70"></div>
            <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-ayu-pink rounded-full opacity-70"></div>
            <img 
              src="/lovable-uploads/604fadb6-a73c-4006-833c-2f41ea028f58.png" 
              alt="Trabajadores AYU" 
              className="rounded-2xl shadow-xl relative z-10 w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
