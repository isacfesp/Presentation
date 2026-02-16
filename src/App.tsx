
import Header from './components/Header';
import Footer from './components/Footer';
import CertificateGrid from './components/CertificateGrid';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white font-sans selection:bg-purple-500/30">
      <Header />

      <main className="w-full mx-auto px-4 sm:px-8 lg:px-12 pt-24 md:pt-32 pb-12 overflow-x-hidden">
        {/* Hero Section */}
        <section id="about" className="min-h-[70vh] flex items-center mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center w-full">
            {/* Texto */}
            <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-balance leading-none">
                Hola, soy <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Isac España</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed mb-10 text-pretty max-w-3xl">
                Desarrollador Fullstack apasionado por la tecnología.
                Con sólida experiencia en <span className="text-blue-400 font-medium">Python</span>, <span className="text-purple-400 font-medium">DevOps</span>,
                <span className="text-green-400 font-medium">Contenerización</span> y arquitecturas modernas.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                <a href="#certificates" className="px-10 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] active:scale-95 text-center">
                  Ver Certificados
                </a>
                <a href="#contact" className="px-10 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm active:scale-95 text-center text-lg">
                  Contactar
                </a>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end py-8 lg:py-0">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-purple-600 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                {/* Circle Container */}
                <div className="relative w-full h-full rounded-full bg-zinc-900 border-4 border-white/10 flex items-center justify-center overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-[url('https://via.placeholder.com/600')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity hover:scale-110 duration-700"></div>
                  <span className="text-gray-400 text-lg font-medium z-10 bg-black/50 px-6 py-3 rounded-full backdrop-blur-md border border-white/10">
                    Tu Foto Aquí
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="min-h-[50vh]">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
            Certificaciones
          </h3>

          <CertificateGrid />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
