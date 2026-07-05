import Header from './components/Header';

const ContactPage = () => {
  return (
    <div className="og-homepage">
      <Header activePage="contact" />

      <section className="og-hero">
        <div className="og-container">
          <div className="og-hero-content">
            <div className="og-hero-tagline">
              <span className="og-icon og-icon-oil"></span> Contact Support
            </div>
            <h1 className="og-hero-title">Reach Our Service Team</h1>
            <p className="og-hero-text">
              Get in touch for procurement, logistics coordination, technical support, project facilitation, and consultancy services across the energy sector.
            </p>
            <div className="og-hero-buttons">
              <a href="https://wa.me/+2348144134179" className="og-btn og-btn-primary og-btn-large">WhatsApp Link</a>
              <a href="/" className="og-btn og-btn-outline">Back to Home</a>
            </div>
          </div>
        </div>
        <div className="og-hero-bg-decoration"></div>
      </section>

      <section id="contact" className="og-about">
        <div className="og-container">
          <div className="og-about-grid">
            <div className="og-about-content">
              <span className="og-section-tag">Contact Us</span>
              <h2 className="og-section-title">Let Us Support Your Operations</h2>
              <p className="og-about-text">
                Our team is available to answer questions about our oilfield equipment supply, logistics coordination, technical assistance, and regulatory consulting.
              </p>
              <div className="og-about-features">
                <div className="og-feature">
                  <span className="og-feature-icon">🌐</span>
                  <div>
                    <h3>Social Media</h3>
                    <p>You can contact us at our social media page</p>
                    <p><a href="https://whatsapp.com/dl/" target="_blank" className="og-btn og-btn-primary og-btn-large">Here</a></p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">📍</span>
                  <div>
                    <h3>Location</h3>
                    <p>14 NWANIBA ROAD UYO</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">📞</span>
                  <div>
                    <h3>Phone</h3>
                    <p><a href="tel:+18005551234" className='contact-phonenumber'>Contact Me Here</a></p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">🤝</span>
                  <div>
                    <h3>Operational Support</h3>
                    <p>Reliable service delivery through strategic supplier partnerships.</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">✅</span>
                  <div>
                    <h3>Trusted Partner</h3>
                    <p>Built for oil & gas companies, contractors, governments and industry stakeholders.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="og-about-image">
              <div className="og-image-placeholder">
                <span className="og-placeholder-icon">💬</span>
                <p>Talk to us now<br /><span>WhatsApp support</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="og-footer">
        <div className="og-container">
          <div className="og-footer-grid">
            <div className="og-footer-about">
              <div className="og-logo og-footer-logo">
                <span className="og-logo-highlight">ENERGY</span>CORE
              </div>
              <p>Delivering energy for humanity's progress, today and tomorrow.</p>
            </div>
            <div className="og-footer-links">
              <h4>Operations</h4>
              <ul>
                <li><a href="/procurement">Procurement and supply of oil and gas equipment</a></li>
                <li><a href="/petroleum-marketing">Petroleum product marketing and distribution</a></li>
                <li><a href="/oilfield-support">Oilfield support services</a></li>
                <li><a href="/logistics">Logistics and transportation services for the energy sector</a></li>
                <li><a href="/equipment-leasing">Equipment leasing and maintenance</a></li>
              </ul>
            </div>
            <div className="og-footer-links">
              <h4>Sustainability</h4>
              <ul>
                <li><a href="/technical-consulting">Technical consulting and project support</a></li>
                <li><a href="/manpower-sourcing">Manpower sourcing and outsourcing for oil and gas companies</a></li>
              </ul>
            </div>
           
          </div>
          <div className="og-footer-bottom">
            <p>© 2025 EnergyCore. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default ContactPage;
