import React from 'react';
import { Shield, Zap, Trees, Camera, Car, Waves } from 'lucide-react';

const Differentials = () => {
  const features = [
    {
      icon: Shield,
      title: "Mais Segurança",
      description: "Murado, Guarita, Monitoramento por câmeras",
      image: "/uploads/89d5589a-8fde-411c-ba61-3122450a1537.png"
    },
    {
      icon: Zap,
      title: "Infraestrutura Completa e Moderna",
      description: "Redes elétrica e de dados subterrâneas, Vias com postes de iluminação fotovoltaicos",
      image: "/uploads/ddd9ac3b-a419-4955-9f86-49af073ad1c7.png"
    },
    {
      icon: Waves,
      title: "Mais Lazer",
      description: "Piscina para toda a família",
      image: "/uploads/513e3c0f-555d-42c8-b7fb-6ed4f1840f37.png"
    },
    {
      icon: Car,
      title: "Salão de Festas",
      description: "Espaço completo para celebrações e eventos",
      image: "/uploads/779fa22d-e44d-42b3-ae37-03841638073c.png"
    },
    {
      icon: Trees,
      title: "Portaria Moderna",
      description: "Entrada exclusiva com guarita",
      image: "/uploads/c25cfb75-275a-428c-bf75-fecfb66c0126.png"
    },
    {
      icon: Shield,
      title: "Localização Privilegiada",
      description: "Fácil acesso e proximidade com o centro",
      image: "/uploads/88c29006-cd6f-48d3-bbe1-4be291d24da3.png"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Diferenciais do Condomínio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors duration-300" />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                  <feature.icon className="text-blue-600" size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Differentials };
