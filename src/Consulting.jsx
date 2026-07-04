import Header from './components/Header';

const TechnicalConsultingPage = () => {
  return (
    <div className="og-homepage">
      <Header activePage="technical-consulting" />

      <section className="og-hero">
        <div className="og-container">
          <div className="og-hero-content">
            <div className="og-hero-tagline">
              <span className="og-icon og-icon-oil"></span> Our Services
            </div>
            <h1 className="og-hero-title">Technical Consulting & Project Support</h1>
            <p className="og-hero-text">
              Expert guidance and hands-on support to help your energy projects succeed.
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
              <h2 className="og-section-title">Guidance You Can Rely On</h2>
              <p className="og-about-text">
                We provide technical consulting and project support to oil and gas companies, helping teams plan, troubleshoot, and execute projects effectively. Our support spans planning, feasibility input, and day-to-day project coordination.
              </p>
              <div className="og-about-features">
                <div className="og-feature">
                  <span className="og-feature-icon">📈</span>
                  <div>
                    <h3>Project Planning</h3>
                    <p>Structured support from early planning through execution.</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">🧠</span>
                  <div>
                    <h3>Technical Advisory</h3>
                    <p>Practical expertise to guide key project decisions.</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">🗂️</span>
                  <div>
                    <h3>Project Coordination</h3>
                    <p>Ongoing support to keep projects on track and on budget.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="og-about-image">
              <div className="og-image-placeholder">
                <span className="og-placeholder-icon">📊</span>
                <p>Technical Consulting<br /><span>Planning meets execution</span></p>
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
              <h4>Services</h4>
              <ul>
                <li><a href="/procurement">Procurement & Supply</a></li>
                <li><a href="/petroleum-marketing">Petroleum Marketing</a></li>
                <li><a href="/oilfield-support">Oilfield Support</a></li>
                <li><a href="/logistics">Logistics & Transportation</a></li>
                <li><a href="/equipment-leasing">Equipment Leasing</a></li>
                <li><a href="/general-contracting">General Contracting</a></li>
                <li><a href="/safety-compliance">Safety & Compliance</a></li>
                <li><a href="/manpower-sourcing">Manpower Sourcing</a></li>
              </ul>
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

export default TechnicalConsultingPage;