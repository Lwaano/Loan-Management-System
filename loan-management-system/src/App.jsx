import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardLayout from './components/sections/DashboardLayout'
import LoanApplication from './components/forms/LoanApplication'
import ClientManagement from './components/sections/ClientManagement'
import LoanCards from './components/sections/LoanCards'
import AmortizationSchedule from './components/sections/AmortizationSchedule'
import LoanCalculator from './components/calculators/LoanCalculator'
import QrPayment from './components/payments/QrPayment'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<LoanCards />} />
          <Route index element={<Dashboard />} />
          <Route path="loan-application" element={<LoanApplication />} />
          <Route path="calculator" element={<LoanCalculator />} />
          <Route path="payments" element={<QrPayment />} />
          <Route path="clients" element={<ClientManagement />} />
          <Route path="amortization" element={<AmortizationSchedule />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
