
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase tracking-wide">
          Marketing Basado en <span className="text-[#2f81ff]">Datos</span>.
          <br />
          Resultados por <span className="text-[#fe4eee]">Creatividad</span>.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
          En Newave, combinamos análisis de datos avanzados con estrategias creativas para convertir clics en clientes. Deja de adivinar, empieza a crecer.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="px-8 py-4 text-lg font-bold text-white bg-[#2f81ff] rounded-lg shadow-2xl shadow-[#2f81ff]/30 hover:bg-[#fe4eee] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2f81ff] focus:ring-offset-[#0f0f0f] transform hover:scale-105 transition-all duration-300"
          >
            Agenda tu Auditoría Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;