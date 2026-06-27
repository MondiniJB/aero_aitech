import { Users, MapPin, Zap, ShieldCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Users size={32} color="var(--brand-red)" />,
      title: "Capacidad para 5/6 Personas",
      description: "Viaja con tu equipo, familia o amigos con total comodidad en nuestra moderna aeronave."
    },
    {
      icon: <MapPin size={32} color="var(--brand-red)" />,
      title: "Destinos a Medida",
      description: "Vuelos por toda la Provincia de Salta y provincias vecinas. Tú eliges el destino, nosotros te llevamos."
    },
    {
      icon: <Zap size={32} color="var(--brand-red)" />,
      title: "Sin Demoras",
      description: "Evita las largas filas y tiempos de espera de los vuelos comerciales. Optimiza tu tiempo al máximo."
    },
    {
      icon: <ShieldCheck size={32} color="var(--brand-red)" />,
      title: "Seguridad y Privacidad",
      description: "Viaja con total discreción y los más altos estándares de seguridad aeronáutica."
    }
  ];

  return (
    <section id="servicios" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>¿Por qué volar con <span style={{ color: 'var(--brand-red)' }}>Aero Aitech?</span></h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Ofrecemos un servicio de vuelos charter diseñado para quienes valoran su tiempo, la privacidad y el confort.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass"
              style={{ 
                padding: '2rem', 
                borderRadius: '16px', 
                backgroundColor: 'white',
                boxShadow: 'var(--shadow-md)',
                transition: 'transform 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ backgroundColor: 'rgba(211, 47, 47, 0.1)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
