import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GamepadIcon, Users, Shield, GraduationCap, Phone, Menu, X, ChevronDown } from "lucide-react";
import ContactPopup from "@/components/ContactPopup";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/ecoblox_logo.svg"
            alt="EcoBlox Logo"
            className="h-8 md:h-12 w-auto cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => navigate('/about')}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
          >
            About Us
          </button>
          <div
            className="relative"
            onMouseEnter={() => setIsPartnersOpen(true)}
            onMouseLeave={() => setIsPartnersOpen(false)}
          >
            <button
              onClick={() => navigate('/partners')}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 flex items-center gap-1"
            >
              Partners
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isPartnersOpen ? 'rotate-180' : ''}`} />
            </button>
            {isPartnersOpen && (
              <div className="absolute left-0 pt-2" style={{ top: '100%' }}>
                <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[160px]">
                  <button
                    onClick={() => navigate('/partners/parents')}
                    className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    Parents
                  </button>
                  <button
                    onClick={() => navigate('/partners/nonprofit')}
                    className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    Nonprofit
                  </button>
                  <button
                    onClick={() => navigate('/partners/companies')}
                    className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    Companies
                  </button>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => handleNavClick('program')}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
          >
            {t('nav.program')}
          </button>
          <button
            onClick={() => handleNavClick('safety')}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
          >
            {t('nav.safety')}
          </button>
          <button
            onClick={() => handleNavClick('roles')}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
          >
            {t('nav.studentRoles')}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          {/* Desktop Buttons */}
          <ContactPopup>
            <Button variant="outline" className="hidden lg:inline-flex">
              {t('nav.scheduleCall')}
            </Button>
          </ContactPopup>
          <Button 
            variant="hero" 
            className="hidden sm:flex items-center gap-2"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfS6jRLhPcyII9GF-P8eNXgYwSPlXM80ZE0sf6eKLIJdIU7Zw/viewform', '_blank')}
          >
            <GraduationCap className="h-4 w-4" />
            {t('nav.joinCohort')}
          </Button>

          {/* Mobile Hamburger Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => {
                navigate('/about');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <div>
              <button
                onClick={() => {
                  navigate('/partners');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-semibold"
              >
                Partners
              </button>
              <div className="pl-4 space-y-2 mt-2">
                <button
                  onClick={() => {
                    navigate('/partners/parents');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  Parents
                </button>
                <button
                  onClick={() => {
                    navigate('/partners/nonprofit');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  Nonprofit
                </button>
                <button
                  onClick={() => {
                    navigate('/partners/companies');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  Companies
                </button>
              </div>
            </div>
            <button
              onClick={() => handleNavClick('program')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              {t('nav.program')}
            </button>
            <button
              onClick={() => handleNavClick('safety')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              {t('nav.safety')}
            </button>
            <button
              onClick={() => handleNavClick('roles')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              {t('nav.studentRoles')}
            </button>

            {/* Mobile Action Buttons */}
            <div className="pt-4 space-y-3 border-t border-border">
              <ContactPopup>
                <Button variant="outline" className="w-full">
                  {t('nav.scheduleCall')}
                </Button>
              </ContactPopup>
              <Button
                variant="hero"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfS6jRLhPcyII9GF-P8eNXgYwSPlXM80ZE0sf6eKLIJdIU7Zw/viewform', '_blank')}
              >
                <GraduationCap className="h-4 w-4" />
                {t('nav.joinCohort')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;