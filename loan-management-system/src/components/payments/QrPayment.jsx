import { useState } from 'react'
import { QRCodeSVG as QRCode } from 'qrcode.react'
import { formatZMW } from '../../utils/currency'

export default function QrPayment() {
  const [amount, setAmount] = useState('')
  const [provider, setProvider] = useState('airtel')
  const [error, setError] = useState('')

  const handleAmountChange = (e) => {
    const value = e.target.value
    if (value === '' || (Number(value) >= 0 && !isNaN(value))) {
      setAmount(value)
      setError('')
    } else {
      setError('Please enter a valid amount')
    }
  }

  const paymentString = amount ? `mm_${provider}:+260977123456?amount=${amount}` : ''

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Zambian Mobile Payment</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-2 text-sm font-medium">
              Amount (ZMW)
            </label>
            <input
              id="amount"
              type="number"
              min="0"
              step="0.01"
              value={amount}
              onChange={handleAmountChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="0.00"
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            {amount && (
              <p className="mt-1 text-sm text-gray-500">
                {formatZMW(amount)}
              </p>
            )}
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Mobile Provider</label>
            <select
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="airtel">Airtel Money</option>
              <option value="mtn">MTN Mobile Money</option>
              <option value="zamtel">Zamtel Kwacha</option>
            </select>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <div className="p-4 border rounded-lg bg-gray-50">
            {paymentString ? (
              <QRCode
                value={paymentString}
                size={200}
                fgColor="#007a37"
                level="H"
              />
            ) : (
              <div className="w-[200px] h-[200px] flex items-center justify-center text-gray-400">
                Enter amount to generate QR code
              </div>
            )}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Scan with {provider} mobile money app
          </p>
        </div>
      </div>
    </div>
  )
}