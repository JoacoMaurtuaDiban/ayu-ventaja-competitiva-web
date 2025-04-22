
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleCtaClick = () => {
    window.open('https://lacantera1.typeform.com/to/Y8ZLXiQD', '_blank');
  };

  return (
    <section 
      className="relative min-h-[90vh] w-full overflow-hidden bg-white py-16 md:py-24"
      id="hero"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Content - Takes 5 columns on desktop */}
          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 animate-fade-in">
              Convierte el bienestar de tus colaboradores en una
              <span className="text-ayu-pink block mt-2">ventaja competitiva</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 animate-fade-in-delay-1">
              AYU es el beneficio que mejora la vida de tus equipos y fortalece tu marca empleadora
            </p>
            
            <div className="pt-4 animate-fade-in-delay-2">
              <Button 
                onClick={handleCtaClick}
                className="bg-ayu-pink hover:bg-opacity-90 text-white font-medium rounded-full py-6 px-8 text-lg group transition-all duration-300 hover:shadow-lg hover:shadow-ayu-pink/30"
              >
                Quiero conocer más de AYU
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Image Gallery - Takes 7 columns on desktop */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 gap-4 h-[80vh] max-h-[800px]">
              {/* Main Image - Taller */}
              <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="/lovable-uploads/55600d8c-fca3-4a80-92a1-abd57616b891.png"
                  alt="AYU Impact"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Two Vertical Images - Stacked */}
              <div className="col-span-1 space-y-4">
                <div className="h-[calc(50%-0.5rem)] relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="/lovable-uploads/f12888d7-4511-498e-b8dd-1720b06d7e3f.png"
                    alt="AYU Community"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[calc(50%-0.5rem)] relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="/lovable-uploads/6c655f80-680f-45d1-a99f-e558e729febe.png"
                    alt="AYU Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
