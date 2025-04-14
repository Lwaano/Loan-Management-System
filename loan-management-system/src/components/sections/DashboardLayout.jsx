import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function DashboardLayout() {
    return (
        <div className= "flex h-screen bg-gray-50">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <Header />

                <main className="p-6 bg-gray-100/50 flex-1">
                    <Outlet /> {/* This will render nested routes */}
                </main>
            </div>
        </div>
    );
}