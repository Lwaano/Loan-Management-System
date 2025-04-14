import LoanCards from '../components/sections/LoanCards'
import DashboardCharts from '../components/charts/DashboardCharts'
import ClientTable from '../components/tables/ClientTable'
import RepaymentTable from '../components/sections/RepaymentTable'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Zambian Loan Overview Cards */}
      <LoanCards />

      {/* Charts Section */}
      <DashboardCharts />

      {/* Client Data Table */}
      <div className="bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold p-6 border-b">
          Zambian Clients
        </h2>
        <ClientTable />
      </div>

      {/* Repayment Table Section */}
      <div className="bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold p-6 border-b">
          Repayment Schedule
        </h2>
        <RepaymentTable data={[]} />
      </div>
    </div>
  )
}
