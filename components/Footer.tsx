import React from 'react';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="text-2xl font-black text-gray-900 uppercase tracking-wider">
              Newave
            </a>
            <p className="mt-2 text-gray-500">Haciendo que tu negocio crezca en internet.</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
                <TwitterIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Navegación</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#services" className="text-base text-gray-500 hover:text-blue-600">Servicios</a></li>
                <li><a href="#philosophy" className="text-base text-gray-500 hover:text-blue-600">Cómo Trabajamos</a></li>
                <li><a href="#clients" className="text-base text-gray-500 hover:text-blue-600">Clientes</a></li>
                <li><a href="#contact" className="text-base text-gray-500 hover:text-blue-600">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contacto</h3>
               <p className="mt-4 text-base text-gray-500">Dallas, TX</p>
               <a href="mailto:newavemarketing7@gmail.com" className="text-base text-gray-500 hover:text-blue-600">newavemarketing7@gmail.com</a>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-base text-gray-500">
            &copy; {new Date().getFullYear()} Newave Agency. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;