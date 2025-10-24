import DuoNavigation from "@/components/duolingo/DuoNavigation";
import DuoFooter from "@/components/duolingo/DuoFooter";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Heart, Users } from "lucide-react";

const Partners = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <DuoNavigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#3c3c3c' }}>{t('partners.title')}</h1>
        <p className="text-lg mb-12" style={{ color: '#777' }}>
          {t('partners.subtitle')}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Parents Card */}
          <div className="border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 bg-card">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#3c3c3c' }}>{t('partners.parents.title')}</h2>
            <p className="mb-6" style={{ color: '#777' }}>
              {t('partners.parents.description')}
            </p>
            <Button
              onClick={() => navigate('/partners/parents')}
              variant="outline"
              className="w-full"
            >
              {t('partners.parents.button')}
            </Button>
          </div>

          {/* Nonprofits Card */}
          <div className="border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 bg-card">
            <Heart className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#3c3c3c' }}>{t('partners.nonprofits.title')}</h2>
            <p className="mb-6" style={{ color: '#777' }}>
              {t('partners.nonprofits.description')}
            </p>
            <Button
              onClick={() => navigate('/partners/nonprofit')}
              variant="outline"
              className="w-full"
            >
              {t('partners.nonprofits.button')}
            </Button>
          </div>

          {/* Companies Card */}
          <div className="border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 bg-card">
            <Building2 className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#3c3c3c' }}>{t('partners.companies.title')}</h2>
            <p className="mb-6" style={{ color: '#777' }}>
              {t('partners.companies.description')}
            </p>
            <Button
              onClick={() => navigate('/partners/companies')}
              variant="outline"
              className="w-full"
            >
              {t('partners.companies.button')}
            </Button>
          </div>
        </div>
      </main>
      <DuoFooter />
    </div>
  );
};

export default Partners;
