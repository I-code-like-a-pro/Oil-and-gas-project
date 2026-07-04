import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OilAndGasHomepage from './OilandGas';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import RefundPolicy from './RefundPolicy';
// Import other pages as you create them
// import OperationsPage from './components1/OperationsPage';
// import SustainabilityPage from './components1/SustainabilityPage';
// import InvestorsPage from './components1/InvestorsPage';
// import CareersPage from './components1/CareersPage';
// import ReportsPage from './components1/ReportsPage';

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Homepage */}
        <Route path="/" element={<OilAndGasHomepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;