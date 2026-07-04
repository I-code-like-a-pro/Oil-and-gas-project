import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OilAndGasHomepage from './OilandGas';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import RefundPolicy from './RefundPolicy';
import ProcurementPage from './Procurementpage';
import PetroleumMarketingPage from './Petroleum';
import OilfieldSupportPage from './Oilfield';
import LogisticsPage from './Logistics';
import EquipmentLeasingPage from './Equipment';
import ManpowerSourcingPage from './ManPowerOutsourcing';
import TechnicalConsultingPage from './Consulting';


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

        {/* Services */}
        <Route path="/procurement" element={<ProcurementPage />} />
        <Route path="/petroleum-marketing" element={<PetroleumMarketingPage />} />
        <Route path="/oilfield-support" element={<OilfieldSupportPage />} />
        <Route path="/logistics" element={<LogisticsPage />} />
        <Route path="/equipment-leasing" element={<EquipmentLeasingPage />} />
        <Route path="/technical-consulting" element={<TechnicalConsultingPage />} />
        <Route path="/manpower-sourcing" element={<ManpowerSourcingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;