import { useForm } from 'react-hook-form'
import { formatZMW } from '../../utils/currency'

export default function LoanApplication() {
  const {
    register,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      loanAmount: 5000
    }
  })

  const amount = watch('loanAmount', 0)

  return (
    <div className="max-w-2xl p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">New Loan Application</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Loan Amount */}
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">
            Loan Amount (ZMW)
          </label>
          <input
            {...register('loanAmount', { required: true, min: 1 })}
            type="number"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
          />
          <p className="mt-2 text-sm text-gray-600">
            Available credit: {formatZMW(10000)}
          </p>
          <p className="text-primary font-medium mt-1">
            You entered: {formatZMW(amount)}
          </p>
        </div>

        {/* NRC Number with validation */}
        <div>
          <label className="block text-sm font-medium mb-1">NRC Number</label>
          <input
            {...register('nrc', {
              required: true,
              pattern: {
                value: /^[0-9]{6}\/[0-9]{2}\/[0-9]{1}$/,
                message: 'Invalid Zambian NRC format'
              }
            })}
            placeholder="123456/78/9"
            className="w-full p-2 border rounded"
          />
          {errors.nrc && (
            <p className="text-red-500 text-sm mt-1">{errors.nrc.message}</p>
          )}
        </div>
      </div>
    </div>
  )
}
