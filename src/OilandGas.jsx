import Header from './components/Header';

const OilAndGasHomepage = () => {
  return (
    <div className="og-homepage">
      <Header activePage="home" />
      
      {/* --- Header & Navigation --- */}
  
    

      {/* --- Hero Section --- */}
      <section id="home" className="og-hero">
        <div className="og-container">
          <div className="og-hero-content">
            <div className="og-hero-tagline">
              <span className="og-icon og-icon-oil"></span> Powering Tomorrow
            </div>
            <h1 className="og-hero-title">Advanced Energy <br />for a Changing World</h1>
            <p className="og-hero-text">
              Expertise in exploration, production, and refining, 
              we deliver reliable energy while investing in a sustainable future.
            </p>
            <div className="og-hero-buttons">
              <a href="/about" className="og-btn og-btn-primary og-btn-large">Our Operations →</a>
              <a href="#sustainability" className="og-btn og-btn-outline">Sustainability Report</a>
            </div>
          </div>
        </div>
        <div className="og-hero-bg-decoration"></div>
      </section>

      {/* --- Key Statistics / About Info (Homepage appropriate) --- */}
  

      {/* About moved to a dedicated page: /about */}

      {/* --- Sustainability Summary (Homepage appropriate) --- */}
      <section className="og-sustainability" id="sustainability">
        <div className="og-container">
          <div className="og-sustainability-grid">
            <div className="og-sustainability-image">
              <div className="og-image-placeholder og-image-placeholder-dark">
                <span className="og-placeholder-icon">🛡️</span>
                <p>Carbon Capture</p>
              </div>
            </div>
            <div className="og-sustainability-content">
              <span className="og-section-tag">Sustainability</span>
              <h2 className="og-section-title">Reducing Emissions, Increasing Access</h2>
              <p className="og-sustainability-text">
                We are committed to net-zero by 2050. Our roadmap includes methane detection, 
                carbon capture and storage (CCS), and investments in renewable diesel and 
                green hydrogen. We believe reliable energy must also be responsible energy.
              </p>
              <div className="og-sustainability-stats">
                <div className="og-sus-stat">
                  <span className="og-sus-number">-35%</span>
                  <span className="og-sus-label">Scope 1 & 2 intensity since 2018</span>
                </div>
                <div className="og-sus-stat">
                  <span className="og-sus-number">$2.5B</span>
                  <span className="og-sus-label">Annual low-carbon investment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Safety & People (Homepage summary) --- */}
      <section className="og-safety">
        <div className="og-container">
          <div className="og-section-header">
            <span className="og-section-tag">Our strength</span>
            <h2 className="og-section-title">Safety First, Always</h2>
            <p className="og-section-desc">
              Our workforce is our most valuable asset. We maintain industry-leading safety standards 
              and foster a culture of inclusion and continuous learning.
            </p>
          </div>
          <div className="og-safety-grid">
            <div className="og-safety-card">
              <span className="og-safety-icon">🛡️</span>
              <h3>0.12 TRIR</h3>
              <p>Total recordable injury rate – best in class</p>
            </div>
            <div className="og-safety-card">
              <span className="og-safety-icon">👥</span>
              <h3>35% Women</h3>
              <p>In technical roles, up 8% from 2020</p>
            </div>
            <div className="og-safety-card">
              <span className="og-safety-icon">🏭</span>
              <h3>10k+</h3>
              <p>Training hours per year per facility</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact & Report CTA (Homepage contact section) --- */}
      {/* --- Footer with Contact Details & Page Links --- */}
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

export default OilAndGasHomepage;