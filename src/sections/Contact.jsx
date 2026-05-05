import { useState } from 'react';
import { MapPin, Phone,  } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    servicio: 'Piedras Calientes',
    mensaje: ''
  });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const numeroTel = "1173664964"; 
    const texto = `Hola! Mi nombre es ${formData.nombre}. Me interesa el servicio de ${formData.servicio}. ${formData.mensaje}`;
    const url = `https://wa.me/${numeroTel}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-24 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Info de la izquierda */}
          <div className="lg:w-2/5 bg-teal-800 text-teal-50 p-10 lg:p-12">
            <h3 className="text-3xl font-serif mb-6">Reserva tu momento</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-teal-300" />
                <p>Ituzaingó, Buenos Aires</p>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-teal-300" />
                <p>11 7366-4964</p>
              </div>
            </div>
          </div>

          {/* Formulario de la derecha */}
          <div className="lg:w-3/5 p-10 lg:p-12">
            <form onSubmit={handleWhatsApp} className="space-y-5">
              <input 
                type="text" 
                placeholder="Tu Nombre"
                className="w-full p-4 bg-stone-50 rounded-xl border border-stone-200 outline-none focus:ring-2 focus:ring-teal-500"
                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                required
              />
              <select 
                className="w-full p-4 bg-stone-50 rounded-xl border border-stone-200 outline-none"
                onChange={(e) => setFormData({...formData, servicio: e.target.value})}
              >
                <option>Piedras Calientes</option>
                <option>Masaje Relajante</option>
                <option>Masaje Descontracturante</option>
              </select>
              <textarea 
                placeholder="Mensaje (Opcional)"
                rows="4"
                className="w-full p-4 bg-stone-50 rounded-xl border border-stone-200 outline-none"
                onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
              ></textarea>
              <button type="submit" className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold hover:bg-teal-700 transition-all">
                Enviar Mensaje por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;