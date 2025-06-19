import React, { useRef, useEffect, useState } from 'react';
import { Check, FileChartColumn, Activity, Database, LayoutDashboard, FileText, User } from 'lucide-react';

// Remove the collaboratorBenefits array since we won't need it anymore
const plans = [
  {
    name: 'BÁSICO',
    description: 'Beneficios del programa AYU',
    features: [
      'Sorteo mensual de materiales de construcción valorizado en S/ 300 entre pagadores',
      'Capacitación virtual trimestral personalizada para colaboradores',
      'Recomendaciones de MO capacitados por CPSAA'
    ]
  },
  {
    name: 'AVANZADO',
    description: 'Beneficios del programa AYU',
    features: [
      'Sorteo mensual de materiales de construcción valorizado en S/ 500 entre pagadores',
      'Capacitación presencial trimestral personalizada para colaboradores',
      'Recomendaciones de MO capacitados por CPSAA',
      '1 visita técnica presencial personalizada adicional',
      'Ejecutivo de cuenta dedicado'
    ],
    highlight: true
  },
  {
    name: 'EMPRESARIAL',
    description: 'Hecho a medida, cocreamos el plan para tu empresa',
    features: []
  }
];

const additionalBenefits = [
  {
    text: "Reporte mensual con data agregada de los proyectos de colaboradores AYUdados",
    icon: FileChartColumn
  },
  {
    text: "Medición mensual de engagement con beneficio corporativo AYU",
    icon: Activity
  },
  {
    text: "Acceso a BBDD con info de comportamiento crediticio de colaboradores AYUdados",
    icon: Database
  },
  {
    text: "Acceso a dashboard personalizado con la información",
    icon: LayoutDashboard
  },
  {
    text: "Reportes de impacto para uso en memorias de sostenibilidad",
    icon: FileText
  },
  {
    text: "Asesores AYU dedicados a colaboradores AYUdados y a la empresa",
    icon: User
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

  const handleCtaClick = (planName: string) => {
    window.open('https://forms.gle/WVWPfYodxZE6Lk6J7', '_blank');
  };

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bento-card h-full flex flex-col ${plan.highlight ? 'bento-card-highlight shadow-[0_4px_24px_rgba(236,0,140,0.2)]' : ''} opacity-0 ${
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
              
              <button 
                className="ayu-btn-secondary mt-6"
                onClick={() => handleCtaClick(plan.name)}
              >
                Solicitar info P. {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* New Additional Benefits Subsection */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Además, algunos de nuestros planes incluyen:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {additionalBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index} 
                  className={`bento-card flex items-center space-x-4 opacity-0 ${
                    isVisible ? `animate-fade-in-delay-${index % 3}` : ''
                  }`}
                >
                  <p className="flex-1 text-gray-700">{benefit.text}</p>
                  <div className="flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-ayu-pink" />
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-gray-600 italic mt-8">
            *Beneficios sujetos al tipo de plan, para más información contáctanos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
