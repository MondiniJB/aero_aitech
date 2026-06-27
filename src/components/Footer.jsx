import { Plane } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = "1156197908";
  const whatsappLink = `https://wa.me/549${whatsappNumber}?text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20vuelos%20privados.`;

  return (
    <footer style={{ backgroundColor: '#0a1128', color: 'white', padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div style={{ backgroundColor: 'var(--brand-red)', padding: '0.5rem', borderRadius: '8px', color: 'white' }}>
                <Plane size={24} />
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '1px' }}>
                AERO <span style={{ color: 'var(--brand-red)' }}>AITECH</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              Vuelos privados por toda la Provincia de Salta y Provincias vecinas. Piloto Comercial Daniel Luna.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', fontWeight: 600 }}>Navegación</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s ease' }} onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.7)'}>Inicio</a></li>
              <li><a href="#servicios" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s ease' }} onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.7)'}>Servicios</a></li>
              <li><a href="#galeria" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s ease' }} onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.7)'}>El Avión</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', fontWeight: 600 }}>Contacto</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ color: 'rgba(255,255,255,0.7)' }}>
                <span style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>WhatsApp</span>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white' }}>
                  +54 9 {whatsappNumber}
                </a>
              </li>
              <li style={{ color: 'rgba(255,255,255,0.7)' }}>
                <span style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Instagram / TikTok</span>
                <a href="https://instagram.com/aero.aitech" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 500 }}>
                  @aero.aitech
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
          <p>&copy; {new Date().getFullYear()} Aero Aitech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
