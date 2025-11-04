import React from 'react';
import type { Service } from '../types';
import DataIcon from './icons/DataIcon';
import BrandingIcon from './icons/BrandingIcon';
import SocialIcon from './icons/SocialIcon';
import StrategyIcon from './icons/StrategyIcon';

const services: Service[] = [
  {
    icon: <DataIcon />,
    title: "Posicionamiento en Google (SEO)",
    description: "Optimizamos tu negocio para que cuando la gente busque tus servicios en Google, tú seas el primero en aparecer.",
  },
  {
    icon: <BrandingIcon />,
    title: "Publicidad en Google y Facebook",
    description: "Creamos anuncios efectivos para atraer clientes que ya están buscando lo que ofreces, garantizando que tu inversión valga la pena.",
  },
  {
    icon: <StrategyIcon />,
    title: "Diseño de Página Web",
    description: "Construimos una página web profesional y fácil de usar que presenta tu negocio de la mejor manera y convierte visitantes en clientes.",
  },
  {
    icon: <SocialIcon />,
    title: "Manejo de Redes Sociales",
    description: "Mantenemos tus perfiles sociales activos y profesionales para que conectes con tu comunidad y construyas confianza.",
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg border border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-500">
    <div className="flex-shrink-0 mb-5 h-12 w-12 text-blue-600 bg-blue-50 p-3 rounded-lg flex items-center justify-center">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
    <p className="text-gray-600 leading-relaxed">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-wider">¿Cómo te ayudamos a crecer?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Nuestros servicios están pensados para dueños de negocios que quieren resultados reales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;