import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";

const DuoStats = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
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

  return (
    <div ref={sectionRef} className="duo-stats-bar">
      <div className="duo-stats-content">
        <div
          className={`duo-stat-item ${isVisible ? 'duo-animate-bounce' : ''}`}
          style={{ animationDelay: '0.1s' }}
        >
          <h3>10</h3>
          <p>{t('program.stats.weeksProgram')}</p>
        </div>
        <div
          className={`duo-stat-item ${isVisible ? 'duo-animate-bounce' : ''}`}
          style={{ animationDelay: '0.2s' }}
        >
          <h3>60</h3>
          <p>{t('program.stats.minutesPerClass')}</p>
        </div>
        <div
          className={`duo-stat-item ${isVisible ? 'duo-animate-bounce' : ''}`}
          style={{ animationDelay: '0.3s' }}
        >
          <h3>3</h3>
          <p>{t('program.stats.studentRoles')}</p>
        </div>
        <div
          className={`duo-stat-item ${isVisible ? 'duo-animate-bounce' : ''}`}
          style={{ animationDelay: '0.4s' }}
        >
          <h3>100%</h3>
          <p>{t('program.stats.gameLaunchRate')}</p>
        </div>
      </div>
    </div>
  );
};

export default DuoStats;
