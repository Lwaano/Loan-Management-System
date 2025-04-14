import { formatZMW } from "../../utils/currency";

export default function LoanCards() {
    const stats = [
        {
            title: "Total Loans",
            value: 2450000,
            trend: 'up',
            color: 'bg-primary'
        },
        { 
            title: "Active Loans", 
            value: 1250000,
            trend: 'down',
            color: 'bg-secondary'
        },
        { 
            title: "Monthly Repayments", 
            value: 350000,
            trend: 'up',
            color: 'bg-green-500'
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {stats.map((stat, index) => (
            <div 
                key={index}
                className={`${stat.color} p-6 rounded-lg text-white shadow-lg`}
            >
                <h3 className="text-sm font-medium">{stat.title}</h3>
                <div className="mt-2 flex justify-between items-center">
                <p className="text-2xl font-bold">
                    {formatZMW(stat.value)}
                </p>
                <span className={`text-xl ${stat.trend === 'up' ? 'text-green-300' : 'text-red-300'}`}>
                    {stat.trend === 'up' ? '↑' : '↓'}
                </span>
                </div>
            </div>
            ))}
        </div> 
    )
}