import { useState, useEffect } from 'react';
import { Plane, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5491156197908?text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20vuelos%20privados.";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`} style={{ top: 0 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 60 }}>
          <div style={{ backgroundColor: 'var(--brand-red)', padding: '0.5rem', borderRadius: '8px', color: 'white' }}>
            <Plane size={24} />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '1px', color: isScrolled ? 'var(--text-primary)' : 'white' }}>
            AERO <span style={{ color: 'var(--brand-red)' }}>AITECH</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div style={{ display: 'none' }} className="md-flex gap-8 items-center">
          <a href="#servicios" className="nav-link" style={{ color: isScrolled ? 'var(--text-primary)' : 'white', fontWeight: 500 }}>Servicios</a>
          <a href="#galeria" className="nav-link" style={{ color: isScrolled ? 'var(--text-primary)' : 'white', fontWeight: 500 }}>El Avión</a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Reservar Vuelo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md-hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: isScrolled || mobileMenuOpen ? 'var(--text-primary)' : 'white', zIndex: 60, position: 'relative' }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div 
        className="md-hidden glass"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          display: mobileMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          backgroundColor: 'var(--bg-primary)',
          zIndex: 50,
          transition: 'all 0.3s ease'
        }}
      >
        <a href="#servicios" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 600 }}>Servicios</a>
        <a href="#galeria" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 600 }}>El Avión</a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1.25rem' }}>
          Reservar Vuelo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
