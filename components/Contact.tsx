import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase">
            ¿Listo para tomar decisiones <span className="bg-gradient-to-r from-[#2f81ff] to-[#fe4eee] text-transparent bg-clip-text">basadas en datos</span>?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Hablemos de tu proyecto. Completa el formulario y nos pondremos en contacto.
          </p>
        </div>
        <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-lg border border-gray-800">
          <form 
            action="https://formsubmit.co/newavemarketing7@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                Nombre Completo
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="Nombre"
                  id="name"
                  required
                  className="block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-[#2f81ff] focus:border-[#2f81ff]"
                  placeholder="Tu Nombre"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="Email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-[#2f81ff] focus:border-[#2f81ff]"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                Mensaje
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="Mensaje"
                  rows={4}
                  required
                  className="block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-[#2f81ff] focus:border-[#2f81ff]"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-[#2f81ff] hover:bg-[#fe4eee] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fe4eee] focus:ring-offset-[#1c1c1c] transition-colors duration-300"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;