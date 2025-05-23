'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsGrid() {
  // Mapeamento explícito de todas as imagens para garantir que todas são carregadas corretamente
  const testimonials = [
    '/testimonials/testimonials (1).jpeg',
    '/testimonials/testimonials (2).jpeg',
    '/testimonials/testimonials (3).jpeg',
    '/testimonials/testimonials (4).jpeg',
    '/testimonials/testimonials (5).jpeg',
    '/testimonials/testimonials (6).jpeg',
    '/testimonials/testimonials (7).jpeg',
    '/testimonials/testimonials (8).jpeg',
    '/testimonials/testimonials (9).jpeg',
    '/testimonials/testimonials (10).jpeg',
    '/testimonials/testimonials (11).jpeg',
    '/testimonials/testimonials (12).jpeg',
    '/testimonials/testimonials (13).jpeg',
  ];
  
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [errorImages, setErrorImages] = useState<Record<number, boolean>>({});
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  // Adiciona animação de entrada nos itens
  useEffect(() => {
    // Revela itens em sequência
    const timer = setTimeout(() => {
      const newVisibleItems: number[] = [];
      for (let i = 0; i < testimonials.length; i++) {
        const delay = i * 150; // 150ms entre cada item
        setTimeout(() => {
          setVisibleItems(prev => [...prev, i]);
        }, delay);
      }
      return newVisibleItems;
    }, 300);

    return () => clearTimeout(timer);
  }, [testimonials.length]);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({...prev, [index]: true}));
  };

  const handleImageError = (index: number) => {
    setErrorImages(prev => ({...prev, [index]: true}));
    console.error(`Erro ao carregar imagem ${index + 1}: ${testimonials[index]}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {testimonials.map((src, index) => (
        <div
          key={index}
          className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform bg-transparent opacity-0 ${
            visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'translate-y-8'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {errorImages[index] ? (
            <div className="w-full h-full flex items-center justify-center text-white p-4 text-center">
              <p>Não foi possível carregar a imagem do depoimento {index + 1}</p>
            </div>
          ) : (
            <>
              <img
                src={src}
                alt={`Depoimento ${index + 1}`}
                className="w-full h-full object-cover"
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-30 hover:opacity-70 transition-opacity duration-300"></div>
            </>
          )}
        </div>
      ))}
    </div>
  );
} 