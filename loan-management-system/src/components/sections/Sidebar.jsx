import { Link } from "react-router-dom";
import {
    HiHome,
    HiCurrencyDollar,
    HiUsers,
    HiCalendar,
    HiChartBar
} from 'react-icons/hi'


export default function Sidebar() {
    return (
        <div className="w-64 bg-primary text-white fixed h-full">
            <div className="p-6 border-b border-primary-dark">
                <img 
                    src="/assets/logo.png" 
                    alt="Zambian Financial Institution"
                    className="h-8 w-auto" 
                />
            </div>

            {/* Navigation Menu */}
            <nav className="p-4">
                <ul className="space-y-2">
                    <li>
                        <Link 
                            to="/dashboard"
                            className="flex items-center p-3 hover:bg-primary-dark round ed-lg"
                        >
                            <HiHome className="mr-3 text-xl" />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/loans" 
                            className="flex items-center p-3 hover:bg-primary-dark rounded-lg"
                    >
                        <HiCurrencyDollar className="mr-3 text-xl" />
                        Loans Management
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/clients" 
                            className="flex items-center p-3 hover:bg-primary-dark rounded-lg"
                    >
                            <HiUsers className="mr-3 text-xl" />
                            Clients (Wakwitu)
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/reports" 
                                className="flex items-center p-3 hover:bg-primary-dark rounded-lg"
                            >
                                <HiChartBar className="mr-3 text-xl" />
                                Bank of Zambia Reports
                            </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}