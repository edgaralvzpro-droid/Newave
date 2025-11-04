import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-black text-gray-900 uppercase tracking-wider">
              Newave
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#clients">Clientes</NavLink>
            <NavLink href="#services">Servicios</NavLink>
            <NavLink href="#philosophy">Cómo Trabajamos</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
          </nav>
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-5 py-3 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
            >
              Consulta Gratis
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <NavLink href="#clients">Clientes</NavLink>
            <NavLink href="#services">Servicios</NavLink>
            <NavLink href="#philosophy">Cómo Trabajamos</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
            <a
              href="#contact"
              className="w-1/2 text-center px-5 py-3 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm"
            >
              Consulta Gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;