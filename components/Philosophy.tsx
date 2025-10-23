
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/800/600?grayscale&random=1" 
              alt="Data analysis charts" 
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase">
              Datos como <span className="text-[#2f81ff]">Brújula</span>.
              <br />
              Creatividad como <span className="text-[#fe4eee]">Motor</span>.
            </h2>
            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              En Newave, no creemos en las corazonadas. Cada estrategia, cada campaña y cada pieza de contenido nace de un profundo análisis de datos. Usamos la información como nuestra guía para entender a tu audiencia y al mercado. Solo entonces, desatamos nuestra creatividad para construir soluciones que no solo son bellas, sino increíblemente efectivas. No gestionamos anuncios; optimizamos sistemas de crecimiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;