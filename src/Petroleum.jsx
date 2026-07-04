import Header from './components/Header';

const PetroleumMarketingPage = () => {
  return (
    <div className="og-homepage">
      <Header activePage="petroleum-marketing" />

      <section className="og-hero">
        <div className="og-container">
          <div className="og-hero-content">
            <div className="og-hero-tagline">
              <span className="og-icon og-icon-oil"></span> Our Services
            </div>
            <h1 className="og-hero-title">Petroleum Product Marketing & Distribution</h1>
            <p className="og-hero-text">
              Connecting refined petroleum products with markets through dependable distribution channels.
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
              <h2 className="og-section-title">Getting Product to Market, Reliably</h2>
              <p className="og-about-text">
                We support the marketing and distribution of refined petroleum products, connecting producers, marketers, and end users through efficient supply channels. Our focus is on consistency, compliance, and building trusted trading relationships.
              </p>
              <div className="og-about-features">
                <div className="og-feature">
                  <span className="og-feature-icon">⛽</span>
                  <div>
                    <h3>Product Distribution</h3>
                    <p>Coordinated distribution of petroleum products to depots and retailers.</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">🤝</span>
                  <div>
                    <h3>Market Access</h3>
                    <p>Linking suppliers with buyers across the energy value chain.</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">📋</span>
                  <div>
                    <h3>Regulatory Compliance</h3>
                    <p>Distribution handled in line with industry standards and regulations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="og-about-image">
              <div className="og-image-placeholder">
                <span className="og-placeholder-icon">🛢️</span>
                <p>Marketing & Distribution<br /><span>From refinery to market</span></p>
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

export default PetroleumMarketingPage;