'use client';

import { useState, useEffect } from 'react';

export default function ResultsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [errorImages, setErrorImages] = useState<Record<number, boolean>>({});
  
  // Mapeamento explícito de todas as imagens para garantir que todas são carregadas corretamente
  const images = [
    '/results/results (1).jpeg',
    '/results/results (2).jpeg',
    '/results/results (3).jpeg',
    '/results/results (4).jpeg',
    '/results/results (5).jpeg',
    '/results/results (6).jpeg',
    '/results/results (7).jpeg',
    '/results/results (8).jpeg',
    '/results/results (9).jpeg',
    '/results/results (10).jpeg'
  ];

  // Função para avançar para a próxima imagem
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Função para voltar para a imagem anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Avançar automaticamente a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({...prev, [index]: true}));
  };

  const handleImageError = (index: number) => {
    setErrorImages(prev => ({...prev, [index]: true}));
    console.error(`Erro ao carregar imagem de resultado ${index + 1}: ${images[index]}`);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-2xl">
        <div className="relative h-[300px] md:h-[450px] w-full bg-transparent">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {errorImages[index] ? (
                <div className="w-full h-full flex items-center justify-center text-white p-4 text-center">
                  <p>Não foi possível carregar esta imagem de resultado</p>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Resultado ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-race-green bg-opacity-70 text-white p-2 rounded-r-lg hover:bg-opacity-90"
        aria-label="Imagem anterior"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-race-green bg-opacity-70 text-white p-2 rounded-l-lg hover:bg-opacity-90"
        aria-label="Próxima imagem"
      >
        &#10095;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-race-light-green' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 