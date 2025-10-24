import ContactPopup from "@/components/ContactPopup";
import { useLanguage } from "@/contexts/LanguageContext";

const DuoFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="duo-footer">
      <div className="duo-footer-content">
        <div>
          <div className="duo-footer-logo">
            <img
              src="/ecoblox_logo.svg"
              alt="EcoBlox Logo"
              style={{ height: '48px', width: 'auto' }}
            />
          </div>
          <p style={{ color: '#555555', marginBottom: '16px', maxWidth: '300px', fontWeight: '500' }}>
            Transforming gaming passion into environmental action through educational game development.
          </p>
          <div style={{ marginTop: '20px' }}>
            <ContactPopup>
              <button className="duo-btn duo-btn-primary">
                Get Started
              </button>
            </ContactPopup>
          </div>
        </div>

        <div className="duo-footer-col">
          <h4>Partners</h4>
          <ul>
            <li><a href="/parents">Parents</a></li>
            <li><a href="/nonprofit">Nonprofits</a></li>
            <li><a href="/companies">Companies</a></li>
          </ul>
        </div>

        <div className="duo-footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+14802009799">+1 480 200 9799</a></li>
            <li><a href="mailto:weare@lettuce.build">weare@lettuce.build</a></li>
          </ul>
        </div>

        <div className="duo-footer-col">
          <h4>Program</h4>
          <ul>
            <li><a href="/#program">Program</a></li>
            <li><a href="/#testimonials">Testimonials</a></li>
            <li><a href="/#roles">Student Roles</a></li>
          </ul>
        </div>
      </div>

      <div className="duo-footer-bottom">
        <p>&copy; {new Date().getFullYear()} 3EcoBlox. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default DuoFooter;
