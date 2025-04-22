
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import BackgroundSlider from './BackgroundSlider';
import { ArrowRight } from 'lucide-react';

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

  // Use the uploaded images
  const backgroundImages = [
    '/lovable-uploads/8c398d68-e73e-4cde-93e6-a8a71b887cf1.png',
    '/lovable-uploads/9a3646d7-5a63-4aa2-af99-af58af2f6bd0.png',
    '/lovable-uploads/f6ecdc53-4b23-4c24-a5c4-3e02dfc7f509.png'
  ];

  return (
    <section 
      className="relative h-[85vh] md:h-screen w-full overflow-hidden"
      aria-label="AYU Hero Section"
      id="hero"
    >
      <BackgroundSlider images={backgroundImages} interval={5000}>
        <div className="container mx-auto h-full px-6 lg:px-8 flex items-center justify-center md:justify-start">
          <div className="max-w-2xl bg-black/20 backdrop-blur-sm p-8 md:p-10 rounded-xl">
            {/* Text content with animations */}
            <h1 
              className={`text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white opacity-0 ${
                isVisible ? 'animate-fade-in' : ''
              }`}
            >
              Convierte el bienestar de tus colaboradores en una
              <span className="text-ayu-pink block mt-2"> ventaja competitiva</span>
            </h1>
            
            <p
              className={`text-lg md:text-xl text-white mb-8 opacity-0 ${
                isVisible ? 'animate-fade-in-delay-1' : ''
              }`}
            >
              AYU es el beneficio que mejora la vida de tus equipos y fortalece tu marca empleadora
            </p>
            
            <div className={`opacity-0 ${isVisible ? 'animate-fade-in-delay-2' : ''}`}>
              <Button 
                onClick={handleCtaClick}
                className="bg-ayu-pink hover:bg-opacity-90 text-white font-medium rounded-full py-6 px-8 text-lg group transition-all duration-300 hover:shadow-lg hover:shadow-ayu-pink/30"
              >
                Quiero conocer más de AYU
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Visual indicators */}
            <div className={`mt-8 flex items-center gap-3 opacity-0 ${isVisible ? 'animate-fade-in-delay-3' : ''}`}>
              {backgroundImages.map((_, index) => (
                <div 
                  key={index}
                  className="w-16 h-2 bg-white/30 rounded-full overflow-hidden"
                >
                  <div className="h-full bg-ayu-pink animate-pulse rounded-full" 
                       style={{animationDelay: `${index * 0.3}s`}}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BackgroundSlider>
    </section>
  );
};

export default HeroSection;
