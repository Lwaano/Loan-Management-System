import { BarChart, PieChart, Cell, ResponsiveContainer, Pie, Tooltip, Legend, XAxis, YAxis, Bar } from 'recharts'
import { formatZMW } from '../../utils/currency'

const ZambianRegionsData = [
  { name: 'Lusaka', value: 4000 },
  { name: 'Copperbelt', value: 3000 },
  { name: 'Southern', value: 2000 },
  { name: 'Northern', value: 2780 }
]

const COLORS = ['#007a37', '#ef7d00', '#e01f3d', '#4a5568']

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Regional Distribution Pie Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Regional Distribution</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={ZambianRegionsData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
              >
                {ZambianRegionsData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => formatZMW(value)}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Mobile Responsive Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Mobile Usage</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ZambianRegionsData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => formatZMW(value)} />
              <Bar 
                dataKey="value" 
                fill="#007a37"
                name="Loan Amount"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}