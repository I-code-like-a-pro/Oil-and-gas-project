import Header from './components/Header';

const ProcurementPage = () => {
  return (
    <div className="og-homepage">
      <Header activePage="procurement" />

      <section className="og-hero">
        <div className="og-container">
          <div className="og-hero-content">
            <div className="og-hero-tagline">
              <span className="og-icon og-icon-oil"></span> Our Services
            </div>
            <h1 className="og-hero-title">Procurement & Supply of Oil and Gas Equipment</h1>
            <p className="og-hero-text">
              Sourcing and delivering quality equipment and materials for exploration, production, and refining operations.
            </p>
            <div className="og-hero-buttons">
              <a href="/contact" className="og-btn og-btn-primary og-btn-large">Request a Quote →</a>
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
              <h2 className="og-section-title">Reliable Equipment, On Time</h2>
              <p className="og-about-text">
                We help oil and gas companies source, procure, and deliver the equipment and materials they need, from drilling components to processing machinery. Our vetted supplier network and quality checks ensure you get genuine, fit-for-purpose equipment without delays.
              </p>
              <div className="og-about-features">
                <div className="og-feature">
                  <span className="og-feature-icon">🛠️</span>
                  <div>
                    <h3>Vetted Suppliers</h3>
                    <p>Access to trusted local and international equipment suppliers.</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">📦</span>
                  <div>
                    <h3>End-to-End Sourcing</h3>
                    <p>From specification to delivery, we manage the full procurement cycle.</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">✅</span>
                  <div>
                    <h3>Quality Assurance</h3>
                    <p>Equipment inspected and verified before it reaches your site.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="og-about-image">
              <div className="og-image-placeholder">
                <span className="og-placeholder-icon">🔧</span>
                <p>Equipment Procurement<br /><span>Sourced. Verified. Delivered.</span></p>
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

export default ProcurementPage;