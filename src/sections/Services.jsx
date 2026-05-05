
import { ArrowRight } from 'lucide-react';
import { servicios } from '../data'; // Importamos la data

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Cabecera de sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">Nuestros Tratamientos</h2>
          <div className="w-16 h-1 bg-teal-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-stone-600 text-lg">
            Cada sesión está adaptada a tus necesidades, utilizando técnicas profesionales para brindarte el máximo beneficio.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-stone-100 group relative">
              
              {servicio.especialidad && (
                <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 uppercase">
                  Especialidad
                </div>
              )}

              <div className="h-56 overflow-hidden">
                <img 
                  src={servicio.imagen} 
                  alt={servicio.titulo} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                    <servicio.icono size={24} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-stone-800">{servicio.titulo}</h3>
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {servicio.descripcion}
                </p>
                <a href="#contacto" className="text-teal-600 font-medium hover:text-teal-700 flex items-center gap-1">
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