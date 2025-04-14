import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Mobile Menu Button (Already in Sidebar) */}
        
        {/* Quick Access Links */}
        <nav className="hidden md:flex space-x-4">
          <Link 
            to="/calculator" 
            className="px-3 py-2 text-sm font-medium hover:text-primary"
          >
            Loan Calculator
          </Link>
          <Link 
            to="/payments" 
            className="px-3 py-2 text-sm font-medium hover:text-primary"
          >
            Mobile Payments
          </Link>
          <Link 
            to="/apply-loan" 
            className="px-3 py-2 text-sm font-medium bg-primary text-white rounded hover:bg-primary-dark"
          >
            New Loan
          </Link>
        </nav>

        {/* User Profile (Zambian Context) */}
        <div className="flex items-center">
          <span className="mr-2 text-sm">🇿🇲</span>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
            CM
          </div>
        </div>
      </div>
    </header>
  )
}