import { useLanguage } from "@/contexts/LanguageContext";

const DuoRealWorldGaming = () => {
  const { t } = useLanguage();

  return (
    <section
      id="real-world-gaming"
      style={{
        background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
        padding: '80px 24px'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          color: '#3c3c3c',
          textAlign: 'center',
          marginBottom: '16px',
          fontWeight: '800'
        }}>
          {t('realWorldGaming.title')}
        </h2>
        <p style={{
          fontSize: 'clamp(16px, 2.5vw, 20px)',
          color: '#777',
          textAlign: 'center',
          marginBottom: 'clamp(30px, 5vw, 60px)',
          fontWeight: '500'
        }}>
          {t('realWorldGaming.subtitle')}
        </p>

        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          background: 'white',
          borderRadius: '24px',
          padding: 'clamp(20px, 4vw, 40px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
        }}>
          <h3 style={{
            fontSize: 'clamp(24px, 4vw, 36px)',
            color: '#3c3c3c',
            marginBottom: 'clamp(20px, 4vw, 40px)',
            fontWeight: '800',
            textAlign: 'center'
          }}>
            {t('realWorldGaming.exampleTitle')}
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(30px, 5vw, 60px)'
          }}>
            {/* Left Column */}
            <div>
              {/* The Challenge */}
              <div style={{ display: 'flex', gap: '20px', marginBottom: '32px' }}>
                <div style={{
                  flexShrink: 0,
                  width: '48px',
                  height: '48px',
                  background: '#18613a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px'
                }}>
                  👥
                </div>
                <div>
                  <h4 style={{
                    fontSize: '20px',
                    color: '#3c3c3c',
                    marginBottom: '8px',
                    fontWeight: '800'
                  }}>
                    {t('realWorldGaming.challenge')}
                  </h4>
                  <p style={{
                    fontSize: '16px',
                    color: '#666',
                    lineHeight: '1.6'
                  }}>
                    {t('realWorldGaming.challengeDesc')}
                  </p>
                </div>
              </div>

              {/* The Solution */}
              <div style={{ display: 'flex', gap: '20px', marginBottom: '32px' }}>
                <div style={{
                  flexShrink: 0,
                  width: '48px',
                  height: '48px',
                  background: '#3cbb90',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px'
                }}>
                  🔋
                </div>
                <div>
                  <h4 style={{
                    fontSize: '20px',
                    color: '#3c3c3c',
                    marginBottom: '8px',
                    fontWeight: '800'
                  }}>
                    {t('realWorldGaming.solution')}
                  </h4>
                  <p style={{
                    fontSize: '16px',
                    color: '#666',
                    lineHeight: '1.6'
                  }}>
                    {t('realWorldGaming.solutionDesc')}
                  </p>
                </div>
              </div>

              {/* The Stakes */}
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{
                  flexShrink: 0,
                  width: '48px',
                  height: '48px',
                  background: '#5bb246',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px'
                }}>
                  ⚡
                </div>
                <div>
                  <h4 style={{
                    fontSize: '20px',
                    color: '#3c3c3c',
                    marginBottom: '8px',
                    fontWeight: '800'
                  }}>
                    {t('realWorldGaming.stakes')}
                  </h4>
                  <p style={{
                    fontSize: '16px',
                    color: '#666',
                    lineHeight: '1.6'
                  }}>
                    {t('realWorldGaming.stakesDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Learning Outcomes */}
            <div style={{
              background: '#E8F5E9',
              padding: '32px',
              borderRadius: '16px'
            }}>
              <h4 style={{
                fontSize: '24px',
                color: '#3c3c3c',
                marginBottom: '24px',
                fontWeight: '800'
              }}>
                {t('realWorldGaming.learningOutcomes')}
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  display: 'flex',
                  gap: '12px',
                  marginBottom: '16px',
                  fontSize: '16px',
                  color: '#18613a'
                }}>
                  <span style={{ color: '#18613a', fontSize: '20px' }}>•</span>
                  <span>{t('realWorldGaming.outcome1')}</span>
                </li>
                <li style={{
                  display: 'flex',
                  gap: '12px',
                  marginBottom: '16px',
                  fontSize: '16px',
                  color: '#3cbb90'
                }}>
                  <span style={{ color: '#3cbb90', fontSize: '20px' }}>•</span>
                  <span>{t('realWorldGaming.outcome2')}</span>
                </li>
                <li style={{
                  display: 'flex',
                  gap: '12px',
                  marginBottom: '16px',
                  fontSize: '16px',
                  color: '#5bb246'
                }}>
                  <span style={{ color: '#5bb246', fontSize: '20px' }}>•</span>
                  <span>{t('realWorldGaming.outcome3')}</span>
                </li>
                <li style={{
                  display: 'flex',
                  gap: '12px',
                  fontSize: '16px',
                  color: '#5bb246'
                }}>
                  <span style={{ color: '#5bb246', fontSize: '20px' }}>•</span>
                  <span>{t('realWorldGaming.outcome4')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Build in Roblox Section */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h4 style={{
              fontSize: '22px',
              color: '#5bb246',
              marginBottom: '15px',
              fontWeight: '800'
            }}>
              🎮 {t('realWorldGaming.buildInRoblox')}
            </h4>
            <p style={{
              fontSize: '16px',
              color: '#666',
              lineHeight: '1.8',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {t('realWorldGaming.buildDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DuoRealWorldGaming;
