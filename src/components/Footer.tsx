import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img 
            src="/uploads/ebebadce-1280-4105-ad42-d9a063a91b58.png" 
            alt="Vila dos Ipês"
            className="h-10 w-auto"
          />
          <img 
            src="/uploads/ea1beae8-c8b7-43ff-9a2a-e8e405468ae6.png" 
            alt="Logo adicional"
            className="h-10 w-auto"
          />
        </div>
        <div className="text-gray-400 text-xs text-center md:text-right">
          © 2025 Vila dos Ipês. Todos os direitos reservados.<br/>
          Registro de Incorporação: R.11-18983 do 2º Ofício de Registro de Imóveis de Blumenau/SC.
        </div>
        <div className="text-gray-500 text-xs text-center md:text-right">
          Rua Linus Reiter, 484, Blumenau, SC
        </div>
      </div>
    </footer>
  );
};

export { Footer };
