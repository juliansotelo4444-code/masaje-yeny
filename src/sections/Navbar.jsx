import { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '0 24px',
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease',
      background: scrolled ? 'rgba(253, 252, 249, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 1px 0 var(--border)' : 'none',
    }}>

      {/* Logo */}
      <a href="#inicio" style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        textDecoration: 'none',
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: scrolled ? 'var(--primary-soft)' : 'rgba(255,255,255,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.3s ease',
        }}>
          <Leaf size={18} style={{ color: scrolled ? 'var(--accent)' : 'white' }} />
        </div>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.25rem',
          fontWeight: 600,
          color: scrolled ? 'var(--text-h)' : 'white',
          transition: 'color 0.3s ease',
        }}>
          Yeny
        </span>
      </a>

      {/* Links — desktop */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '32px',
      }} className="nav-links">
        {[
          { label: 'Inicio', href: '#inicio' },
          { label: 'Sobre mí', href: '#sobre-mi' },
          { label: 'Servicios', href: '#servicios' },
        ].map(({ label, href }) => (
          <a key={href} href={href} style={{
            fontSize: '0.9rem',
            fontWeight: 500,
            color: scrolled ? 'var(--text-p)' : 'rgba(255,255,255,0.85)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
            onMouseEnter={e => e.target.style.color = scrolled ? 'var(--accent)' : 'white'}
            onMouseLeave={e => e.target.style.color = scrolled ? 'var(--text-p)' : 'rgba(255,255,255,0.85)'}
          >
            {label}
          </a>
        ))}
        <a href="#contacto" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>
          Reservar
        </a>
      </div>

      {/* Hamburger — mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-hamburger"
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'none', flexDirection: 'column', gap: '5px', padding: '4px',
        }}
        aria-label="Menú"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: 24, height: 2,
            background: scrolled ? 'var(--text-h)' : 'white',
            borderRadius: 2,
            transition: 'background 0.3s ease',
          }} />
        ))}
      </button>

      {/* Menú mobile */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '72px', left: 0, right: 0,
          background: 'rgba(253, 252, 249, 0.97)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid var(--border)',
          padding: '24px',
          display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          {[
            { label: 'Inicio', href: '#inicio' },
            { label: 'Sobre mí', href: '#sobre-mi' },
            { label: 'Servicios', href: '#servicios' },
            { label: 'Contacto', href: '#contacto' },
          ].map(({ label, href }) => (
            <a key={href} href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '1rem', fontWeight: 500,
                color: 'var(--text-h)', textDecoration: 'none',
              }}>
              {label}
            </a>
          ))}
          <a href="#contacto" className="btn btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ textAlign: 'center', justifyContent: 'center' }}>
            Reservar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;