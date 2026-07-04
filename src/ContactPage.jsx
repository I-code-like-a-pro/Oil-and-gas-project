const ContactPage = () => {
  return (
    <div className="og-homepage">
      <header className="og-header">
        <div className="og-container">
          <div className="og-header-content">
            <div className="og-logo">
              <span className="og-logo-highlight">ENOMFON</span>MULTIMEDIA HUB
            </div>
            <nav className="og-nav">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/refund-policy">Refund Policy</a></li>
                <li><a href="/contact" className="active">Contact</a></li>
              </ul>
            </nav>
            <a href="/reports" className="og-btn og-btn-primary">Reports →</a>
          </div>
        </div>
      </header>

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
              <a href="https://whatsapp.com/dl/" className="og-btn og-btn-primary og-btn-large">WhatsApp Link</a>
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
                    <p><a href="https://whatsapp.com/dl/" target="_blank"className="og-btn og-btn-primary og-btn-large">Here</a></p>
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
              <p>Delivering energy support with dependable operational services and industry expertise.</p>
            </div>
            <div className="og-footer-links">
              <h4>Operations</h4>
              <ul>
                <li><a href="/exploration">Exploration</a></li>
                <li><a href="/production">Production</a></li>
                <li><a href="/refining">Refining</a></li>
                <li><a href="/chemicals">Chemicals</a></li>
              </ul>
            </div>
            <div className="og-footer-links">
              <h4>Support</h4>
              <ul>
                <li><a href="/contact">Contact</a></li>
                <li><a href="https://whatsapp.com/dl/">WhatsApp</a></li>
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
