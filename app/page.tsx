import React from 'react'
import Image from 'next/image'
import ResultsSection from './components/ResultsSection'
import TestimonialsSection from './components/TestimonialsSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center relative">
      {/* Hero Section */}
      <div className="w-full min-h-screen relative flex md:items-center">
        {/* Background Images */}
        <div className="absolute inset-0 w-full h-full">
          <div className="block md:hidden">
            <Image
              src="/mobile.png"
              alt="Background Mobile"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/web.png"
              alt="Background Desktop"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Overlay com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-race-dark-red opacity-90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-[50vh] md:pt-0 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Logo */}
          <div className="mb-4 animate-float">
            <img
              src="/cantos-race.svg"
              alt="Race Logo"
              style={{ width: '350px', height: 'auto' }}
              className="drop-shadow-xl"
            />
          </div>

          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg text-shadow">
              A SUA EVOLUÇÃO NO JOGO COMEÇA AGORA!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Acesse o meu primeiro grupo VIP
            </p>
            <a 
              href="https://wa.link/dhn5lz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto md:mx-0 mx-auto"
            >
              <button className="relative bg-gradient-to-r from-race-red to-race-crimson text-white text-lg md:text-xl font-bold py-5 px-16 rounded-lg shadow-xl overflow-hidden group w-full md:w-auto">
                {/* Efeito de brilho no hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-race-light-red to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
                
                {/* Efeito de borda brilhante */}
                <span className="absolute inset-0 w-full h-full border-2 border-race-light-red rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                {/* Texto com efeito de sombra */}
                <span className="relative z-10 inline-block transform group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(30,144,255,0.8)]">
                  LISTA DE ESPERA
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Resultados Section */}
      <ResultsSection />

      {/* Depoimentos Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />
    </main>
  )
} 