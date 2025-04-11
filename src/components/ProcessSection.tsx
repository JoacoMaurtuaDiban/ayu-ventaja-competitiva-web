
import React, { useRef, useEffect, useState } from 'react';
import { ClipboardCheck, Coins, Home } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck className="h-12 w-12 text-ayu-pink" />,
    title: 'Define',
    description: 'Tu empresa selecciona el plan que mejor se adapte a sus objetivos y presupuesto'
  },
  {
    icon: <Coins className="h-12 w-12 text-ayu-yellow" />,
    title: 'Deposita',
    description: 'Tus colaboradores ahorran mensualmente una cantidad cómoda para su economía'
  },
  {
    icon: <Home className="h-12 w-12 text-ayu-green" />,
    title: 'Recibe',
    description: 'AYU entrega los materiales directamente en la obra cuando son requeridos'
  }
];

const ProcessSection = () => {
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
    <section id="proceso" ref={sectionRef} className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-ayu-pink rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-ayu-yellow rounded-full opacity-5 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Una solución simple, escalable y sin riesgos
          </h2>
          <p className="text-lg text-gray-600">
            AYU acompaña todo el proceso, desde el ahorro la compra progresiva mes a mes hasta la entrega de materiales, sin deudas ni intereses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`bento-card text-center opacity-0 ${
                isVisible ? `animate-fade-in-delay-${index}` : ''
              }`}
            >
              <div className="inline-flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="ayu-btn-primary">Ver cómo aplicaría en mi empresa</button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
