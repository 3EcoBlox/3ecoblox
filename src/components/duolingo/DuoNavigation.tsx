import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import ContactPopup from "@/components/ContactPopup";
import LanguageToggle from "./LanguageToggle";

const DuoNavigation = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleSectionNavigation = (sectionId: string) => {
    setMobileMenuOpen(false);

    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // We're on home page, just scroll to section
      scrollToSection(sectionId);
    } else {
      // We're on a different page, navigate to home then scroll
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // If we're already on the home page, scroll to top
    if (window.location.pathname === '/') {
      scrollToSection('hero');
    } else {
      // Otherwise, navigate to home page
      navigate('/');
    }
  };

  return (
    <header className="duo-header">
      <div className="duo-header-content">
        <a href="/" className="duo-logo" onClick={handleLogoClick}>
          <img
            src="/ecoblox_logo.svg"
            alt="EcoBlox Logo"
            className="duo-logo-img"
          />
        </a>

        <nav className={`duo-nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#" className="duo-nav-link" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>
            {t('nav.aboutUs')}
          </a>
          <div
            className="duo-nav-dropdown"
            onMouseEnter={() => setPartnersOpen(true)}
            onMouseLeave={() => setPartnersOpen(false)}
          >
            <a href="#" className="duo-nav-link" onClick={(e) => { e.preventDefault(); navigate('/partners'); }}>
              {t('nav.partners')} ▾
            </a>
            {partnersOpen && (
              <div className="duo-dropdown-wrapper">
                <div className="duo-dropdown-menu">
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate('/partners/parents'); }}>{t('partners.parents.title')}</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate('/partners/nonprofit'); }}>{t('partners.nonprofits.title')}</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate('/partners/companies'); }}>{t('partners.companies.title')}</a>
                </div>
              </div>
            )}
          </div>
          <a href="#program" className="duo-nav-link" onClick={(e) => { e.preventDefault(); handleSectionNavigation('program'); }}>
            {t('nav.program')}
          </a>
          <a href="#testimonials" className="duo-nav-link" onClick={(e) => { e.preventDefault(); handleSectionNavigation('testimonials'); }}>
            {t('nav.testimonials')}
          </a>
          <a href="#roles" className="duo-nav-link" onClick={(e) => { e.preventDefault(); handleSectionNavigation('roles'); }}>
            {t('nav.studentRoles')}
          </a>
        </nav>

        <div className="duo-header-buttons">
          <LanguageToggle />

          <ContactPopup>
            <button className="duo-btn duo-btn-primary" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              padding: '10px 16px',
              fontWeight: '600',
              textTransform: 'none',
              letterSpacing: '0'
            }}>
              <span style={{ fontSize: '16px' }}>📞</span>
              {t('nav.scheduleCall')}
            </button>
          </ContactPopup>

          <button
            className="duo-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default DuoNavigation;
