import ContactPopup from "@/components/ContactPopup";

const DuoFooter = () => {
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
          <p style={{ color: '#E0E0E0', marginBottom: '16px', maxWidth: '300px' }}>
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
          <h4>Program</h4>
          <ul>
            <li><a href="#program">Highlights</a></li>
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#roles">Student Roles</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
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
          <h4>Resources</h4>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#safety">Online Safety</a></li>
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
