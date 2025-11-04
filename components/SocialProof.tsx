import React from 'react';
import RhsLogo from './icons/RhsLogo';

const clients = [
  {
    name: 'Ricardo Home Solutions',
    link: 'https://rhs-landing-page.vercel.app/#',
    component: <RhsLogo />,
  },
  {
    name: 'Client B',
    link: '#',
    component: <span className="text-gray-500 font-bold text-2xl">Tu Logo Aquí</span>,
  },
  {
    name: 'Client C',
    link: '#',
    component: <span className="text-gray-500 font-bold text-2xl">Tu Logo Aquí</span>,
  },
  {
    name: 'Client D',
    link: '#',
    component: <span className="text-gray-500 font-bold text-2xl">Tu Logo Aquí</span>,
  },
];


const ClientItem: React.FC<{ client: typeof clients[0] }> = ({ client }) => {
  const Tag = client.link !== '#' ? 'a' : 'div';
  const props = client.link !== '#' ? {
    href: client.link,
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-label': `Visit ${client.name}`,
  } : {};

  return (
    <Tag
      className="flex justify-center items-center p-4 bg-white rounded-lg border border-gray-200/80 shadow-sm"
      {...props}
    >
      <div className="h-20 w-full flex items-center justify-center filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
        {client.component}
      </div>
    </Tag>
  );
};

const SocialProof: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">
            Negocios que ya confían en nosotros
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ayudamos a emprendedores como tú a tener éxito en internet.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <ClientItem key={`${client.name}-${index}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;