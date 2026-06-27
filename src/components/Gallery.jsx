import avion2 from '../assets/avion2.jpg';

const Gallery = () => {
  return (
    <section id="galeria" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <div style={{ position: 'relative' }}>
            <div 
              style={{ 
                position: 'absolute', 
                top: '-20px', 
                left: '-20px', 
                width: '100%', 
                height: '100%', 
                border: '4px solid var(--brand-red)', 
                borderRadius: '16px',
                zIndex: 0 
              }}
            />
            <img 
              src={avion2} 
              alt="Avión Aero Aitech en pista" 
              style={{ 
                width: '100%', 
                borderRadius: '16px', 
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
                zIndex: 1,
                objectFit: 'cover',
                aspectRatio: '4/3'
              }} 
            />
          </div>

          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Nuestra <span style={{ color: 'var(--brand-blue)' }}>Aeronave</span>
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              Contamos con una aeronave de primer nivel con capacidad para 5 a 6 pasajeros, equipada con tecnología de última generación para garantizar un viaje placentero y seguro.
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.8 }}>
              El interior está diseñado pensando en tu comodidad, permitiéndote relajarte o continuar con tus negocios mientras volamos hacia tu próximo destino en el norte argentino.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Vuelos ejecutivos', 'Traslados turísticos privados', 'Viajes de urgencia'].map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontWeight: 500 }}>
                  <span style={{ color: 'var(--brand-red)' }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
