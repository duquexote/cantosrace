"use client";

import React, { useState } from 'react';

type FaqItemProps = {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 overflow-hidden rounded-lg border border-race-crimson/30 bg-black/20 backdrop-blur-sm">
      <button
        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-race-dark-red/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg md:text-xl font-semibold text-white">{question}</span>
        <span className={`ml-6 flex-shrink-0 text-race-light-red transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-race-crimson/30 px-6 py-4">
          <p className="text-gray-200">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function FaqSection() {
  const faqItems = [
    {
      question: "Todos que estiverem na lista de espera, terá acesso ao vip?",
      answer: "Não, no dia do lançamento serão limitadas as vagas para manter a alta qualidade na entrega."
    },
    {
      question: "Quando será liberado o grupo VIP?",
      answer: "As vagas serão liberadas no início do mês de Junho. A data será divulgada dentro da lista de espera."
    },
    {
      question: "Qual a taxa de assertividade das análises de Leo?",
      answer: "Ele segue uma sequência de 6 meses com mais de 50% de lucro sobre a banca."
    },
    {
      question: "O que terá dentro do VIP?",
      answer: "Acesso à sala de sinais no telegram, comunidade, apostila, agente IA e um curso que te ensina a analisar as apostas como Leo."
    }
  ];

  return (
    <section className="py-16 px-4 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-race-red opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-race-crimson opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white drop-shadow-lg text-shadow">
            PERGUNTAS FREQUENTES
          </h2>
          <div className="w-32 h-1 bg-race-light-red mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o grupo VIP e como fazer parte dessa comunidade exclusiva
          </p>
        </div>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://wa.link/dhn5lz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="relative bg-gradient-to-r from-race-red to-race-crimson text-white text-lg font-bold py-4 px-8 rounded-lg shadow-xl overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-race-light-red to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
              <span className="absolute inset-0 w-full h-full border-2 border-race-light-red rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 inline-block transform group-hover:scale-105 transition-transform duration-300">
                ENTRAR PARA LISTA DE ESPERA
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
