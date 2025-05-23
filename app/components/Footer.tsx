import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-race-dark-green/60 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="inline-block border border-race-light-green/50 rounded px-3 py-1 text-sm font-bold text-white mb-4">+18</span>
        </div>
        
        <p className="text-gray-300 mb-2">Jogue com responsabilidade</p>
        <p className="text-gray-300 mb-4">Isso não é investimento</p>
        
        <p className="text-gray-400 text-sm mb-6 max-w-3xl mx-auto">
          Esse conteúdo segue todas as diretrizes impostas pela regulamentação e é um conteúdo publicitário sobre jogo responsável.
        </p>
        
        <p className="text-gray-400 text-xs">
          Cantos Race © 2025 – Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
} 