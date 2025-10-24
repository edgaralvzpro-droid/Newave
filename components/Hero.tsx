import React from 'react';

const myths = [
  {
    title: 'Mito 1: "Es demasiado complicado y yo no sé de tecnología."',
    reality: '¡No tienes que saber! Nuestro trabajo es precisamente que tú no tengas que aprender nada. Nosotros lo configuramos todo y te explicamos los resultados con palabras simples.',
  },
  {
    title: 'Mito 2: "No tengo tiempo para estar publicando cosas."',
    reality: 'Este sistema está hecho para ahorrarte tiempo. Nosotros nos encargamos del trabajo digital para que tu celular suene. Tú solo dedícate a lo que mejor sabes hacer: atender a tus clientes.',
  },
  {
    title: 'Mito 3: "Seguro es un servicio muy caro, no es para mí."',
    reality: 'Diseñamos un plan económico justo para negocios de oficio. La meta es simple: que los nuevos clientes que consigas paguen el servicio y te dejen ganancia.',
  },
];

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            ¿Quieres que te busquen por internet? <br className="hidden md:block" /> Hablemos de los <span className="text-[#2f81ff]">3 mitos</span> que frenan a tu negocio.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            Sabemos que dar el primer paso digital da desconfianza. Por eso, hablemos claro:
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {myths.map((myth, index) => (
            <div key={index} className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:border-[#2f81ff]/50">
              <h2 className="text-xl md:text-2xl font-bold text-[#fe4eee]">{myth.title}</h2>
              <p className="mt-4 text-lg text-gray-200">
                <span className="font-semibold text-white">Realidad:</span> {myth.reality}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 text-lg font-bold text-white bg-[#2f81ff] rounded-lg shadow-2xl shadow-[#2f81ff]/30 hover:bg-[#fe4eee] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2f81ff] focus:ring-offset-[#0f0f0f] transform hover:scale-105 transition-all duration-300"
          >
            Agenda tu Auditoría Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;