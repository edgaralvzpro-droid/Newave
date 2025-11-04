import React from 'react';
import HeroIllustration from './icons/HeroIllustration';

const Hero: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
              Hacemos que más clientes te encuentren en <span className="text-accent">Google</span>.
            </h1>
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600">
              Ayudamos a emprendedores y dueños de pequeños negocios como tú a conseguir más trabajos y ventas, posicionando tu servicio en internet para que seas la primera opción de tus clientes.
            </p>
            <div className="mt-12">
              <a
                href="#contact"
                className="inline-block px-10 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-lg shadow-blue-500/30 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transform hover:scale-105 transition-all duration-300"
              >
                Recibe tu Consulta Gratis
              </a>
            </div>
          </div>
          {/* Illustration */}
          <div className="hidden lg:block">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;