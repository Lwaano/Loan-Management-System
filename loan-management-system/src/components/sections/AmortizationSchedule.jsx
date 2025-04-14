import { formatZMW } from '../../utils/currency'

export default function AmortizationSchedule({ loanAmount, interestRate = 25 /* Zambian average */, termMonths = 12 }) {
  // Zambian amortization calculation
  const monthlyRate = interestRate / 100 / 12
  const payment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths))

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Principal</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Interest</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Balance</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.from({ length: termMonths }).map((_, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatZMW(payment)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatZMW(payment * 0.75)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatZMW(payment * 0.25)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatZMW(loanAmount - (payment * 0.75 * (index + 1)))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}