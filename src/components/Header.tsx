import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Função para gerar o link do WhatsApp com mensagem corretamente codificada
  const whatsappNumber = '554799928103';
  const whatsappMessage = 'Vim pelo site Vila dos Ipês e gostaria de tirar algumas dúvidas.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 relative">
            {/* Fundo retangular durante o slideshow */}
            {!isScrolled && (
              <div className="absolute inset-0 bg-white bg-opacity-80 rounded-lg -m-2 z-0 transition-all duration-700 ease-out"></div>
            )}
            <img 
              src="/uploads/5e58a53d-79ed-46e9-ae0b-7159644b96aa.png" 
              alt="Vila dos Ipês"
              className="h-12 md:h-16 w-auto transition-all duration-700 ease-out relative z-10"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('empreendimento')}
              className={`font-medium transition-colors duration-500 ease-out hover:text-blue-600 ${
                isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'
              }`}
            >
              O Empreendimento
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')}
              className={`font-medium transition-colors duration-500 ease-out hover:text-blue-600 ${
                isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'
              }`}
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection('localizacao')}
              className={`font-medium transition-colors duration-500 ease-out hover:text-blue-600 ${
                isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'
              }`}
            >
              Localização
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-500 ease-out shadow-lg"
            >
              Tenho Interesse
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full p-2 transition-colors duration-300"
              title="Fale conosco pelo WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
          </nav>

          {/* Mobile WhatsApp + Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full p-2 transition-colors duration-300`}
              title="Fale conosco pelo WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-500 ease-out ${
                isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 transition-all duration-500 ease-out">
            <div className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('empreendimento')}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-300 ease-out"
              >
                O Empreendimento
              </button>
              <button 
                onClick={() => scrollToSection('diferenciais')}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-300 ease-out"
              >
                Diferenciais
              </button>
              <button 
                onClick={() => scrollToSection('localizacao')}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-300 ease-out"
              >
                Localização
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 mx-4 rounded-lg transition-colors duration-300 ease-out"
              >
                Tenho Interesse
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export { Header };
