import { useTable } from '@tanstack/react-table'
import { formatZMW } from '../../utils/currency'

const ZambianClients = [
  {
    nrc: '123456/78/9',
    name: 'Lwaano Siakalima',
    location: 'Lusaka',
    phone: '+260977123456',
    loanBalance: 15000
  },
  // Add more Zambian sample data
]

export default function ClientTable() {
  const columns = [
    {
      header: 'NRC Number',
      accessorKey: 'nrc',
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Location',
      accessorKey: 'location',
    },
    {
      header: 'Balance',
      accessorKey: 'loanBalance',
      cell: ({ getValue }) => formatZMW(getValue()),
    }
  ]

  const table = useTable({ columns, data: ZambianClients })

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="border-b">
              {headerGroup.headers.map(header => (
                <th 
                  key={header.id} 
                  className="text-left p-3 text-sm font-medium text-gray-500"
                >
                  {header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map(cell => (
                <td 
                  key={cell.id} 
                  className="p-3 text-sm border-b"
                >
                  {cell.renderCell()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}