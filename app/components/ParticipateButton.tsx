import React from 'react';

export default function ParticipateButton() {
  return (
    <a 
      href="https://api.whatsapp.com/send?phone=557193320242&text=Quero%20entrar%20no%20grupo%20do%20GRATUITO%20Cantos%20Race%20do%20L%C3%A9o%20Bonavides"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <button className="relative bg-gradient-to-r from-race-green to-race-forest-green text-race-light-green text-lg md:text-xl font-bold py-5 px-16 rounded-lg shadow-xl overflow-hidden group">
        {/* Efeito de brilho no hover */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-race-light-green to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
        
        {/* Efeito de borda brilhante */}
        <span className="absolute inset-0 w-full h-full border-2 border-race-light-green rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></span>
        
        {/* Texto com efeito de sombra */}
        <span className="relative z-10 inline-block transform group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]">
          PARTICIPE AGORA
        </span>
      </button>
    </a>
  );
} 