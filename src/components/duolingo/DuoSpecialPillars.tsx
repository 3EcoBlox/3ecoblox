import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";

const DuoSpecialPillars = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reset animation when leaving viewport, trigger when entering
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const pillars = [
    {
      image: "/env_stem.jpg",
      emoji: "🌱",
      titleKey: "specialPillars.environmentalSTEM",
      descriptionKey: "specialPillars.environmentalSTEMDesc",
      borderColor: "#5bb246" // Bright green
    },
    {
      image: "/roblox_coding.png",
      emoji: "🎮",
      titleKey: "specialPillars.robloxCoding",
      descriptionKey: "specialPillars.robloxCodingDesc",
      borderColor: "#98a763" // Olive green
    },
    {
      image: "/digital_literacy.svg",
      emoji: "🛡️",
      titleKey: "specialPillars.digitalCitizenship",
      descriptionKey: "specialPillars.digitalCitizenshipDesc",
      borderColor: "#3cbb90" // Teal
    }
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '80px 20px 60px 20px',
        background: 'linear-gradient(180deg, #f7f7f7 0%, #ffffff 100%)'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          className={isVisible ? 'duo-animate-slide-in-up' : ''}
          style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '16px',
            color: '#3c3c3c',
            opacity: isVisible ? 1 : 0
          }}
        >
          {t('specialPillars.title')}
        </h2>
        <p
          className={isVisible ? 'duo-animate-slide-in-up' : ''}
          style={{
            fontSize: 'clamp(18px, 3vw, 24px)',
            textAlign: 'center',
            color: '#777',
            marginBottom: 'clamp(30px, 5vw, 60px)',
            opacity: isVisible ? 1 : 0,
            animationDelay: '0.2s',
            padding: '0 20px'
          }}
        >
          {t('specialPillars.subtitle')}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(20px, 3vw, 40px)',
          padding: '0 20px'
        }}>
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`duo-pillar-card ${isVisible ? 'duo-animate-pop-in' : ''}`}
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                border: `3px solid ${pillar.borderColor}`,
                cursor: 'pointer',
                opacity: isVisible ? 1 : 0,
                animationDelay: `${0.3 + index * 0.2}s`
              }}
            >
              <div style={{
                width: '100%',
                height: '180px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  className="duo-pillar-image"
                />
              </div>
              <div style={{
                padding: '20px 30px 30px 30px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px'
                }}>
                  {pillar.emoji}
                </div>
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                  color: '#3c3c3c'
                }}>
                  {t(pillar.titleKey)}
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#777'
                }}>
                  {t(pillar.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DuoSpecialPillars;
