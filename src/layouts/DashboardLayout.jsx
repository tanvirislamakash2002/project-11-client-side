import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaBook, FaPlusCircle, FaUser, FaSignOutAlt, FaHome, FaTachometerAlt } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router';
// import logo from '../assets/Logo/logoH.png';

const SidebarLink = ({ to, icon: Icon, label }) => (
    <li>
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-lg transition-all duration-200 ${isActive
                    ? 'bg-primary text-white shadow-md'
                    : 'hover:bg-base-200 text-base-content'
                }`
            }
        >
            <Icon className="mr-2" /> {label}
        </NavLink>
    </li>
);

const DashboardLayout = () => {
    const { user, signOutUser } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser()
            .then(() => navigate('/login'))
            .catch((error) => console.error('Logout error:', error));
    };

    return (
        <div className="drawer lg:drawer-open min-h-screen">
            {/* Drawer toggle for mobile */}
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            {/* Main content */}
            <div className="drawer-content flex flex-col">
                {/* Mobile navbar */}
                <div className="navbar bg-base-200 lg:hidden px-4">
                    <div className="flex-none">
                        <label htmlFor="dashboard-drawer" className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </label>
                    </div>
                    {/* <img src={logo} alt="Logo" className="h-10 w-auto object-contain" /> */}
                </div>

                {/* Page content */}
                <main className="p-4">
                    <Outlet />
                </main>
                <ToastContainer />
            </div>

            {/* Sidebar */}
            <div className="drawer-side z-50">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <aside className="menu bg-base-100 text-base-content w-72 p-4 min-h-full border-r border-base-300 flex flex-col">
                    {/* Logo */}
                    <div className="flex items-center justify-center mb-6">
                        {/* <img src={logo} alt="Logo" className="h-12 object-contain" /> */}
                    </div>

                    {/* Navigation */}
                    <ul className="space-y-2">
                        <SidebarLink to="/" icon={FaHome} label="Home" />

                        <Link
                            to="/dashboard"
                            className={
                                `flex items-center px-3 py-2 rounded-lg transition-all duration-200 bg-violet-200 hover:bg-violet-300`
                            }
                        >
                            <FaTachometerAlt className="mr-2" /> Dashboard
                        </Link>
                        <SidebarLink to={`/dashboard/myArticles/${user?.email}`} icon={FaBook} label="My Articles" />
                        <SidebarLink to="/dashboard/postArticle" icon={FaPlusCircle} label="Post Article" />
                        <SidebarLink to="/dashboard/profile" icon={FaUser} label="Profile" />
                    </ul>

                    {/* Logout button */}
                    <div className="mt-auto pt-4 border-t">
                        <button
                            onClick={handleSignOut}
                            className="btn w-full btn-ghost text-red-600 hover:bg-red-100"
                        >
                            <FaSignOutAlt className="mr-2" /> Logout
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default DashboardLayout;
