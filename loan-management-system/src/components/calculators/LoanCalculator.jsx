import { useState, useMemo } from 'react'
import { formatZMW } from '../../../utils/currency'

export default function LoanCalculator() {
  const [amount, setAmount] = useState(5000)
  const [interest, setInterest] = useState(25) // Typical Zambian rate
  const [term, setTerm] = useState(12)

  const monthlyPayment = useMemo(() => {
    if (term <= 0 || interest <= 0 || amount <= 0) return 0
    
    const monthlyRate = interest / 100 / 12
    return (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term))
  }, [amount, interest, term])

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Zambian Loan Calculator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm mb-1">Loan Amount (ZMW)</label>
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Interest Rate (%)</label>
          <input
            type="number"
            min="0"
            value={interest}
            onChange={(e) => setInterest(parseFloat(e.target.value) || 0)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Term (months)</label>
          <input
            type="number"
            min="1"
            value={term}
            onChange={(e) => setTerm(Math.max(1, parseInt(e.target.value) || 12))}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">
          Monthly Payment: {formatZMW(monthlyPayment)}
        </h3>
      </div>
    </div>
  )
}
