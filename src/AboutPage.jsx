import Header from './components/Header';

const AboutPage = () => {
  return (
    <div className="og-homepage">
      <Header activePage="about" />
      <section className="og-hero">
        <div className="og-container">
          <div className="og-hero-content">
            <div className="og-hero-tagline">About Enomfon</div>
            <h1 className="og-hero-title">Enomfon Multimedia Hub</h1>
            <p className="og-hero-text">Registered Nigerian business providing professional and reliable services within the oil and gas sector.</p>
          </div>
        </div>
        <div className="og-hero-bg-decoration"></div>
      </section>

      <section className="og-about">
        <div className="og-container">
          <div className="og-about-grid">
            <div className="og-about-content">
              <span className="og-section-tag">Who we are</span>
              <h2 className="og-section-title">About Enomfon Multimedia Hub</h2>
              <p className="og-about-text">
                Welcome to Enomfon Multimedia Hub, a registered Nigerian business committed to providing professional and reliable services within the oil and gas sector. Established to support the growing energy industry, we deliver practical solutions that help businesses, organizations, and stakeholders operate efficiently and achieve their objectives.
              </p>
              <p className="og-about-text">
                Registered with the Corporate Affairs Commission (CAC) under Business Name Registration Number 8935508, Enomfon Multimedia Hub operates with a strong commitment to professionalism, integrity, safety, and customer satisfaction. Our principal office is located at 14 Nwaniba Road, Uyo, Akwa Ibom State, Nigeria.
              </p>
              <p className="og-about-text">
                We provide a range of oil and gas support services tailored to meet the needs of clients across the energy value chain. Through strategic partnerships, industry expertise, and a dedication to excellence, we aim to contribute positively to the growth and sustainability of Nigeria's oil and gas industry.
              </p>

              <h3 className="og-section-title" style={{fontSize: '22px', marginTop: '18px'}}>Mission</h3>
              <p className="og-about-text">To deliver dependable, efficient, and value-driven oil and gas services that support operational success while maintaining the highest standards of professionalism and integrity.</p>

              <h3 className="og-section-title" style={{fontSize: '22px', marginTop: '18px'}}>Vision</h3>
              <p className="og-about-text">To become a trusted and respected service provider in Nigeria's oil and gas sector, recognized for quality service delivery, innovation, and customer satisfaction.</p>

              <h3 className="og-section-title" style={{fontSize: '22px', marginTop: '18px'}}>Core Values</h3>
              <div className="og-about-features">
                <div className="og-feature">
                  <span className="og-feature-icon">🔒</span>
                  <div>
                    <h3>Integrity</h3>
                    <p>We conduct our business honestly, ethically, and transparently.</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">🏆</span>
                  <div>
                    <h3>Excellence</h3>
                    <p>We strive for the highest standards of service quality and performance.</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">🤝</span>
                  <div>
                    <h3>Reliability</h3>
                    <p>Committed to delivering dependable solutions our clients can trust.</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">🦺</span>
                  <div>
                    <h3>Safety</h3>
                    <p>We prioritize safety, compliance, and responsible business practices.</p>
                  </div>
                </div>
              </div>

              <p className="og-about-text" style={{marginTop: '20px'}}>
                Why Choose Enomfon Multimedia Hub? - Registered and compliant Nigerian business, commitment to quality and professionalism, reliable service delivery, customer-centered approach, and a strong focus on industry best practices and operational excellence.
              </p>
            </div>
            <div className="og-about-image">
              <div className="og-image-placeholder">
                <span className="og-placeholder-icon">🏢</span>
                <p>14 Nwaniba Road<br /><span>Uyo, Akwa Ibom State</span></p>
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

export default AboutPage;
