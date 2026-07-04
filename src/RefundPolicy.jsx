import Header from './components/Header';

const RefundPolicy = () => {
  return (
    <div className="og-homepage">
      <Header activePage="refund" />

      <section className="og-hero">
        <div className="og-container">
          <div className="og-hero-content">
            <div className="og-hero-tagline">Policy</div>
            <h1 className="og-hero-title">Refund Policy</h1>
            <p className="og-hero-text">Effective Date: July 4, 2026</p>
          </div>
        </div>
        <div className="og-hero-bg-decoration"></div>
      </section>

      <section className="og-about">
        <div className="og-container">
          <div className="og-about-grid">
            <div className="og-about-content">
              <p className="og-about-text"><strong>Enomfon Multimedia Hub</strong> is committed to providing quality digital, multimedia, technology, and business support services to our clients. This Refund Policy outlines the conditions under which refunds may be granted.</p>

              <h3 className="og-section-title">1. General Policy</h3>
              <p className="og-about-text">Due to the nature of our services, refunds are considered on a case-by-case basis. By engaging our services, clients acknowledge and agree to the terms outlined in this policy.</p>

              <h3 className="og-section-title">2. Eligibility for Refunds</h3>
              <p className="og-about-text">A refund may be approved under the following circumstances:</p>
              <ul className="og-about-text">
                <li>Payment was made in error or duplicated.</li>
                <li>The requested service cannot be delivered due to reasons solely attributable to Enomfon Multimedia Hub.</li>
                <li>The service was not commenced within the agreed timeframe and the delay is solely our responsibility.</li>
                <li>A technical issue on our end resulted in a failure to provide the paid service.</li>
              </ul>

              <h3 className="og-section-title">3. Non-Refundable Services</h3>
              <p className="og-about-text">Refunds will generally not be granted for completed services delivered as agreed, digital products already accessed or downloaded, delays caused by incomplete client information, changes in client preferences after work has commenced, or third-party fees.</p>

              <h3 className="og-section-title">4. Refund Request Process</h3>
              <p className="og-about-text">Clients seeking a refund must submit a written request within seven (7) days of the transaction date including name, transaction reference, date, description of the issue, and supporting evidence. Send requests to our official support email.</p>

              <h3 className="og-section-title">5. Refund Review</h3>
              <p className="og-about-text">All refund requests will be reviewed within five (5) business days. We may request additional information before making a decision.</p>

              <h3 className="og-section-title">6. Approved Refunds</h3>
              <p className="og-about-text">Approved refunds will be processed to the original payment method where possible. Processing times may vary and third-party charges may be deducted where permitted by law.</p>

              <h3 className="og-section-title">7. Service Cancellation</h3>
              <p className="og-about-text">Clients may request cancellation before work begins. If no work has commenced, a full or partial refund may be issued at our discretion.</p>

              <h3 className="og-section-title">8. Changes to this Policy</h3>
              <p className="og-about-text">We reserve the right to amend this Refund Policy at any time. Updates will be published on our website and become effective upon publication.</p>

              <h3 className="og-section-title">9. Contact Information</h3>
              <p className="og-about-text">For questions or refund requests contact:<br/>Enomfon Multimedia Hub<br/>Email: akpanenomfon3@gmail.com<br/>Website: https://www.enomfonmultimediahub.site/</p>

              <p className="og-about-text">By using our services, you acknowledge that you have read, understood, and agreed to this Refund Policy.</p>
            </div>
            <div className="og-about-image">
              <div className="og-image-placeholder">
                <span className="og-placeholder-icon">📄</span>
                <p>Refund Policy<br /><span>Effective July 4, 2026</span></p>
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

export default RefundPolicy;
