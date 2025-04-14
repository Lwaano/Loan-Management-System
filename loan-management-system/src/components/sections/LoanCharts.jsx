import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function LoanCharts() {
    const data = [
        { month: 'Jan', loans: 4000, repayments: 2400 },
    { month: 'Feb', loans: 3000, repayments: 1398 },
    { month: 'Mar', loans: 2000, repayments: 9800 },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Loan Performance Chart */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Loan Performance</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar 
                            dataKey="loans" 
                            fill="#007a37" 
                            name="Loans Issued (ZMW)"
                        />
                        <Bar 
                            dataKey="repayments" 
                            fill="#ef7d00" 
                            name="Repayments (ZMW)"
                        />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Additional Chart (Pie/Doughnut) */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Portfolio Distribution</h3>
                {/* Add Pie Chart component */}
            </div>
        </div>
    )
}