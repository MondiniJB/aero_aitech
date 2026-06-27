import avion2 from '../assets/avion2.jpg';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  return (
    <section id="galeria" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem', alignItems: 'center' }}>
          
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
              {t('galTitlePrefix')} <span style={{ color: 'var(--brand-blue)' }}>{t('galTitleHighlight')}</span>
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              {t('galDesc1')}
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.8 }}>
              {t('galDesc2')}
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[t('galList1'), t('galList2'), t('galList3')].map((item, index) => (
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
