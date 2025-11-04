import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-blue-50/50">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            Hablemos de tu Negocio
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Llena este formulario y te contactaremos para una consulta gratuita y sin compromiso.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg border border-gray-200/80 shadow-lg">
          <form 
            action="https://formsubmit.co/newavemarketing7@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                name="Nombre"
                id="name"
                required
                className="block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                placeholder="Tu Nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                name="Email"
                type="email"
                autoComplete="email"
                required
                className="block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Cuéntanos sobre tu negocio
              </label>
              <textarea
                id="message"
                name="Mensaje"
                rows={4}
                required
                className="block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                placeholder="¿A qué te dedicas y qué te gustaría lograr?"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
              >
                Solicitar Consulta Gratis
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;