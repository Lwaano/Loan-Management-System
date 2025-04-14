import { useTable } from 'react-table'
import { formatZMW } from '../../utils/currency'

export default function RepaymentTable({ data }) {
    const columns = [
        {
            Header: 'Due Date',
            accessor: 'dueDate'
        },
        {
            Header: 'Amount Due',
            accessor: 'amount',
            Cell: ({ value }) => formatZMW(value)
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: ({ value }) => (
                <span className={`px-2 py-1 rounded-full text-xs ${
                    value === 'Paid' ? 'bg-green-100 text-green-800' :
                    value === 'Overdue' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                }`}>
                    {value}
                </span> 
            )
        }
    ]

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })
    

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            <table {...getTableProps()} className="min-w-full">
                <thead className="bg-gray-50">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th 
                            {...column.getHeaderProps()}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                            >
                            {column.render('Header')}
                            </th>
                        ))}
                        </tr>
                    ))}
                </thead>
                <tbody 
                    {...getTableBodyProps()}
                    className="divide-y divide-gray-200"
                    >
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <td 
                                            {...cell.getCellProps()}
                                            className="px-6 py-4 whitespace-nowrap text-sm"
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}