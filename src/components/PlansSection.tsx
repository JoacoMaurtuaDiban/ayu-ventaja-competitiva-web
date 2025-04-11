
import React, { useRef, useEffect, useState } from 'react';
import { Check } from 'lucide-react';

const collaboratorBenefits = [
  'Compra progresiva sin deuda',
  'Orientación técnica',
  'Almacenamiento gratuito',
  'Entrega directa a la obra'
];

const plans = [
  {
    name: 'BÁSICO',
    description: 'Ideal para empresas que buscan iniciar su programa de beneficios de construcción',
    features: [
      'Ahorro mensual desde S/50',
      'Acceso a catálogo AYU',
      'Asesoría técnica básica'
    ]
  },
  {
    name: 'INTERMEDIO',
    description: 'Solución completa para necesidades de construcción y mejora del hogar',
    features: [
      'Ahorro mensual desde S/100',
      'Catálogo ampliado',
      'Asesoría técnica personalizada',
      'Talleres de construcción'
    ],
    highlight: true
  },
  {
    name: 'AVANZADO',
    description: 'Para empresas que buscan un impacto significativo en la calidad de vida',
    features: [
      'Ahorro mensual desde S/200',
      'Acceso a catálogo premium',
      'Asesoría técnica avanzada',
      'Talleres y eventos exclusivos',
      'Reportes de impacto'
    ]
  },
  {
    name: 'EMPRESARIAL',
    description: 'Solución a medida para grandes corporaciones con necesidades específicas',
    features: [
      'Plan personalizado',
      'Integración con plataformas de RRHH',
      'Dashboard de seguimiento',
      'Eventos corporativos',
      'Branding compartido'
    ]
  }
];

const PlansSection = () => {
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
    <section id="planes" ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planes flexibles y con impacto directo
          </h2>
          <p className="text-lg text-gray-600">
            Encuentra el plan que mejor se adapta a las necesidades de tu empresa y colaboradores
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bento-card h-full flex flex-col ${plan.highlight ? 'bento-card-highlight' : ''} opacity-0 ${
                isVisible ? `animate-fade-in-delay-${index % 3}` : ''
              }`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-ayu-pink mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <div className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-ayu-green" />
                    </div>
                    <p className="ml-3 text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-semibold mb-3">Beneficios para el colaborador:</h4>
                <ul className="space-y-2">
                  {collaboratorBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-4 w-4 text-ayu-yellow" />
                      </div>
                      <p className="ml-2 text-sm text-gray-600">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="ayu-btn-secondary mt-6">Solicitar más info de este plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
