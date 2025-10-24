import { useLanguage } from "@/contexts/LanguageContext";
import ContactPopup from "@/components/ContactPopup";
import VideoPopup from "@/components/VideoPopup";

const DuoHero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="duo-hero">
      <div className="duo-hero-content">
        <div className="duo-hero-left">
          <h1>
            {t('hero.title')} <span style={{ color: '#58CC02' }}>{t('hero.title.environmental')}</span>{' '}
            <span style={{ color: '#1CB0F6' }}>{t('hero.title.action')}</span>
          </h1>
          <p>{t('hero.description')}</p>
          <div className="duo-hero-buttons">
            <ContactPopup>
              <button className="duo-btn duo-btn-primary duo-btn-pulse">
                {t('hero.scheduleCall')}
              </button>
            </ContactPopup>
            <VideoPopup
              videoUrl="/Game-Based Learning in Action_ EcoBlox Field Trip to Korea s Environmental Theme Park.mp4"
              title="EcoBlox Sample Class"
            >
              <button className="duo-btn duo-btn-blue">
                {t('hero.watchSample')}
              </button>
            </VideoPopup>
          </div>
        </div>
        <div className="duo-hero-right">
          <img
            src="/page 1.png"
            alt="EcoBlox Gaming Platform"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '24px',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default DuoHero;
