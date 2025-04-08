import TestimonialsGrid from './TestimonialsGrid';
import ParticipateButton from './ParticipateButton';

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 relative">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 z-0"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white drop-shadow-lg text-shadow">
            VEJA O QUE NOSSOS MEMBROS TEM A DIZER
          </h2>
          <div className="w-32 h-1 bg-race-light-green mx-auto rounded-full"></div>
        </div>
        
        <TestimonialsGrid />
        
        <div className="mt-16">
          <ParticipateButton />
        </div>
      </div>
    </section>
  );
} 