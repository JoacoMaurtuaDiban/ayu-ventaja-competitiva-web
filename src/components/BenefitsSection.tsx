
import React, { useRef, useEffect, useState } from 'react';
import { Leaf, Briefcase, HandHelping, CreditCard, Handshake } from 'lucide-react';

const benefits = [
  {
    icon: <Leaf className="w-8 h-8 text-ayu-pink" />,
    description: 'Contribuye a los objetivos de sostenibilidad y programas de RSE de la empresa'
  },
  {
    icon: <Briefcase className="w-8 h-8 text-ayu-pink" />,
    description: 'Refuerza la propuesta de valor al colaborador con un beneficio tangible y diferenciador'
  },
  {
    icon: <HandHelping className="w-8 h-8 text-ayu-pink" />,
    description: 'Atención directa al colaborador desde AYU, sin carga operativa adicional para la empresa'
  },
  {
    icon: <CreditCard className="w-8 h-8 text-ayu-pink" />,
    description: 'Método de compra progresiva sin deudas ni intereses, con orientación técnica incluida'
  },
  {
    icon: <Handshake className="w-8 h-8 text-ayu-pink" />,
    description: 'Ayuda a generar una percepción positiva de la empresa como agente de cambio social'
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

        <div className="max-w-7xl mx-auto">
          {/* First row - 3 cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
            {benefits.slice(0, 3).map((benefit, index) => (
              <div
                key={index}
                className="bento-card flex flex-col items-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 bg-ayu-pink bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                  {benefit.icon}
                </div>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto opacity-0 ${isVisible ? 'animate-fade-in-delay-1' : ''}`}>
            {benefits.slice(3).map((benefit, index) => (
              <div
                key={index + 3}
                className="bento-card flex flex-col items-center"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="mb-4 bg-ayu-pink bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                  {benefit.icon}
                </div>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
