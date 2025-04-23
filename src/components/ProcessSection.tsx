
import React, { useRef, useEffect, useState } from 'react';
import { ClipboardList, Wallet, Truck } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="h-12 w-12 text-white" />,
    title: 'DEFINE',
    description: 'Definir su plan: Tus colaboradores eligen la cuota mensual que se adecue mejor a su bolsillo y el plazo de tiempo en el que deseas conseguirlo.'
  },
  {
    icon: <Wallet className="h-12 w-12 text-white" />,
    title: 'AHORRA',
    description: 'Ahorrar progresivamente: Tus colaboradores ahorran mensualmente una cantidad cómoda para su economía.'
  },
  {
    icon: <Truck className="h-12 w-12 text-white" />,
    title: 'RECIBE',
    description: 'Recibir materiales directo a la obra: AYU entrega los materiales directamente en la obra cuando son requeridos.'
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
    <section id="proceso" ref={sectionRef} className="section-padding bg-[#FF3497] relative overflow-hidden">
      {/* Decorative elements with adjusted opacity for the new background */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full opacity-5 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Una solución simple, escalable y sin riesgos
          </h2>
          <p className="text-lg text-white opacity-90">
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
              <h3 className="text-2xl font-bold mb-3 text-[#FF3497]">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#FFE523] text-black font-semibold rounded-full hover:opacity-90 transition-opacity">
            Quiero llevar AYU a mi empresa
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
