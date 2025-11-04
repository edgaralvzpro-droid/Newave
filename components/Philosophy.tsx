import React from 'react';

const Step: React.FC<{ number: string; title: string; description: string; }> = ({ number, title, description }) => (
    <div className="bg-gray-50/80 p-6 rounded-lg border border-gray-200/60 h-full">
        <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                {number}
            </div>
            <h3 className="text-xl font-black text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);


const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-wider">Nuestro Proceso es Simple y Transparente</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                Trabajamos contigo, paso a paso, para lograr tus objetivos.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <Step 
            number="1" 
            title="Entendemos tu Negocio" 
            description="Todo empieza con una conversación. Queremos conocer tu negocio, tus clientes y tus metas. No creemos en soluciones genéricas; tu estrategia debe ser tan única como tu trabajo."
          />

          <Step 
            number="2" 
            title="Creamos un Plan a tu Medida" 
            description="Basados en lo que hablamos, diseñamos un plan de acción claro y enfocado. Te explicaremos exactamente qué haremos para que siempre sepas en qué se invierte tu dinero."
          />

          <Step 
            number="3" 
            title="Te Mostramos Resultados" 
            description="Te enviaremos reportes fáciles de entender que te muestran cómo va el trabajo: cuántas personas te contactaron, visitaron tu web y cómo crece tu presencia en línea."
          />
          
        </div>
      </div>
    </section>
  );
};

export default Philosophy;