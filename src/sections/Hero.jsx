
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* <img 
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=80" 
          alt="Spa background" 
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-stone-900/40"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="max-w-2xl bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
          <span className="text-teal-300 font-medium tracking-widest uppercase text-sm mb-4 block">
            Masoterapia & Bienestar
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-6">
            Encuentra tu equilibrio y paz interior
          </h1>
          <p className="text-lg text-stone-100 mb-8 leading-relaxed">
            Terapias manuales diseñadas para aliviar la tensión, reducir el estrés y revitalizar tu cuerpo de la mano de profesionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contacto" className="bg-teal-600 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-500 transition-all flex items-center justify-center gap-2">
              Reserva tu sesión <ArrowRight size={18} />
            </a>
            <a href="#servicios" className="bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-all text-center">
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;