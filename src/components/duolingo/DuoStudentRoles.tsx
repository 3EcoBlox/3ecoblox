import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";

const DuoStudentRoles = () => {
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

  const roles = [
    {
      icon: "🏗️",
      title: t('roles.builder'),
      subtitle: t('roles.builderSubtitle'),
      description: t('roles.builderDesc'),
      skills: [
        t('roles.builderSkill1'),
        t('roles.builderSkill2'),
        t('roles.builderSkill3'),
        t('roles.builderSkill4')
      ],
      color: "#5bb246" // Bright green
    },
    {
      icon: "💻",
      title: t('roles.scripter'),
      subtitle: t('roles.scripterSubtitle'),
      description: t('roles.scripterDesc'),
      skills: [
        t('roles.scripterSkill1'),
        t('roles.scripterSkill2'),
        t('roles.scripterSkill3'),
        t('roles.scripterSkill4')
      ],
      color: "#3cbb90" // Teal
    },
    {
      icon: "✅",
      title: t('roles.tester'),
      subtitle: t('roles.testerSubtitle'),
      description: t('roles.testerDesc'),
      skills: [
        t('roles.testerSkill1'),
        t('roles.testerSkill2'),
        t('roles.testerSkill3'),
        t('roles.testerSkill4')
      ],
      color: "#98a763" // Olive green
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="roles"
      className="duo-section"
      style={{ background: 'var(--duo-gray-bg)', paddingTop: '100px' }}
    >
      <div className="duo-section-content">
        <h2
          className={`duo-section-title ${isVisible ? 'duo-animate-slide-in-up' : ''}`}
          style={{
            opacity: isVisible ? 1 : 0
          }}
        >
          {t('roles.chooseYourPath')}
        </h2>
        <p
          className={`duo-section-subtitle ${isVisible ? 'duo-animate-slide-in-up' : ''}`}
          style={{
            opacity: isVisible ? 1 : 0,
            animationDelay: '0.2s'
          }}
        >
          {t('roles.pathSubtitle')}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(20px, 3vw, 32px)',
          marginTop: 'clamp(30px, 5vw, 60px)',
          padding: '0 20px'
        }}>
          {roles.map((role, index) => (
            <div
              key={index}
              className={isVisible ? 'duo-animate-pop-in' : ''}
              style={{
                background: 'white',
                border: '3px solid #E5E5E5',
                borderRadius: '24px',
                padding: '40px 32px',
                transition: 'all 0.3s',
                cursor: 'pointer',
                opacity: isVisible ? 1 : 0,
                animationDelay: `${0.3 + index * 0.2}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.12)';
                e.currentTarget.style.borderColor = role.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#E5E5E5';
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                background: 'var(--duo-gray-bg)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '40px'
              }}>
                {role.icon}
              </div>
              <h3 style={{
                fontSize: '28px',
                color: 'var(--duo-gray-dark)',
                marginBottom: '8px',
                fontWeight: 800,
                textAlign: 'center'
              }}>
                {role.title}
              </h3>
              <div style={{
                fontSize: '16px',
                color: role.color,
                marginBottom: '20px',
                fontWeight: 700,
                textAlign: 'center'
              }}>
                {role.subtitle}
              </div>
              <p style={{
                fontSize: '16px',
                color: 'var(--duo-gray)',
                lineHeight: '1.6',
                marginBottom: '24px',
                textAlign: 'center'
              }}>
                {role.description}
              </p>
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  fontSize: '18px',
                  color: 'var(--duo-gray-dark)',
                  fontWeight: 800,
                  marginBottom: '16px'
                }}>
                  {t('roles.skillsYoullLearn')}
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {role.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      style={{
                        padding: '8px 0',
                        fontSize: '15px',
                        color: 'var(--duo-gray)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px'
                      }}
                    >
                      <span style={{
                        color: role.color,
                        fontSize: '20px',
                        fontWeight: 800,
                        flexShrink: 0,
                        marginTop: '-2px'
                      }}>
                        ✓
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DuoStudentRoles;
