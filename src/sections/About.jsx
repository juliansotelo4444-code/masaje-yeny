import { Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '64px',
          alignItems: 'center',
        }}>

          {/* Imagen con fondo decorativo */}
          <div style={{ position: 'relative', flex: '1 1 320px', maxWidth: '420px' }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'var(--primary-soft)',
              borderRadius: '2rem',
              transform: 'translate(12px, 12px)',
              zIndex: 0,
            }} />
            <img
              src="/assets/yeny.jpg"
              alt="Terapeuta Yeny"
              style={{
                width: '100%',
                maxWidth: '350px',
                borderRadius: '1.5rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                objectFit: 'cover',
                position: 'relative',
                zIndex: 1,
                margin: '0 auto',
              }}
            />
          </div>

          {/* Contenido */}
          <div style={{ flex: '1 1 320px' }}>
            <span className="section-label">Conóceme</span>

            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              color: 'var(--text-h)',
              margin: '8px 0 24px',
            }}>
              Hola, soy Yeny
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-p)' }}>
                Soy profesional certificada en{' '}
                <strong style={{ color: 'var(--text-h)', fontWeight: 600 }}>Masoterapia</strong>,
                apasionada por el bienestar y la salud integral. Mi objetivo es brindarte
                un espacio seguro donde puedas desconectar del mundo.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-p)' }}>
                Me especialicé en técnicas de{' '}
                <strong style={{ color: 'var(--text-h)', fontWeight: 600 }}>piedras calientes</strong>{' '}
                para ofrecerte una relajación profunda que ayuda al cuerpo a sanar de manera natural.
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <div className="stat-card">
                <span className="stat-value">100%</span>
                <span className="stat-label">Atención Personalizada</span>
              </div>
              <div className="stat-card">
                <Sparkles style={{
                  color: 'var(--accent)',
                  width: 28,
                  height: 28,
                  marginBottom: 8,
                }} />
                <span className="stat-label">Productos Naturales</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
