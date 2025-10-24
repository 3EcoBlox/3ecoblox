import { Leaf, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactPopup from "@/components/ContactPopup";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">{t('nav.ecoblox')}</span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              {t('footer.brandDescription')}
            </p>
            <p className="text-primary font-medium text-lg italic">
              "{t('footer.tagline')}"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">{t('nav.program')}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#program"
                  className="text-foreground/70 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('nav.program')}
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-foreground/70 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('nav.testimonials')}
                </a>
              </li>
              <li>
                <a
                  href="#roles"
                  className="text-foreground/70 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('nav.studentRoles')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">{t('footer.getStarted')}</h4>
            <ul className="space-y-4">
              <li>
                <ContactPopup>
                  <Button variant="secondary" className="w-full justify-start hover:scale-105 transition-all duration-300">
                    <Phone className="h-4 w-4 mr-2" />
                    {t('nav.scheduleCall')}
                  </Button>
                </ContactPopup>
              </li>
              <li>
                <ContactPopup>
                  <Button variant="accent" className="w-full justify-start hover:scale-105 transition-all duration-300">
                    <Mail className="h-4 w-4 mr-2" />
                    {t('footer.contactUs')}
                  </Button>
                </ContactPopup>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-foreground/60 text-sm">
            {t('footer.copyright')}
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">{t('footer.terms')}</a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">{t('footer.contactLink')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;