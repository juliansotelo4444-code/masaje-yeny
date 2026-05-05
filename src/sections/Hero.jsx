import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=80"
          alt="Spa relajante"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-card">
          <span className="hero-subtitle">Masoterapia & Bienestar</span>
          <h1 className="hero-title">Encuentra tu equilibrio y paz interior</h1>
          <p className="hero-text">
            Terapias manuales diseñadas para aliviar la tensión, reducir el estrés y revitalizar tu cuerpo.
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="btn btn-primary">
              Reserva tu sesión <ArrowRight size={18} />
            </a>
            <a href="#servicios" className="btn btn-outline">
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;