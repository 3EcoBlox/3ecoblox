import { useLanguage } from "@/contexts/LanguageContext";

const DuoCTA = () => {
  const { t } = useLanguage();

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #1CB0F6 0%, #CE82FF 100%)',
        padding: 'clamp(60px, 10vw, 100px) 24px',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          color: 'white',
          marginBottom: '24px',
          fontWeight: '800'
        }}>
          {t('cta.title')}
        </h2>

        <p style={{
          fontSize: 'clamp(20px, 3vw, 28px)',
          fontWeight: '700',
          color: 'white',
          marginBottom: '20px'
        }}>
          {t('cta.subtitle')}
        </p>

        <p style={{
          fontSize: 'clamp(16px, 2.5vw, 24px)',
          color: 'white',
          marginBottom: '40px',
          fontWeight: '500',
          maxWidth: '900px',
          margin: '0 auto 40px',
          padding: '0 20px'
        }}>
          {t('cta.description')}
        </p>

        {/* Feature highlights */}
        <div style={{
          display: 'flex',
          gap: 'clamp(12px, 2vw, 20px)',
          justifyContent: 'center',
          flexWrap: 'wrap',
          margin: '30px 0'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: 'clamp(10px, 1.5vw, 12px) clamp(16px, 2vw, 24px)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)'
          }}>
            <span style={{ color: 'white', fontWeight: '700', fontSize: 'clamp(13px, 1.5vw, 16px)' }}>✓ {t('cta.stayMotivated')}</span>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: 'clamp(10px, 1.5vw, 12px) clamp(16px, 2vw, 24px)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)'
          }}>
            <span style={{ color: 'white', fontWeight: '700', fontSize: 'clamp(13px, 1.5vw, 16px)' }}>✓ {t('cta.personalizedLearning')}</span>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: 'clamp(10px, 1.5vw, 12px) clamp(16px, 2vw, 24px)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)'
          }}>
            <span style={{ color: 'white', fontWeight: '700', fontSize: 'clamp(13px, 1.5vw, 16px)' }}>✓ {t('cta.backedByScience')}</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfS6jRLhPcyII9GF-P8eNXgYwSPlXM80ZE0sf6eKLIJdIU7Zw/viewform', '_blank')}
          style={{
            background: '#FFC800',
            color: '#3c3c3c',
            padding: 'clamp(14px, 2vw, 18px) clamp(32px, 4vw, 40px)',
            fontSize: 'clamp(15px, 2vw, 18px)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            border: 'none',
            borderRadius: '16px',
            cursor: 'pointer',
            boxShadow: '0 4px 0 #D6A600',
            transition: 'all 0.2s',
            marginTop: '20px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 0 #D6A600';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 0 #D6A600';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translateY(2px)';
            e.currentTarget.style.boxShadow = '0 2px 0 #D6A600';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 0 #D6A600';
          }}
        >
          {t('cta.startTrial')}
        </button>
      </div>
    </section>
  );
};

export default DuoCTA;
