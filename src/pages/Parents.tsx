import DuoNavigation from "@/components/duolingo/DuoNavigation";
import DuoFooter from "@/components/duolingo/DuoFooter";
import { Button } from "@/components/ui/button";
import ContactPopup from "@/components/ContactPopup";
import { Users, BookOpen, Trophy, GraduationCap, Brain, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Parents = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <DuoNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            {t('parentsPage.hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {t('parentsPage.hero.subtitle')}
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 pb-16">
        {/* Vision Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-foreground mb-8">{t('parentsPage.vision.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('parentsPage.vision.description')}
          </p>
        </section>

        {/* How Parents Contribute */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-foreground mb-8">{t('parentsPage.contribute.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <BookOpen className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{t('parentsPage.contribute.earlyExposure.title')}</h3>
                <p className="text-muted-foreground">
                  {t('parentsPage.contribute.earlyExposure.description')}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{t('parentsPage.contribute.shareFeedback.title')}</h3>
                <p className="text-muted-foreground">
                  {t('parentsPage.contribute.shareFeedback.description')}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Trophy className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{t('parentsPage.contribute.champion.title')}</h3>
                <p className="text-muted-foreground">
                  {t('parentsPage.contribute.champion.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-foreground mb-8">{t('parentsPage.testimonials.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('parentsPage.testimonials.subtitle')}
          </p>

          <div className="space-y-6">
            {/* Deborah Vasquez */}
            <div className="bg-card border-l-4 border-primary rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Brain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{t('parentTestimonials.testimonial1.author')}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{t('parentTestimonials.testimonial1.role')}</p>
                  <p className="text-sm font-semibold text-secondary mb-3">{t('parentsPage.testimonials.skill1')}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                "{t('parentTestimonials.testimonial1.quote')}"
              </p>
            </div>

            {/* Linda Katz */}
            <div className="bg-card border-l-4 border-secondary rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Lightbulb className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{t('parentTestimonials.testimonial2.author')}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{t('parentTestimonials.testimonial2.role')}</p>
                  <p className="text-sm font-semibold text-secondary mb-3">{t('parentsPage.testimonials.skill2')}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                "{t('parentTestimonials.testimonial2.quote')}"
              </p>
            </div>

            {/* Kannan Santhoshini */}
            <div className="bg-card border-l-4 border-accent rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <GraduationCap className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{t('parentTestimonials.testimonial3.author')}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{t('parentTestimonials.testimonial3.role')}</p>
                  <p className="text-sm font-semibold text-secondary mb-3">{t('parentsPage.testimonials.skill3')}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                "{t('parentTestimonials.testimonial3.quote')}"
              </p>
            </div>

            {/* Chris Lee */}
            <div className="bg-card border-l-4 border-primary rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{t('parentTestimonials.testimonial4.author')}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{t('parentTestimonials.testimonial4.role')}</p>
                  <p className="text-sm font-semibold text-secondary mb-3">{t('parentsPage.testimonials.skill4')}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                "{t('parentTestimonials.testimonial4.quote')}"
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">{t('parentsPage.cta.title')}</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('parentsPage.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactPopup>
              <Button variant="outline" size="lg">
                {t('parentsPage.cta.scheduleCall')}
              </Button>
            </ContactPopup>
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfS6jRLhPcyII9GF-P8eNXgYwSPlXM80ZE0sf6eKLIJdIU7Zw/viewform', '_blank')}
            >
              {t('parentsPage.cta.enrollChild')}
            </Button>
          </div>
        </section>
      </main>
      <DuoFooter />
    </div>
  );
};

export default Parents;
