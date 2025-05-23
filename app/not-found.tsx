import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-race-dark-green">
      <h1 className="text-4xl font-bold mb-4 text-white">404 - Página Não Encontrada</h1>
      <p className="text-xl mb-8 text-gray-300">A página que você está procurando não existe.</p>
      <Link 
        href="/" 
        className="bg-race-light-green text-race-green font-bold px-6 py-3 rounded-lg transition duration-300 hover:scale-105"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
} 