import { useState } from 'react';

const Header = ({ activePage = 'home', showReports = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: 'Home', href: activePage === 'home' ? '#home' : '/', isActive: activePage === 'home' },
    { label: 'About', href: '/about', isActive: activePage === 'about' },
    { label: 'Refund Policy', href: '/refund-policy', isActive: activePage === 'refund' },
    { label: 'Contact', href: '/contact', isActive: activePage === 'contact' },
  ];

  return (
    <header className="og-header">
      <div className="og-container">
        <div className="og-header-content">
          <div className="og-header-main">
            <div className="og-logo">
              <span className="og-logo-highlight">ENOMFON</span>MULTIMEDIA HUB
            </div>
            <button
              className="og-menu-toggle"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <nav className={`og-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={link.isActive ? 'active' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {showReports && (
            <a href="/reports" className="og-btn og-btn-primary">
              Reports →
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
