
import React, { useRef, useEffect, useState } from 'react';
import { Users, CheckSquare, MapPin, Building } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-6 w-6 text-ayu-pink" />,
    value: '+190',
    label: 'familias ya construyen su hogar con AYU'
  },
  {
    icon: <CheckSquare className="h-6 w-6 text-ayu-pink" />,
    value: '+25',
    label: 'proyectos entregados'
  },
  {
    icon: <MapPin className="h-6 w-6 text-ayu-pink" />,
    value: '3',
    label: 'Ciudades: Trujillo, Piura y Cajamarca'
  },
  {
    icon: <Building className="h-6 w-6 text-ayu-pink" />,
    value: <span className="text-white">0</span>,
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AYU ya transforma vidas con el respaldo de Pacasmayo
          </h2>
          <p className="text-lg text-gray-600">
            Conoce el impacto real que estamos generando en las comunidades donde operamos
          </p>
        </div>

        {/* YouTube Video Container */}
        <div className="w-full mb-16 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              src="https://www.youtube.com/embed/s3DDJC0K6M0"
              title="AYU Impact Video"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-2">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-ayu-pink mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
