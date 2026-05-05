
import { ArrowRight } from 'lucide-react';
import { servicios } from '../data';

const Services = () => {
  return (
    <section id="servicios" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Lo que ofrezco</span>
          <h2 className="section-title">Nuestros Tratamientos</h2>
          <div className="section-divider"></div>
          <p className="section-desc">
            Cada sesión está adaptada a tus necesidades, utilizando técnicas profesionales
            para brindarte el máximo beneficio.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {servicios.map((servicio) => (
            <div key={servicio.id} className="card card-hover" style={{ position: 'relative' }}>
              {servicio.especialidad && (
                <div className="card-badge">Especialidad</div>
              )}
              <div className="card-image">
                <img src={servicio.imagen} alt={servicio.titulo} />
              </div>
              <div className="card-body">
                <div className="card-icon">
                  <servicio.icono size={22} />
                </div>
                <h3 className="card-title">{servicio.titulo}</h3>
                <p className="card-text">{servicio.descripcion}</p>
                <a href="#contacto" className="btn btn-ghost">
                  Consultar disponibilidad <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;