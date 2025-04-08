/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true, // Desativa a otimização para garantir compatibilidade máxima
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    remotePatterns: [],
  },
  experimental: {
    // Algumas otimizações experimentais que podem ajudar no desempenho
    optimizeCss: true,
    scrollRestoration: true,
  }
}

module.exports = nextConfig 