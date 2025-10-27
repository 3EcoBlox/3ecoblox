import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const DuoTestimonials = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: t('coachTestimonials.testimonial1.quote'),
      author: t('coachTestimonials.testimonial1.author'),
      role: t('coachTestimonials.testimonial1.role'),
      initials: "CA",
      image: "/Pictures/coaches_img/coach_abraham.jpg"
    },
    {
      quote: t('coachTestimonials.testimonial2.quote'),
      author: t('coachTestimonials.testimonial2.author'),
      role: t('coachTestimonials.testimonial2.role'),
      initials: "CJ",
      image: "/Pictures/coaches_img/coach_johnny.svg"
    },
    {
      quote: t('coachTestimonials.testimonial3.quote'),
      author: t('coachTestimonials.testimonial3.author'),
      role: t('coachTestimonials.testimonial3.role'),
      initials: "CJ",
      image: "/Pictures/coaches_img/coach_Jun.svg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="duo-section" style={{ background: 'var(--duo-gray-bg)' }}>
      <div className="duo-section-content">
        <h2 className="duo-section-title">{t('coachTestimonials.title')}</h2>
        <p className="duo-section-subtitle">{t('coachTestimonials.subtitle')}</p>

        <div className="duo-testimonials-carousel">
          <div className="duo-testimonials-track">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="duo-testimonial-slide"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: 'transform 0.5s ease'
                }}
              >
                <div className="duo-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="duo-star">★</span>
                  ))}
                </div>
                <p className="duo-testimonial-quote">"{testimonial.quote}"</p>
                <div className="duo-testimonial-author">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="duo-author-avatar"
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }}
                    />
                  ) : (
                    <div className="duo-author-avatar">{testimonial.initials}</div>
                  )}
                  <div>
                    <div className="duo-author-name">{testimonial.author}</div>
                    <div className="duo-author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="duo-carousel-controls">
            <button
              className="duo-carousel-button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <div className="duo-carousel-dots">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`duo-carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  role="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              className="duo-carousel-button"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DuoTestimonials;
