import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/uploads/1af88094-7112-464a-9b22-876d31c6d4d5.png",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      image: "/uploads/b0a60ef0-4e01-496b-8be5-5919fe4f63bb.png",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      image: "/uploads/845d1284-b25c-40f8-8de1-1c1cf0d4e2da.png",
      title: "Vista Aérea",
      subtitle: "40 lotes exclusivos",
      description: "Localização privilegiada em Blumenau"
    },
    {
      image: "/uploads/2a340d55-280d-45f5-8e4b-8f41187be2af.png",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      image: "/uploads/53601a8e-c2ec-42f3-a51f-a67435b1aeb4.png",
      title: "Infraestrutura",
      subtitle: "COMPLETA E MODERNA",
      description: "Tudo pensado para sua comodidade e qualidade de vida"
    },
    {
      image: "/uploads/aff0d53f-e6df-4d09-88bf-077244681a81.png",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      image: "/uploads/697eef38-8b76-45dc-9ba0-56b18a6098e9.png",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      image: "/uploads/1e71376e-9e21-4ed4-aeb1-5deb24f2354e.png",
      title: "Infraestrutura",
      subtitle: "Vias pavimentadas",
      description: "Iluminação fotovoltaica"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2500); // Ajustado para 2500ms (2,5 segundos por slide)
    
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Fundo preto fixo para suavizar a transição */}
      <div className="absolute inset-0 bg-black" />
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
          />
          {(slide.title || slide.subtitle || slide.description) && (
            <div className="absolute inset-0 z-20 flex justify-center items-center">
              <div className="text-center text-white max-w-4xl mx-auto px-4">
                {slide.title && (
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-slow">
                    {slide.title}
                  </h1>
                )}
                {slide.subtitle && (
                  <p className="text-xl md:text-2xl mb-2 animate-fade-in-slow" style={{ animationDelay: '0.3s' }}>
                    {slide.subtitle}
                  </p>
                )}
                {slide.description && (
                  <p className="text-lg md:text-xl opacity-90 animate-fade-in-slow" style={{ animationDelay: '0.6s' }}>
                    {slide.description}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 ease-out"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 ease-out"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ease-out ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export { Hero };
