import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const FloatingWhatsapp = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Using the exact link from Navbar as requested, but with the specific text
  const whatsappLink = "https://wa.me/5491156197908?text=Hola,%20quiero%20reservar%20un%20vuelo";

  if (!isVisible) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        animation: 'slideInRight 0.8s ease-out forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bubble / Tooltip */}
      <div style={{
        position: 'absolute',
        bottom: '100%',
        right: 0,
        marginBottom: '1.5rem',
        whiteSpace: 'nowrap',
        backgroundColor: 'var(--surface-color)',
        color: 'var(--text-primary)',
        fontSize: '0.875rem',
        fontWeight: 600,
        padding: '0.75rem 1.25rem',
        borderRadius: '1rem',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        opacity: isHovered ? 1 : 0,
        transform: isHovered ? 'translateY(0)' : 'translateY(12px)',
        transition: 'all 0.3s ease',
        pointerEvents: 'none',
        transformOrigin: 'bottom right',
        border: '1px solid #f1f5f9'
      }}>
        {t('floatingWhatsappMsg') || "Hola, quiero reservar un vuelo..."}
        {/* Triangle pointer */}
        <div style={{
          position: 'absolute',
          bottom: '-8px',
          right: '24px',
          width: '16px',
          height: '16px',
          backgroundColor: 'var(--surface-color)',
          borderBottom: '1px solid #f1f5f9',
          borderRight: '1px solid #f1f5f9',
          transform: 'rotate(45deg)'
        }}></div>
      </div>
      
      {/* Button */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '64px',
          height: '64px',
          backgroundColor: isHovered ? '#20bd5a' : '#25D366',
          color: 'white',
          borderRadius: '50%',
          boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        aria-label="Contactar por WhatsApp"
      >
        <svg style={{ width: '36px', height: '36px', filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.05))' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      <style>
        {`
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(3rem);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default FloatingWhatsapp;
