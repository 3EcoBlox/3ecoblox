import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const DuoTimeline = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
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

  const steps = [
    {
      number: 1,
      titleKey: "timeline.step1Title",
      descriptionKey: "timeline.step1Desc",
      image: "/environmental.svg",
      color: "#5bb246" // Bright green
    },
    {
      number: 2,
      titleKey: "timeline.step2Title",
      descriptionKey: "timeline.step2Desc",
      image: "/coding.svg",
      color: "#3cbb90" // Teal
    },
    {
      number: 3,
      titleKey: "timeline.step3Title",
      descriptionKey: "timeline.step3Desc",
      image: "/page 1.svg",
      color: "#98a763" // Olive green
    },
    {
      number: 4,
      titleKey: "timeline.step4Title",
      descriptionKey: "timeline.step4Desc",
      image: "/share_celebrate.svg",
      color: "#b2d82c" // Lime green
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="duo-section"
      style={{ background: 'white', paddingTop: '100px' }}
    >
      <div className="duo-section-content">
        <h2
          className={`duo-section-title ${isVisible ? 'duo-animate-slide-in-up' : ''}`}
          style={{
            opacity: isVisible ? 1 : 0
          }}
        >
          {t('timeline.title')}
        </h2>
        <p
          className={`duo-section-subtitle ${isVisible ? 'duo-animate-slide-in-up' : ''}`}
          style={{
            opacity: isVisible ? 1 : 0,
            animationDelay: '0.2s'
          }}
        >
          {t('timeline.subtitle')}
        </p>

        <div style={{ maxWidth: '1000px', margin: '60px auto 0', padding: '0 20px' }}>
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={isVisible ? 'duo-animate-slide-in-up' : ''}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(16px, 3vw, 32px)',
                marginBottom: 'clamp(40px, 5vw, 60px)',
                flexDirection: window.innerWidth > 768 ? (index % 2 === 0 ? 'row' : 'row-reverse') : 'column',
                opacity: isVisible ? 1 : 0,
                animationDelay: `${0.3 + index * 0.15}s`
              }}
            >
              {/* Step Number Circle */}
              <div
                style={{
                  flexShrink: 0,
                  width: 'clamp(80px, 10vw, 100px)',
                  height: 'clamp(80px, 10vw, 100px)',
                  borderRadius: '50%',
                  background: step.color,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(36px, 5vw, 48px)',
                  fontWeight: 800,
                  boxShadow: `0 8px 0 ${step.color}cc`,
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {step.number}
              </div>

              {/* Content Card */}
              <div
                style={{
                  flex: 1,
                  width: '100%',
                  background: 'white',
                  borderRadius: '24px',
                  border: '3px solid #E5E5E5',
                  overflow: 'hidden',
                  display: 'flex',
                  gap: '24px',
                  flexDirection: window.innerWidth > 640 ? (index % 2 === 0 ? 'row' : 'row-reverse') : 'column'
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: window.innerWidth > 640 ? '200px' : '100%',
                    height: window.innerWidth > 640 ? '200px' : '250px',
                    flexShrink: 0,
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={step.image}
                    alt={t(step.titleKey)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                {/* Text */}
                <div
                  style={{
                    padding: 'clamp(20px, 4vw, 32px)',
                    paddingLeft: window.innerWidth > 640 ? (index % 2 === 0 ? '0' : 'clamp(20px, 4vw, 32px)') : 'clamp(20px, 4vw, 32px)',
                    paddingRight: window.innerWidth > 640 ? (index % 2 === 0 ? 'clamp(20px, 4vw, 32px)' : '0') : 'clamp(20px, 4vw, 32px)',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: window.innerWidth > 768 ? 'left' : 'center'
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'clamp(22px, 3vw, 28px)',
                      color: 'var(--duo-gray-dark)',
                      marginBottom: '12px',
                      fontWeight: 800
                    }}
                  >
                    {t(step.titleKey)}
                  </h3>
                  <p
                    style={{
                      fontSize: 'clamp(15px, 2vw, 18px)',
                      color: 'var(--duo-gray)',
                      lineHeight: '1.6'
                    }}
                  >
                    {t(step.descriptionKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DuoTimeline;
