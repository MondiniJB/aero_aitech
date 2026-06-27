import { useState, useEffect, useRef } from 'react';
import { Plane, ChevronDown, Sun, Moon, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        border: '1px solid #e2e8f0',
        padding: '0.5rem',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: 'var(--surface-color)',
        color: 'var(--text-primary)',
        transition: 'all 0.2s ease'
      }}
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      <button 
        onClick={toggleDropdown}
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.25rem', 
          background: 'transparent', 
          border: '1px solid #e2e8f0', 
          padding: '0.4rem 0.75rem', 
          borderRadius: '8px', 
          fontSize: '1.25rem',
          cursor: 'pointer',
          backgroundColor: isOpen ? 'var(--bg-secondary)' : 'var(--surface-color)',
          transition: 'background-color 0.2s'
        }}
      >
        <img 
          src={language === 'es' ? 'https://flagcdn.com/w40/ar.png' : 'https://flagcdn.com/w40/us.png'} 
          alt={language === 'es' ? 'Español' : 'English'}
          style={{ width: '24px', borderRadius: '2px', objectFit: 'cover' }}
        />
        <ChevronDown size={16} color="var(--text-primary)" />
      </button>

      {isOpen && (
        <ul style={{ 
          position: 'absolute', 
          top: '100%', 
          right: 0, 
          marginTop: '0.5rem',
          backgroundColor: 'var(--surface-color)', 
          border: '1px solid #e2e8f0', 
          borderRadius: '8px', 
          boxShadow: 'var(--shadow-md)',
          listStyle: 'none',
          padding: '0.5rem 0',
          minWidth: '80px',
          zIndex: 60
        }}>
          <li 
            onClick={() => selectLanguage('es')}
            style={{ 
              padding: '0.5rem 1rem', 
              cursor: 'pointer', 
              textAlign: 'center',
              fontSize: '1.25rem',
              backgroundColor: language === 'es' ? 'var(--bg-secondary)' : 'transparent',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--bg-secondary)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = language === 'es' ? 'var(--bg-secondary)' : 'transparent'}
          >
            <img 
              src="https://flagcdn.com/w40/ar.png" 
              alt="Español" 
              style={{ width: '24px', borderRadius: '2px', verticalAlign: 'middle' }} 
            />
          </li>
          <li 
            onClick={() => selectLanguage('en')}
            style={{ 
              padding: '0.5rem 1rem', 
              cursor: 'pointer', 
              textAlign: 'center',
              fontSize: '1.25rem',
              backgroundColor: language === 'en' ? 'var(--bg-secondary)' : 'transparent',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--bg-secondary)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = language === 'en' ? 'var(--bg-secondary)' : 'transparent'}
          >
            <img 
              src="https://flagcdn.com/w40/us.png" 
              alt="English" 
              style={{ width: '24px', borderRadius: '2px', verticalAlign: 'middle' }} 
            />
          </li>
        </ul>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5491156197908?text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20vuelos%20privados.";

  return (
    <nav style={{ 
      position: 'sticky', 
      top: 0, 
      left: 0, 
      width: '100%', 
      zIndex: 50, 
      transition: 'all 0.3s ease', 
      padding: '1rem 0',
      backgroundColor: 'var(--surface-color)',
      boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', zIndex: 60 }}>
          <div style={{ 
            backgroundColor: 'var(--brand-red)', 
            width: '38px',
            height: '38px',
            borderRadius: '8px', 
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Plane size={22} />
          </div>
          <span style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '1px', color: 'var(--text-primary)', lineHeight: 1 }}>
            AERO <span style={{ color: 'var(--brand-red)' }}>AITECH</span>
          </span>
        </a>

        {/* Menu (Text + Utilities) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          
          {/* Desktop Text Links */}
          <div className="desktop-only" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#servicios" className="nav-link" style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1rem' }}>{t('navServices')}</a>
            <a href="#galeria" className="nav-link" style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1rem' }}>{t('navAircraft')}</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.75rem', fontSize: '1rem' }}>
              {t('navBook')}
            </a>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <LanguageSwitcher />
            <ThemeToggleButton />
            <button 
              className="mobile-only"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: '1px solid #e2e8f0',
                padding: '0.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: 'var(--surface-color)',
                color: 'var(--text-primary)',
                transition: 'all 0.2s ease',
                marginLeft: '0.25rem'
              }}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-only animate-dropdown" style={{ 
          position: 'absolute', 
          top: '100%', 
          left: 0, 
          width: '100%', 
          backgroundColor: 'var(--surface-color)',
          borderTop: '1px solid var(--glass-border)',
          boxShadow: 'var(--shadow-md)',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          zIndex: 40
        }}>
          <a href="#servicios" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.125rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>{t('navServices')}</a>
          <a href="#galeria" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.125rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>{t('navAircraft')}</a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary" style={{ padding: '0.875rem', fontSize: '1rem', textAlign: 'center', marginTop: '0.5rem', width: '100%' }}>
            {t('navBook')}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
