import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import avion1 from '../assets/avion1.png';
import avion2 from '../assets/avion2.jpg';

const IMAGES = [avion1, avion2];

const LOCATIONS = [
  "Salta Capital, Salta",
  "Cafayate, Salta",
  "Tartagal, Salta",
  "San Ramón de la Nueva Orán, Salta",
  "San Antonio de los Cobres, Salta",
  "San Miguel de Tucumán, Tucumán",
  "Tafí del Valle, Tucumán",
  "Yerba Buena, Tucumán",
  "San Salvador de Jujuy, Jujuy",
  "Purmamarca, Jujuy",
  "Tilcara, Jujuy",
  "Humahuaca, Jujuy",
  "San Fernando del Valle de Catamarca, Catamarca",
  "Santiago del Estero Capital, Santiago del Estero",
  "Termas de Río Hondo, Santiago del Estero",
  "La Rioja Capital, La Rioja",
  "Buenos Aires (CABA)",
  "Córdoba Capital, Córdoba",
  "Mendoza Capital, Mendoza",
  "Rosario, Santa Fe",
  "Neuquén Capital, Neuquén",
  "San Carlos de Bariloche, Río Negro",
  "Ushuaia, Tierra del Fuego"
];

const AutocompleteInput = ({ label, placeholder, iconColor, name, defaultValue = "" }) => {
  const [value, setValue] = useState(defaultValue);
  const [lastSearchQuery, setLastSearchQuery] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setValue(userInput);
    setLastSearchQuery(userInput);
    
    if (userInput.length > 0) {
      const filtered = LOCATIONS.filter(location => 
        location.toLowerCase().includes(userInput.toLowerCase())
      );
      setFilteredOptions(filtered);
      setShowOptions(true);
    } else {
      setFilteredOptions(LOCATIONS);
      setShowOptions(true);
    }
  };

  const handleOptionClick = (option) => {
    setValue(option);
    setShowOptions(false);
  };

  return (
    <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'relative' }} ref={wrapperRef}>
      <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
        {label}
      </label>
      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '0.875rem', backgroundColor: 'var(--surface-color)', transition: 'border-color 0.2s', position: 'relative', zIndex: showOptions ? 20 : 1 }}>
        <MapPin size={20} color={iconColor} style={{ marginRight: '0.5rem', flexShrink: 0 }} />
        <input 
          type="text" 
          name={name}
          value={value}
          onChange={handleInputChange}
          onFocus={() => {
            if (lastSearchQuery.length > 0) {
              const filtered = LOCATIONS.filter(loc => loc.toLowerCase().includes(lastSearchQuery.toLowerCase()));
              setFilteredOptions(filtered);
            } else {
              setFilteredOptions(LOCATIONS);
            }
            setShowOptions(true);
          }}
          placeholder={placeholder}
          autoComplete="off"
          required={!defaultValue}
          style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem', color: 'var(--text-primary)', backgroundColor: 'transparent' }} 
        />
      </div>
      
      {showOptions && filteredOptions.length > 0 && (
        <ul 
          className="animate-dropdown"
          style={{ 
          position: 'absolute', 
          top: '100%', 
          left: 0, 
          right: 0, 
          backgroundColor: 'var(--surface-color)', 
          border: '1px solid #e2e8f0', 
          borderRadius: '8px', 
          marginTop: '4px',
          boxShadow: 'var(--shadow-lg)',
          listStyle: 'none',
          padding: '0.5rem 0',
          maxHeight: '200px',
          overflowY: 'auto',
          zIndex: 30
        }}>
          {filteredOptions.map((option, index) => (
            <li 
              key={index} 
              onClick={() => handleOptionClick(option)}
              style={{ 
                padding: '0.75rem 1rem', 
                cursor: 'pointer', 
                transition: 'background-color 0.2s',
                fontSize: '0.95rem',
                color: 'var(--text-primary)'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--bg-secondary)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef(null);
  
  const whatsappNumber = "5491156197908";

  // Clonamos la primera y última imagen para el efecto de scroll infinito real
  const EXTENDED_IMAGES = [IMAGES[IMAGES.length - 1], ...IMAGES, IMAGES[0]];

  // Función para iniciar o reiniciar el temporizador
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 8000);
  }, []);

  // Iniciar auto-scroll
  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const nextImage = () => {
    // Evitar clicks rápidos que saquen al carrusel de los límites extendidos
    if (currentIndex >= EXTENDED_IMAGES.length - 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    startTimer(); // Reiniciar contador de 8 seg
  };

  const prevImage = () => {
    // Evitar clicks rápidos que saquen al carrusel de los límites extendidos
    if (currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    startTimer(); // Reiniciar contador de 8 seg
  };

  // Handler para el truco de scroll infinito sin cortes visuales
  const handleTransitionEnd = () => {
    if (currentIndex <= 0) {
      // Llegamos al inicio falso, saltar al final real sin animación
      setIsTransitioning(false);
      setCurrentIndex(IMAGES.length);
    } else if (currentIndex >= EXTENDED_IMAGES.length - 1) {
      // Llegamos al final falso, saltar al inicio real sin animación
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  // Función para enviar los datos de cotización a WhatsApp
  const handleBooking = (e) => {
    e.preventDefault();
    const origin = e.target.origin.value || 'Salta Capital, Salta';
    const destination = e.target.destination.value;
    const text = `Hola, quisiera cotizar un vuelo privado.\nOrigen: ${origin}\nDestino: ${destination}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Banner de Imagen Superior con Carrusel Deslizante Infinito */}
      <div 
        style={{
          width: '100%',
          height: '60vh',
          minHeight: '450px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Track de imágenes */}
        <div
          onTransitionEnd={handleTransitionEnd}
          style={{
            display: 'flex',
            width: `${EXTENDED_IMAGES.length * 100}%`,
            height: '100%',
            transform: `translateX(-${currentIndex * (100 / EXTENDED_IMAGES.length)}%)`,
            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)' : 'none'
          }}
        >
          {EXTENDED_IMAGES.map((imgSrc, idx) => (
            <div 
              key={idx}
              style={{
                width: `${100 / EXTENDED_IMAGES.length}%`,
                height: '100%',
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                flexShrink: 0
              }}
            />
          ))}
        </div>

        {/* Flechas del Carrusel */}
        <button 
          onClick={prevImage}
          style={{
            position: 'absolute',
            left: '2vw',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            zIndex: 10
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.3)'}
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>

        <button 
          onClick={nextImage}
          style={{
            position: 'absolute',
            right: '2vw',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            zIndex: 10
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.3)'}
        >
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>

      </div>

      {/* Contenido Principal y Formulario Flotante */}
      <div className="container" style={{ position: 'relative', marginTop: '-6rem', paddingBottom: '4rem', zIndex: 10 }}>
        
        <div 
          className="glass animate-fade-in"
          style={{ 
            backgroundColor: 'var(--glass-bg)', 
            borderRadius: '16px', 
            padding: '3rem 2rem', 
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--text-primary)', marginBottom: '0.75rem', fontWeight: 800 }}>
              {t('heroTitlePrefix')} <span style={{ color: 'var(--brand-red)' }}>Salta, Argentina</span>
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              {t('heroDescription')}
            </p>
          </div>

          {/* Formulario de Cotización */}
          <form 
            onSubmit={handleBooking} 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '1rem', 
              alignItems: 'flex-end', 
              justifyContent: 'center',
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            
            <AutocompleteInput 
              label={t('heroOrigin')} 
              name="origin" 
              defaultValue="Salta Capital, Salta" 
              placeholder={t('heroOriginPlaceholder')} 
              iconColor="var(--brand-red)" 
            />

            <AutocompleteInput 
              label={t('heroDestination')} 
              name="destination" 
              placeholder={t('heroDestinationPlaceholder')} 
              iconColor="var(--brand-blue)" 
            />

            <button type="submit" className="btn-primary" style={{ flex: '0 1 auto', height: '54px', padding: '0 2.5rem', fontSize: '1.125rem' }}>
              {t('heroQuoteBtn')}
            </button>
            
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
