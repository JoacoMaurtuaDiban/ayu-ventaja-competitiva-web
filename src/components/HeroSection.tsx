
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-[75vh] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 overflow-hidden"
      aria-label="AYU Hero Section"
    >
      {/* TWO COLUMN SPLIT ON DESKTOP, COLUMN REVERSE ON MOBILE */}
      <div className="relative flex flex-col-reverse lg:flex-row w-full h-full items-center container mx-auto px-4 py-16 md:py-24 lg:py-32 z-10">
        {/* TEXT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start lg:items-start text-left z-20 max-w-xl mx-auto lg:mx-0 order-2 lg:order-1">
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
          <button
            className={`ayu-btn-primary text-lg px-8 py-4 opacity-0 ${isVisible ? 'animate-fade-in-delay-2' : ''}`}
          >
            Quiero conocer más de AYU
          </button>
        </div>

        {/* RIGHT: HERO IMAGE */}
        <div
          className="w-full lg:w-1/2 h-64 md:h-96 lg:h-[34rem] flex items-center justify-end relative order-1 lg:order-2 mb-10 lg:mb-0"
          aria-hidden="true"
        >
          <div className="absolute inset-0 lg:static w-full h-full pointer-events-none" tabIndex={-1} aria-hidden="true">
            {/* Responsive background image with right focal point */}
            <img
              src="/lovable-uploads/90d65702-895b-4697-b952-ae2beda1c3dd.png"
              alt=""
              className="
                w-full h-full object-cover object-[70%_center]
                lg:rounded-3xl
                shadow-2xl
                transition-all
                duration-700
                border-4 border-white
                lg:ml-auto
                lg:max-w-[95%]
                "
              style={{
                objectPosition: '70% center',
                background: 'linear-gradient(90deg, rgba(255,255,255,0.35) 0%, transparent 50%)'
              }}
              draggable={false}
              loading="eager"
            />
            {/* (Optional: Overlay gradient for better legibility on mobile) */}
            <div
              className="lg:hidden absolute inset-0 bg-gradient-to-b from-white/85 via-white/30 to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30 hidden md:block">
        <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

