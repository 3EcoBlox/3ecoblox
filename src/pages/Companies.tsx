import DuoNavigation from "@/components/duolingo/DuoNavigation";
import DuoFooter from "@/components/duolingo/DuoFooter";
import { Button } from "@/components/ui/button";
import ContactPopup from "@/components/ContactPopup";
import { Building2, Award, Users2, Lightbulb, Sparkles, TrendingUp, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Companies = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <DuoNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10" />
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#3c3c3c' }}>
            {t('companiesPage.hero.title')}
          </h1>
          <p className="text-xl max-w-3xl" style={{ color: '#777' }}>
            {t('companiesPage.hero.subtitle')}
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 pb-16">
        {/* Vision Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8" style={{ color: '#3c3c3c' }}>{t('companiesPage.vision.title')}</h2>
          <p className="text-lg" style={{ color: '#777' }}>
            {t('companiesPage.vision.description')}
          </p>
        </section>

        {/* How Companies Contribute */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8" style={{ color: '#3c3c3c' }}>{t('companiesPage.contribute.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Target className="h-8 w-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#3c3c3c' }}>{t('companiesPage.contribute.data.title')}</h3>
                <p style={{ color: '#777' }}>
                  {t('companiesPage.contribute.data.description')}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Lightbulb className="h-8 w-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#3c3c3c' }}>{t('companiesPage.contribute.expertise.title')}</h3>
                <p style={{ color: '#777' }}>
                  {t('companiesPage.contribute.expertise.description')}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users2 className="h-8 w-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#3c3c3c' }}>{t('companiesPage.contribute.mentorship.title')}</h3>
                <p style={{ color: '#777' }}>
                  {t('companiesPage.contribute.mentorship.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8" style={{ color: '#3c3c3c' }}>{t('companiesPage.example.title')}</h2>

          <div className="bg-gradient-to-br from-accent/5 to-secondary/5 border border-accent/20 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#3c3c3c' }}>{t('companiesPage.example.partner')}</h3>
            <p className="mb-6" style={{ color: '#777' }}>
              {t('companiesPage.example.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mobi Benefits */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold mb-4" style={{ color: '#3c3c3c' }}>{t('companiesPage.example.mobi.title')}</h4>

              <div className="bg-card border-l-4 border-accent rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <Users2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <h5 className="text-lg font-semibold" style={{ color: '#3c3c3c' }}>{t('companiesPage.example.mobi.talent.title')}</h5>
                </div>
                <p style={{ color: '#777' }}>
                  {t('companiesPage.example.mobi.talent.description')}
                </p>
              </div>

              <div className="bg-card border-l-4 border-accent rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <h5 className="text-lg font-semibold" style={{ color: '#3c3c3c' }}>{t('companiesPage.example.mobi.esg.title')}</h5>
                </div>
                <p style={{ color: '#777' }}>
                  {t('companiesPage.example.mobi.esg.description')}
                </p>
              </div>

              <div className="bg-card border-l-4 border-accent rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <Sparkles className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <h5 className="text-lg font-semibold" style={{ color: '#3c3c3c' }}>{t('companiesPage.example.mobi.poc.title')}</h5>
                </div>
                <p style={{ color: '#777' }}>
                  {t('companiesPage.example.mobi.poc.description')}
                </p>
              </div>
            </div>

            {/* 3ecoblox Contribution */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold mb-4" style={{ color: '#3c3c3c' }}>{t('companiesPage.example.ecoblox.title')}</h4>

              <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-sm">
                <p className="leading-relaxed" style={{ color: '#777' }} dangerouslySetInnerHTML={{ __html: t('companiesPage.example.ecoblox.network') }} />
              </div>

              <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-sm">
                <p className="leading-relaxed" style={{ color: '#777' }} dangerouslySetInnerHTML={{ __html: t('companiesPage.example.ecoblox.curriculum') }} />
              </div>

              <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-sm">
                <p className="leading-relaxed" style={{ color: '#777' }} dangerouslySetInnerHTML={{ __html: t('companiesPage.example.ecoblox.esg') }} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border border-accent/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: '#3c3c3c' }}>{t('companiesPage.cta.title')}</h2>
          <p className="mb-6 max-w-2xl mx-auto" style={{ color: '#777' }}>
            {t('companiesPage.cta.description')}
          </p>
          <ContactPopup>
            <Button variant="hero" size="lg">
              {t('companiesPage.cta.button')}
            </Button>
          </ContactPopup>
        </section>
      </main>
      <DuoFooter />
    </div>
  );
};

export default Companies;
