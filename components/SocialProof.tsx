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
    component: <span className="text-gray-500 font-semibold">Client B</span>,
  },
  {
    name: 'Client C',
    link: '#',
    component: <span className="text-gray-500 font-semibold">Client C</span>,
  },
  {
    name: 'Client D',
    link: '#',
    component: <span className="text-gray-500 font-semibold">Client D</span>,
  },
  {
    name: 'Client E',
    link: '#',
    component: <span className="text-gray-500 font-semibold">Client E</span>,
  },
];


const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-[#0f0f0f]/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Confían en nosotros para crecer
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Marcas que ya toman decisiones basadas en datos con Newave.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 items-center">
            {clients.map((client) => {
              const Tag = client.link !== '#' ? 'a' : 'div';
              const props = client.link !== '#' ? {
                href: client.link,
                target: '_blank',
                rel: 'noopener noreferrer',
                'aria-label': `Visit ${client.name}`,
              } : {};

              return (
                <Tag
                  key={client.name}
                  className="flex justify-center group"
                  {...props}
                >
                  <div className="w-40 h-20 bg-[#1c1c1c] rounded-lg flex items-center justify-center filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300 p-2">
                    {client.component}
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;