import { Users, MapPin, Zap, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: <Users size={32} color="var(--brand-red)" />,
      title: t('feat1Title'),
      description: t('feat1Desc')
    },
    {
      icon: <MapPin size={32} color="var(--brand-red)" />,
      title: t('feat2Title'),
      description: t('feat2Desc')
    },
    {
      icon: <Zap size={32} color="var(--brand-red)" />,
      title: t('feat3Title'),
      description: t('feat3Desc')
    },
    {
      icon: <ShieldCheck size={32} color="var(--brand-red)" />,
      title: t('feat4Title'),
      description: t('feat4Desc')
    }
  ];

  return (
    <section id="servicios" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{t('featTitle')} <span style={{ color: 'var(--brand-red)' }}>Aero Aitech?</span></h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            {t('featDesc')}
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
                backgroundColor: 'var(--surface-color)',
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
