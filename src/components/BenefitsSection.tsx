
import React, { useRef, useEffect, useState } from 'react';
import { TrendingUp, UserCheck, Clock, Trophy } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="w-10 h-10 text-ayu-pink" />,
    title: 'Reducción del estrés financiero',
    description: 'Colaboradores más tranquilos y enfocados en su día a día laboral.'
  },
  {
    icon: <Clock className="w-10 h-10 text-ayu-pink" />,
    title: 'Disminución del ausentismo laboral',
    description: 'Mayor productividad y menos interrupciones en la operación.'
  },
  {
    icon: <UserCheck className="w-10 h-10 text-ayu-pink" />,
    title: 'Aumento en la motivación y compromiso',
    description: 'Equipos más comprometidos y alineados con los objetivos.'
  },
  {
    icon: <Trophy className="w-10 h-10 text-ayu-pink" />,
    title: 'Inversión social con impacto tangible',
    description: 'Mejora tu reputación corporativa con resultados medibles.'
  }
];

const BenefitsSection = () => {
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
    <section id="beneficios" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Retén talento, mejora clima y aporta valor real
          </h2>
          <p className="text-lg text-gray-600">
            AYU ofrece beneficios que impactan directamente en el rendimiento y satisfacción de tu equipo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`bento-card opacity-0 ${
                isVisible ? `animate-fade-in-delay-${index % 4}` : ''
              }`}
            >
              <div className="mb-4 bg-ayu-pink bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
