import { useState, useEffect, useRef } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import avion1 from '../assets/avion1.png';

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
      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '0.875rem', backgroundColor: 'white', transition: 'border-color 0.2s', position: 'relative', zIndex: showOptions ? 20 : 1 }}>
        <MapPin size={20} color={iconColor} style={{ marginRight: '0.5rem', flexShrink: 0 }} />
        <input 
          type="text" 
          name={name}
          value={value}
          onChange={handleInputChange}
          onFocus={() => {
            if (value.length > 0) {
              const filtered = LOCATIONS.filter(loc => loc.toLowerCase().includes(value.toLowerCase()));
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
        <ul style={{ 
          position: 'absolute', 
          top: '100%', 
          left: 0, 
          right: 0, 
          backgroundColor: 'white', 
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
  const whatsappNumber = "5491156197908";

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
      {/* Banner de Imagen Superior */}
      <div 
        style={{
          width: '100%',
          height: '60vh',
          minHeight: '450px',
          backgroundImage: `url(${avion1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        {/* Sutil gradiente oscuro arriba para que resalte la Navbar si es transparente */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(10, 17, 40, 0.4) 0%, rgba(10, 17, 40, 0) 40%)'
          }}
        />
      </div>

      {/* Contenido Principal y Formulario Flotante */}
      <div className="container" style={{ position: 'relative', marginTop: '-6rem', paddingBottom: '4rem', zIndex: 10 }}>
        
        <div 
          className="glass animate-fade-in"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)', 
            borderRadius: '16px', 
            padding: '3rem 2rem', 
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--text-primary)', marginBottom: '0.75rem', fontWeight: 800 }}>
              Vuelos privados en <span style={{ color: 'var(--brand-red)' }}>Salta, Argentina</span>
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Alquile su avión privado para viajes de negocios o turismo en todo el norte argentino con la mejor comodidad.
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
              label="Origen" 
              name="origin" 
              defaultValue="Salta Capital, Salta" 
              placeholder="¿De dónde sales?" 
              iconColor="var(--brand-red)" 
            />

            <AutocompleteInput 
              label="Destino" 
              name="destination" 
              placeholder="¿A dónde viajas?" 
              iconColor="var(--brand-blue)" 
            />

            <button type="submit" className="btn-primary" style={{ flex: '0 1 auto', height: '54px', padding: '0 2.5rem', fontSize: '1.125rem' }}>
              Cotizar ahora
            </button>
            
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
