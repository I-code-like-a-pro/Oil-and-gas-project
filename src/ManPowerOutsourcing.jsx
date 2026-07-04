import Header from './components/Header';

const ManpowerSourcingPage = () => {
  return (
    <div className="og-homepage">
      <Header activePage="manpower-sourcing" />

      <section className="og-hero">
        <div className="og-container">
          <div className="og-hero-content">
            <div className="og-hero-tagline">
              <span className="og-icon og-icon-oil"></span> Our Services
            </div>
            <h1 className="og-hero-title">Manpower Sourcing & Outsourcing</h1>
            <p className="og-hero-text">
              Connecting oil and gas companies with skilled, reliable personnel for every stage of operations.
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
              <h2 className="og-section-title">The Right People, Ready to Work</h2>
              <p className="og-about-text">
                We help oil and gas companies source and outsource skilled manpower, from technical staff to support personnel, reducing hiring overhead while maintaining quality and reliability. Our sourcing process is built around each client's specific staffing needs.
              </p>
              <div className="og-about-features">
                <div className="og-feature">
                  <span className="og-feature-icon">👥</span>
                  <div>
                    <h3>Skilled Staffing</h3>
                    <p>Access to qualified personnel across technical and support roles.</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">📋</span>
                  <div>
                    <h3>Outsourced Workforce</h3>
                    <p>Manage staffing needs without the overhead of direct hiring.</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">🔍</span>
                  <div>
                    <h3>Vetting & Placement</h3>
                    <p>Candidates screened and matched to project requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="og-about-image">
              <div className="og-image-placeholder">
                <span className="og-placeholder-icon">🧑‍🔧</span>
                <p>Manpower Sourcing<br /><span>Skilled teams, ready fast</span></p>
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
                <li><a href="/general-contracting">General contracting for oil and gas projects</a></li>
                <li><a href="/safety-compliance">Safety, environmental, and compliance support services</a></li>
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

export default ManpowerSourcingPage;