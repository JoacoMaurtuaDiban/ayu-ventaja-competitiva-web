
import React from 'react';
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  const handleCtaClick = () => {
    window.open('https://lacantera1.typeform.com/to/f3nr4wss', '_blank');
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-ayu-pink">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Conversemos sobre cómo AYU puede sumar a tu empresa
        </h2>
        <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
          Descubre cómo implementar este beneficio innovador y generar un impacto positivo en tus colaboradores y en la sociedad
        </p>
        <Button 
          onClick={handleCtaClick}
          className="bg-white text-ayu-pink font-bold text-lg py-4 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-lg"
        >
          Solicitar una reunión
        </Button>
      </div>
    </section>
  );
};

export default ContactCTA;
