
import React from 'react';
import type { Service } from '../types';
import PerformanceIcon from './icons/PerformanceIcon';
import SocialIcon from './icons/SocialIcon';
import BrandingIcon from './icons/BrandingIcon';

const services: Service[] = [
  {
    icon: <PerformanceIcon />,
    title: "Marketing de Performance",
    description: "Optimizamos tu inversión con campañas de SEO y SEM diseñadas para maximizar el ROI y la visibilidad.",
  },
  {
    icon: <SocialIcon />,
    title: "Estrategia de Social Media",
    description: "Construimos y gestionamos comunidades activas que conectan con tu marca y convierten seguidores en clientes.",
  },
  {
    icon: <BrandingIcon />,
    title: "Branding y Contenido",
    description: "Creamos identidades de marca memorables y contenido de valor que resuena con tu audiencia y genera confianza.",
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-lg hover:shadow-[#2f81ff]/20 border border-gray-800 hover:border-[#2f81ff]/50 transform hover:-translate-y-2 transition-all duration-300">
    <div className="flex-shrink-0 mb-4 h-12 w-12 text-[#2f81ff]">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
    <p className="text-gray-300">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#0f0f0f]/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase">Nuestros Servicios</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Soluciones integrales para impulsar tu crecimiento digital.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
