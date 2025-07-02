import React from 'react';

const About = () => {
  return (
    <section id="empreendimento" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Onde Seus Sonhos
              <span className="block text-blue-600">Ganham Raízes</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              No coração de Blumenau, o Residencial Vila dos Ipês surge como o cenário perfeito 
              para a construção da sua casa. Com um conceito exclusivo de apenas 40 lotes em 
              condomínio fechado, oferecemos um estilo de vida incomparável, onde conforto, 
              segurança e uma infraestrutura moderna se encontram com a beleza da natureza.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cada detalhe foi planejado para proporcionar a você e sua família a tranquilidade 
              e a qualidade de vida que merecem.
            </p>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">40</div>
                <div className="text-sm text-gray-600">Lotes Exclusivos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Infraestrutura</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24h</div>
                <div className="text-sm text-gray-600">Segurança</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/uploads/57ee5605-8488-4fea-b46f-42db1609196d.png"
              alt="Planta dos lotes Vila dos Ipês"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-2xl font-bold">40 lotes</div>
              <div className="text-sm opacity-90">de 300m² a 400m²</div>
            </div>
          </div>
        </div>

        {/* Nova seção com ambiente interno */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="/uploads/17d801c8-e81b-4a9f-bd46-5eeaadfce910.png"
              alt="Ambiente interno moderno"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Diferenciais do Condomínio
              <span className="block text-blue-600">Exclusividade e Infraestrutura</span>
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              O Vila dos Ipês oferece exclusividade e segurança em um condomínio fechado com apenas 40 lotes, todos com excelente topografia e rodeados por 7.000 m² de área verde. O perímetro é totalmente murado, conta com câmeras de segurança e guarita com controle de acesso, garantindo tranquilidade para sua família.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              A infraestrutura é completa: redes elétrica, de telefonia e dados são subterrâneas, as vias internas possuem iluminação fotovoltaica, pavimentação asfáltica e calçadas em paver. O lazer é garantido com espaço gourmet, piscina adulto e infantil, além de regras construtivas que asseguram o padrão elevado das residências, permitindo liberdade na concepção dos projetos, com área mínima construída de 150m² e sem limite máximo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
