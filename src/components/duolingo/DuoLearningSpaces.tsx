import { useLanguage } from "@/contexts/LanguageContext";

const DuoLearningSpaces = () => {
  const { t } = useLanguage();

  const videos = [
    {
      src: "/section1.mp4",
      title: "Interactive Learning Experience",
      description: "Engaging environmental education through interactive activities and exploration"
    },
    {
      src: "/section3.mp4",
      title: "Hands-On Discovery",
      description: "Students actively participating in environmental problem-solving challenges"
    },
    {
      src: "/section4.mp4",
      title: "Collaborative Learning",
      description: "Working together to create solutions for real-world environmental issues"
    },
    {
      src: "/section7.mp4",
      title: "Environmental Exploration",
      description: "Discovering nature and environmental concepts through immersive learning"
    },
    {
      src: "/section8.mp4",
      title: "Creative Problem Solving",
      description: "Building innovative solutions to tackle environmental challenges"
    }
  ];

  // Duplicate videos multiple times for seamless infinite loop
  const allVideos = [...videos, ...videos, ...videos, ...videos];

  return (
    <section
      id="learning-spaces"
      style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #18613a 0%, #3cbb90 50%, #5bb246 100%)',
        overflow: 'hidden'
      }}
    >
      <div style={{
        textAlign: 'center',
        marginBottom: '40px',
        padding: '0 24px'
      }}>
        <h2 style={{
          color: 'white',
          fontSize: '48px',
          fontWeight: 800,
          marginBottom: '16px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          🌿 {t('learningSpaces.title')}
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.95)',
          fontSize: '22px',
          fontWeight: 500
        }}>
          {t('learningSpaces.subtitle')}
        </p>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          overflowX: 'auto',
          overflowY: 'hidden',
          padding: '40px 0',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          cursor: 'grab',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
        className="duo-slider-container"
        onMouseDown={(e) => {
          const slider = e.currentTarget;
          slider.style.cursor = 'grabbing';
          const startX = e.pageX - slider.offsetLeft;
          const scrollLeft = slider.scrollLeft;

          const handleMouseMove = (e: MouseEvent) => {
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
          };

          const handleMouseUp = () => {
            slider.style.cursor = 'grab';
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
          };

          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
        }}
      >
        <div
          className="duo-slider-track"
          style={{
            display: 'flex',
            gap: '30px',
            animation: 'slideLeftContinuous 60s linear infinite',
            minWidth: 'min-content',
            paddingLeft: '0',
            paddingRight: '30px'
          }}
        >
          {allVideos.map((video, index) => (
            <div
              key={index}
              style={{
                flexShrink: 0,
                width: '500px',
                height: '350px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative'
              }}
              className="duo-image-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.4)';
                e.currentTarget.style.zIndex = '10';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)';
                e.currentTarget.style.zIndex = '1';
              }}
            >
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div
                className="duo-image-overlay"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                  padding: '30px',
                  transform: 'translateY(100%)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <h3 style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>
                  {video.title}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '16px',
                  lineHeight: '1.5'
                }}>
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .duo-slider-container::-webkit-scrollbar {
          display: none;
        }
        .duo-slider-track:hover {
          animation-play-state: paused;
        }
        .duo-slider-container:hover .duo-slider-track {
          animation-play-state: paused;
        }
        .duo-image-card:hover .duo-image-overlay {
          transform: translateY(0);
        }
        @keyframes slideLeftContinuous {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
      `}</style>
    </section>
  );
};

export default DuoLearningSpaces;
