
import React, { useRef, useEffect, useState } from 'react';
import { Users, CheckSquare, MapPin, Building } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-8 w-8 text-ayu-pink" />,
    value: '+190',
    label: 'familias ya construyen su hogar con AYU'
  },
  {
    icon: <CheckSquare className="h-8 w-8 text-ayu-pink" />,
    value: '+25',
    label: 'proyectos entregados'
  },
  {
    icon: <MapPin className="h-8 w-8 text-ayu-pink" />,
    value: '3',
    label: 'Ciudades: Trujillo, Piura y Cajamarca'
  },
  {
    icon: <Building className="h-8 w-8 text-ayu-pink" />,
    value: '',
    label: 'Con el respaldo de Pacasmayo'
  }
];

const ImpactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="impacto" ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AYU ya transforma vidas con el respaldo de Pacasmayo
          </h2>
          <p className="text-lg text-gray-600">
            Conoce el impacto real que estamos generando en las comunidades donde operamos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-md">
                  <div className="flex items-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-ayu-pink mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`space-y-6 opacity-0 ${isVisible ? 'animate-fade-in-delay-1' : ''}`}>
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Conoce la historia de Víctor</h3>
                  <div className="bg-ayu-pink text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto cursor-pointer">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <img 
                src="/lovable-uploads/079901db-375c-444f-840d-109015a24b77.png" 
                alt="Historia de Víctor" 
                className="object-cover w-full h-full opacity-50"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <img 
                src="/lovable-uploads/806734fe-b787-4c1b-bd24-a248ffb8bc95.png" 
                alt="Impacto AYU" 
                className="w-full md:w-[calc(50%-8px)] rounded-xl object-cover h-48"
              />
              <img 
                src="/lovable-uploads/2abeb81a-6670-4ae0-9b8d-dff64e424a4a.png" 
                alt="Impacto AYU" 
                className="w-full md:w-[calc(50%-8px)] rounded-xl object-cover h-48"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
