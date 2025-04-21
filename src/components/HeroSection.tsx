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
      <div className="relative flex flex-col-reverse lg:flex-row w-full h-full items-center container mx-auto px-4 md:px-8 py-16 md:py-24 lg:py-32 z-10">
        {/* TEXT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start lg:items-start text-left z-20 max-w-xl mx-auto lg:mx-0 order-2 lg:order-1 md:mb-12 lg:mb-0">
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
          className="relative w-full lg:w-1/2 h-72 md:h-[450px] lg:h-[600px] xl:h-[700px] flex items-center justify-end order-1 lg:order-2 mb-10 lg:mb-0"
          aria-hidden="true"
        >
          <img
            src="/lovable-uploads/ee2dbd26-1eca-4478-9d3a-96eb8328309a.png"
            alt="AYU Team colaboradores"
            className="
              w-full h-full object-cover
              rounded-3xl
              shadow-2xl
              border-4 border-white
            "
            style={{
              objectPosition: 'center center',
            }}
            draggable={false}
            loading="eager"
          />
          {/* Overlay gradient for mobile legibility */}
          <div
            className="lg:hidden absolute inset-0 bg-gradient-to-b from-white/85 via-white/30 to-transparent pointer-events-none"
            aria-hidden="true"
          />
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
