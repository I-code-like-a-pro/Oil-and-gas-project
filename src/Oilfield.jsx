import Header from './components/Header';

const OilfieldSupportPage = () => {
  return (
    <div className="og-homepage">
      <Header activePage="oilfield-support" />

      <section className="og-hero">
        <div className="og-container">
          <div className="og-hero-content">
            <div className="og-hero-tagline">
              <span className="og-icon og-icon-oil"></span> Our Services
            </div>
            <h1 className="og-hero-title">Oilfield Support Services</h1>
            <p className="og-hero-text">
              Practical on-site and operational support that keeps oilfield activities running smoothly.
            </p>
            <div className="og-hero-buttons">
              <a href="/contact" className="og-btn og-btn-primary og-btn-large">Get in Touch →</a>
              <a href="/" className="og-btn og-btn-outline">Back to Home</a>
            </div>
          </div>
        </div>
        <div className="og-hero-bg-decoration"></div>
      </section>

      <section className="og-about">
        <div className="og-container">
          <div className="og-about-grid">
            <div className="og-about-content">
              <span className="og-section-tag">What We Offer</span>
              <h2 className="og-section-title">Dependable Support, On the Field</h2>
              <p className="og-about-text">
                We provide operational support services for oilfield activities, helping companies handle day-to-day site needs so their teams can focus on core production work. Our services are tailored to fit each project's scale and location.
              </p>
              <div className="og-about-features">
                <div className="og-feature">
                  <span className="og-feature-icon">🏗️</span>
                  <div>
                    <h3>Site Support</h3>
                    <p>Coordinated on-site assistance for day-to-day oilfield operations.</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">📡</span>
                  <div>
                    <h3>Operational Coordination</h3>
                    <p>Helping teams and contractors stay aligned on the ground.</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">🦺</span>
                  <div>
                    <h3>Field-Ready Teams</h3>
                    <p>Support personnel familiar with oilfield conditions and protocols.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="og-about-image">
              <div className="og-image-placeholder">
                <span className="og-placeholder-icon">⚙️</span>
                <p>Oilfield Support<br /><span>Keeping operations moving</span></p>
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
              <h4>Support</h4>
              <ul>
                <li><a href="/contact">Contact</a></li>
                <li><a href="https://wa.me/+2348144134179">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="og-footer-bottom">
            <p>© 2026 Enomfon Multimedia Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OilfieldSupportPage;