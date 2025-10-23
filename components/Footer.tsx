
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0f0f] border-t border-gray-800">
      <div className="container mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} Newave Agency. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;