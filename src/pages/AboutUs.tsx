import DuoNavigation from "@/components/duolingo/DuoNavigation";
import DuoFooter from "@/components/duolingo/DuoFooter";
import DuoTestimonials from "@/components/duolingo/DuoTestimonials";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <DuoNavigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#3c3c3c' }}>{t('about.title')}</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6" style={{ color: '#777' }}>
            {t('about.welcome')}
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#3c3c3c' }}>{t('about.mission.title')}</h2>
            <p style={{ color: '#777' }}>
              {t('about.mission.description')}
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#3c3c3c' }}>{t('about.whatWeDo.title')}</h2>
            <p style={{ color: '#777' }}>
              {t('about.whatWeDo.description')}
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#3c3c3c' }}>{t('about.approach.title')}</h2>
            <p style={{ color: '#777' }}>
              {t('about.approach.description')}
            </p>
          </section>
        </div>
      </main>

      {/* Testimonials Section */}
      <DuoTestimonials />

      <DuoFooter />
    </div>
  );
};

export default AboutUs;
