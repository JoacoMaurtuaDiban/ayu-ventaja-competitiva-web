
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import BackgroundSlider from './BackgroundSlider';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCtaClick = () => {
    window.open('https://lacantera1.typeform.com/to/Y8ZLXiQD', '_blank');
  };

  const backgroundImages = [
    '/lovable-uploads/8aea6c50-31c9-46db-b278-9b6a61b2d5d8.png',
    '/lovable-uploads/5aad6445-7b5a-41ea-8840-70eac76c1bb9.png',
    '/lovable-uploads/4fe100d8-2452-4617-8b7b-084869de04b4.png'
  ];

  return (
    <section 
      className="relative h-screen min-h-[800px] w-full overflow-hidden"
      aria-label="AYU Hero Section"
    >
      <BackgroundSlider images={backgroundImages}>
        <div className="container mx-auto h-full px-6 lg:px-8 flex items-center justify-center">
          <div className="max-w-3xl text-center">
            {/* Text content with animations */}
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white opacity-0 ${
                isVisible ? 'animate-fade-in' : ''
              }`}
            >
              Convierte el bienestar de tus colaboradores en una
              <span className="text-ayu-pink"> ventaja competitiva</span>
            </h1>
            
            <p
              className={`text-xl md:text-2xl text-white mb-8 opacity-0 ${
                isVisible ? 'animate-fade-in-delay-1' : ''
              }`}
            >
              AYU es el beneficio que mejora la vida de tus equipos y fortalece tu marca empleadora
            </p>
            
            <Button 
              onClick={handleCtaClick}
              className={`bg-ayu-pink hover:bg-opacity-90 text-white font-medium rounded-full py-6 px-8 text-lg opacity-0 ${
                isVisible ? 'animate-fade-in-delay-2' : ''
              }`}
            >
              Quiero conocer más de AYU
            </Button>
          </div>
        </div>
      </BackgroundSlider>
    </section>
  );
};

export default HeroSection;
