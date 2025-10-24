import { useLanguage } from "@/contexts/LanguageContext";

const DuoProgramHighlights = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: "🎮",
      title: t('program.realGameDev'),
      description: t('program.realGameDevDesc'),
      color: "#1CB0F6"
    },
    {
      icon: "🌱",
      title: t('program.environmentalEdu'),
      description: t('program.environmentalEduDesc'),
      color: "#58CC02"
    },
    {
      icon: "👥",
      title: t('program.teamCollab'),
      description: t('program.teamCollabDesc'),
      color: "#4A9B8E"
    },
    {
      icon: "🛡️",
      title: t('program.onlineSafety'),
      description: t('program.onlineSafetyDesc'),
      color: "#FF4B4B"
    },
    {
      icon: "🏆",
      title: t('program.actualLaunch'),
      description: t('program.actualLaunchDesc'),
      color: "#FFC800"
    },
    {
      icon: "💻",
      title: t('program.technicalSkills'),
      description: t('program.technicalSkillsDesc'),
      color: "#CE82FF"
    }
  ];

  return (
    <section id="program" className="duo-section">
      <div className="duo-section-content">
        <h2 className="duo-section-title duo-animate-on-scroll">
          {t('program.title')}
        </h2>
        <p className="duo-section-subtitle duo-animate-on-scroll duo-animate-delay-1">
          {t('program.description')}
        </p>

        <div className="duo-features-grid">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="duo-feature-card duo-animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="duo-feature-icon" style={{ fontSize: '64px' }}>
                {highlight.icon}
              </span>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DuoProgramHighlights;
