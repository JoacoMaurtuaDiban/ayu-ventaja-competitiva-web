
import React from 'react';

const AyuImpactSection = () => {
  return (
    <section className="bg-[#FF3497] py-16 px-0 relative overflow-hidden w-full">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full opacity-5 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Block */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="w-32 h-auto">
              <img 
                src="/lovable-uploads/8cfbb4fa-6ebd-43bf-a6b3-5d0b6125621e.png" 
                alt="AYU Logo" 
                className="w-full h-auto"
              />
            </div>
            
            <h3 className="text-white font-bold text-2xl md:text-3xl leading-tight">
              ha transformado la vida de +220 familias
            </h3>
            
            <div className="w-48 h-auto">
              <img 
                src="/lovable-uploads/9e292847-5aee-4917-a665-fdea3e5cb3c3.png" 
                alt="Pacasmayo Logo" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Block - Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl">
              <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/s3DDJC0K6M0"
                  title="AYU Impact Video"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AyuImpactSection;
