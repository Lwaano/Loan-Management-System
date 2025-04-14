import { useState } from 'react';
import { formatZMW } from '../../utils/currency';

export default function LoanApplication() {
    const [amount, setAmount] = useState(5000) // Default ZMW 5000

    return(
        <div className="max-w-2xl p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">New Loan Application</h2>

            <div className="grid grid-cols-2 gap 4">
                <div className="col-span-2">
                    <label className="block text-sm font medium mb-1">Loan Amount (ZMW)</label>
                    <input 
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2 boarder rounded focus:ring-2 focus:ring-primary" 
                    />
                    <p className="mt-2 text-sm text-gray-600">
                        Available credit: {formatZMW(10000)}
                    </p>
                </div>

                {/* Add Zambian-specific fields*/}

                <div>
                    <label className="block text-sm font medium mb-1">NRC Number</label>

                    <input 
                    pattern="[0-9]{6}/[0-9]{2}/[0-9]"
                    title="Zambian NRC format: 123456/78/9"
                    className="w-full p-2 border rounded" 
                    />
                </div>
            </div>
        </div>
    );
}

