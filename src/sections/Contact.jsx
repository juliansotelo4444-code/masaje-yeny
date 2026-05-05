import { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';

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
    <section id="contacto" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contacto</span>
          <h2 className="section-title">Reservá tu momento</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-wrapper">
          {/* Panel izquierdo */}
          <div className="contact-panel" style={{ flex: '0 0 38%' }}>
            <h3>Hablemos</h3>
            <div className="contact-info-item">
              <MapPin className="contact-info-icon" size={20} />
              <p>Ituzaingó, Buenos Aires</p>
            </div>
            <div className="contact-info-item">
              <Phone className="contact-info-icon" size={20} />
              <p>11 7366-4964</p>
            </div>
          </div>

          {/* Formulario */}
          <div className="contact-form">
            <form onSubmit={handleWhatsApp} className="form-stack">
              <input
                type="text"
                placeholder="Tu nombre"
                className="input"
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
              />
              <select
                className="select"
                onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
              >
                <option>Piedras Calientes</option>
                <option>Masaje Relajante</option>
                <option>Masaje Descontracturante</option>
              </select>
              <textarea
                placeholder="Mensaje (opcional)"
                className="textarea"
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              />
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;