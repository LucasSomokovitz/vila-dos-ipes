import React from 'react';
import { MapPin, Clock, Car } from 'lucide-react';

const Location = () => {
  const handleAddressClick = () => {
    const address = "Rua Linus Reiter, 484 – Blumenau, SC";
    const encodedAddress = encodeURIComponent(address);
    
    // Detectar se é mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Abrir no Google Maps app no mobile
      window.open(`https://maps.google.com/maps?q=${encodedAddress}`, '_blank');
    } else {
      // Abrir no Google Maps web no desktop
      window.open(`https://www.google.com/maps/search/${encodedAddress}`, '_blank');
    }
  };

  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/uploads/88c29006-cd6f-48d3-bbe1-4be291d24da3.png"
              alt="Localização estratégica Vila dos Ipês"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute top-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
              <MapPin size={24} />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Conectado à Vida,
              <span className="block text-blue-600">Isolado do Ruído</span>
            </h2>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="text-blue-600" size={20} />
                <span className="font-semibold text-blue-900">Endereço</span>
              </div>
              <p 
                className="text-blue-800 address-link cursor-pointer hover:text-blue-600 hover:underline transition-colors duration-200"
                onClick={handleAddressClick}
                title="Clique para abrir no Google Maps"
              >
                Rua Linus Reiter, 484 – Blumenau, SC
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              O Vila dos Ipês oferece a combinação perfeita de tranquilidade e conveniência. 
              Próximo ao prolongamento da região dos Caçadores em Blumenau, especificamente o trecho que passa pela Vila Germânica.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Desfrute da paz de um condomínio fechado sem abrir mão da proximidade com tudo 
              que você precisa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Car className="text-blue-600" size={24} />
                <div>
                  <div className="font-semibold text-gray-900">Centro da Cidade</div>
                  <div className="text-sm text-gray-600">10 minutos</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Clock className="text-blue-600" size={24} />
                <div>
                  <div className="font-semibold text-gray-900">Principais Vias</div>
                  <div className="text-sm text-gray-600">Acesso imediato</div>
                </div>
              </div>
            </div>

            {/* Mapa do Google Maps */}
            <div className="mt-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.546970506581!2d-49.12657299999999!3d-26.9178692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1c03e50b8401%3A0x4d95c35d1b098e05!2sR.%20Linus%20Reiter%2C%20484%20-%20Velha%20Central%2C%20Blumenau%20-%20SC%2C%2089040-460!5e0!3m2!1spt-BR!2sbr!4v1750902465757!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Location };
