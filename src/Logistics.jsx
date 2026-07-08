import Header from './components/Header';

const LogisticsPage = () => {
  return (
    <div className="og-homepage">
      <Header activePage="procurement" />

      <section className="og-hero">
        <div className="og-container">
          <div className="og-hero-content">
            <div className="og-hero-tagline">
              <span className="og-icon og-icon-oil"></span> Our Services
            </div>
            <h1 className="og-hero-title">Logistics & Transportation for the Energy Sector</h1>
            <p className="og-hero-text">
              Moving people, equipment, and materials safely and on schedule across energy operations.
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
              <h2 className="og-section-title">Coordinated Movement, Start to Finish</h2>
              <p className="og-about-text">
                We coordinate logistics and transportation for the energy sector, covering equipment haulage, materials movement, and personnel transport between sites. Our planning keeps operations supplied and on schedule, wherever the project is located.
              </p>
              <div className="og-about-features">
                <div className="og-feature">
                  <span className="og-feature-icon">🚛</span>
                  <div>
                    <h3>Freight & Haulage</h3>
                    <p>Safe transport of equipment and materials to remote sites.</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">🗺️</span>
                  <div>
                    <h3>Route Planning</h3>
                    <p>Efficient logistics planning to reduce delays and downtime.</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">👷</span>
                  <div>
                    <h3>Personnel Transport</h3>
                    <p>Reliable movement of crews between offices and field locations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="og-about-image">
              <div className="og-image-placeholder">
                <span className="og-placeholder-icon">🚚</span>
                <p>Logistics & Transportation<br /><span>On schedule, every time</span></p>
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
                <span className="og-logo-highlight">ENOMFON</span>MULTIMEDIAHUB
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
            <p>© 2025 ENOMFONMULTIMEDIAHUB. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LogisticsPage;