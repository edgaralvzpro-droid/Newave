import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#0f0f0f]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-black text-white uppercase tracking-wider">
              Newave<span className="text-[#2f81ff]">.</span>
            </a>
          </div>
          <div className="hidden md:block">
            <a
              href="tel:214-516-0957"
              className="px-5 py-3 text-sm font-semibold text-white bg-[#2f81ff] rounded-md shadow-lg hover:bg-[#fe4eee] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2f81ff] focus:ring-offset-[#0f0f0f] transition-all duration-300"
            >
              Llama ya!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;