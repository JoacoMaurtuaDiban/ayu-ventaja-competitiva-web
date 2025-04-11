
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const locations = [
  {
    city: 'Trujillo',
    address: 'Av. Principal 123, Urb. El Recreo',
    phone: '+51 (044) 123-4567'
  },
  {
    city: 'Piura',
    address: 'Jr. Arequipa 456, Centro',
    phone: '+51 (073) 987-6543'
  },
  {
    city: 'Cajamarca',
    address: 'Calle San Martín 789',
    phone: '+51 (076) 345-6789'
  }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img 
              src="/lovable-uploads/debbb9a0-1a56-4aec-add1-b5a8cba7cb56.png" 
              alt="AYU Logo" 
              className="h-12 mb-6" 
            />
            <p className="mb-4 text-gray-300">
              Transformando la vida de colaboradores a través de soluciones de construcción innovadoras.
            </p>
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 mr-2 text-ayu-pink" />
              <span>+51 (01) 555-7890</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-ayu-pink" />
              <span>contacto@ayu.pe</span>
            </div>
          </div>

          {locations.map((location, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-6">{location.city}</h3>
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-ayu-pink" />
                <span>{location.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-ayu-pink" />
                <span>{location.phone}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} AYU. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-ayu-pink">Política de Privacidad</a>
            <a href="#" className="text-gray-300 hover:text-ayu-pink">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
