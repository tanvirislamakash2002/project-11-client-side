import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import { FaTachometerAlt } from "react-icons/fa";

const Navbar = () => {
    const { user, signOutUser, darkMode, setDarkMode } = useAuth()
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state || '/'

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged out successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const links = <>
        <li>
            <NavLink
                to={'/'}
                className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-all duration-200 font-medium
                    ${isActive ? 'bg-primary text-primary-content' :
                        darkMode ? 'text-violet-200 hover:bg-violet-900/50' : 'text-violet-700 hover:bg-violet-100'}`}
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to={'/allArticles'}
                className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-all duration-200 font-medium
                    ${isActive ? 'bg-primary text-primary-content' :
                        darkMode ? 'text-violet-200 hover:bg-violet-900/50' : 'text-violet-700 hover:bg-violet-100'}`}
            >
                All Articles
            </NavLink>
        </li>
        <li>
            <NavLink
                to={'/about-us'}
                className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-all duration-200 font-medium
                    ${isActive ? 'bg-primary text-primary-content' :
                        darkMode ? 'text-violet-200 hover:bg-violet-900/50' : 'text-violet-700 hover:bg-violet-100'}`}
            >
                About Us
            </NavLink>
        </li>
        <li>
            <NavLink
                to={'/contact-us'}
                className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-all duration-200 font-medium
                    ${isActive ? 'bg-primary text-primary-content' :
                        darkMode ? 'text-violet-200 hover:bg-violet-900/50' : 'text-violet-700 hover:bg-violet-100'}`}
            >
                Contact Us
            </NavLink>
        </li>

        <li>
            <Link
                to="/dashboard"
                className={
                    `px-4 py-2 rounded-lg transition-all duration-200 font-medium flex items-center text-primary-content
                    ${darkMode ? 'text-violet-200 bg-violet-700 hover:bg-violet-900/50' : 'text-violet-100 hover:text-violet-800 hover:bg-violet-100 bg-violet-950'}`}
            >
                <FaTachometerAlt />
                Dashboard
            </Link>
        </li>
    </>

    return (
        <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} fixed inset-x-0 top-0 z-50 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left side - Logo and links */}
                    <div className="flex items-center">
                        <Link to='/' className="flex-shrink-0 flex items-center">
                            <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Rea<span className={`${darkMode ? 'text-primary' : 'text-primary'} text-3xl`}>d</span>ora
                            </span>
                        </Link>


                        <div className="hidden md:block ml-10">
                            <ul className="flex items-center">
                                {links}

                            </ul>
                        </div>
                    </div>

                    {/* Right side - Theme toggle and user area */}
                    <div className="flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-full focus:outline-none ${darkMode ? 'text-yellow-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'}`}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </button>

                        {/* User Area */}
                        {user ? (
                            <div className="ml-4 relative">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="avatar">
                                        <div className="w-10 h-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100 overflow-hidden">
                                            <img
                                                alt="User profile"
                                                src={user.photoURL || 'https://www.gravatar.com/avatar?d=mp'}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 border ${darkMode
                                            ? 'bg-gray-800 border-gray-700 text-gray-100'
                                            : 'bg-white border-gray-200 text-gray-800'
                                            }`}
                                    >
                                        <li className={`px-4 py-2 text-sm font-medium border-b ${darkMode
                                            ? 'border-gray-700 text-white'
                                            : 'border-gray-200 text-gray-900'
                                            }`}>
                                            <span className="truncate">{user.displayName || user.email}</span>
                                        </li>
                                        <li>
                                            <Link
                                                to={`/dashboard/profile`}
                                                className={darkMode
                                                    ? 'hover:bg-gray-700 text-gray-100'
                                                    : 'hover:bg-gray-100 text-gray-800'
                                                }
                                            >
                                                My Profile
                                            </Link>
                                        </li>

                                        <li>
                                            <button
                                                onClick={handleSignOut}
                                                className={`${darkMode
                                                    ? 'text-red-400 hover:bg-red-900/20'
                                                    : 'text-red-500 hover:bg-red-50'
                                                    }`}
                                            >
                                                Logout
                                            </button>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <div className="flex space-x-2">
                                <Link
                                    to='/login'
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${darkMode ? 'text-violet-300 hover:bg-violet-900/50' : 'text-primary hover:bg-violet-100'}`}
                                >
                                    Login
                                </Link>
                                <Link
                                    to='/register'
                                    state={location.state}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${darkMode ? 'bg-primary hover:bg-primary-focus text-primary-content' : 'bg-primary hover:bg-primary-focus text-white'}`}
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden ml-4 text-violet-500">
                        <button
                            className="btn btn-ghost btn-square"
                            onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div id="mobile-menu" className="md:hidden hidden">
                <div className={`px-2 pt-2 pb-3 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                    <ul className="flex flex-col space-y-1">
                        <li className="w-full">
                            <NavLink
                                to={'/'}
                                className={({ isActive }) =>
                                    `block w-full px-4 py-3 rounded-md transition-all duration-200 font-medium
                        ${isActive ? 'bg-primary text-primary-content' :
                                        darkMode ? 'text-violet-200 hover:bg-violet-900/70' : 'text-violet-700 hover:bg-violet-100'}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink
                                to={'/allArticles'}
                                className={({ isActive }) =>
                                    `block w-full px-4 py-3 rounded-md transition-all duration-200 font-medium
                        ${isActive ? 'bg-primary text-primary-content' :
                                        darkMode ? 'text-violet-200 hover:bg-violet-900/70' : 'text-violet-700 hover:bg-violet-100'}`
                                }
                            >
                                All Articles
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink
                                to={'/about-us'}
                                className={({ isActive }) =>
                                    `block w-full px-4 py-3 rounded-md transition-all duration-200 font-medium
                        ${isActive ? 'bg-primary text-primary-content' :
                                        darkMode ? 'text-violet-200 hover:bg-violet-900/70' : 'text-violet-700 hover:bg-violet-100'}`
                                }
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink
                                to={'/contact-us'}
                                className={({ isActive }) =>
                                    `block w-full px-4 py-3 rounded-md transition-all duration-200 font-medium
                        ${isActive ? 'bg-primary text-primary-content' :
                                        darkMode ? 'text-violet-200 hover:bg-violet-900/70' : 'text-violet-700 hover:bg-violet-100'}`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>
                        <li>
                            <Link
                                to="/dashboard"
                                className={`
      flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
      ${darkMode
                                        ?'text-violet-200 hover:bg-violet-100/30 bg-violet-100/40': 'text-violet-800 hover:bg-violet-900/20 bg-violet-900/20'
                                        }
      hover:underline
    `}
                            >
                                <FaTachometerAlt />
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                    {!user && (
                        <div className={`pt-2 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                            <Link
                                to='/login'
                                className="block w-full px-4 py-3 my-1 rounded-md text-center font-medium bg-primary text-primary-content"
                            >
                                Login
                            </Link>
                            <Link
                                to='/register'
                                state={location.state}
                                className={`block w-full px-4 py-3 my-1 rounded-md text-center font-medium border ${darkMode ? 'border-primary text-primary hover:bg-primary hover:text-primary-content' : 'border-primary text-primary hover:bg-primary hover:text-white'}`}
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Navbar;