
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

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
                    title: "Your work has been saved",
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



        <li><NavLink to={'/'} className={` text-lg text-[#be5fe6] font-semibold bg-[#be5fe626] mr-2 hover:bg-[#be5fe6] hover:text-white`}>Home</NavLink></li>
        <li><NavLink to={'/allArticles'} className={` text-lg text-[#be5fe6] font-semibold bg-[#be5fe626] hover:bg-[#be5fe6] hover:text-white`}>All Articles</NavLink></li>

    </>
    return (
        <div className={`${darkMode ? 'bg-[#191a1d]' : 'bg-violet-100/90'} fixed inset-x-0 top-0 z-50`}>
            <div className="max-w-7xl navbar mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}

                        </ul>
                    </div>
                    <a className=" text-xl text-white">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}

                    </ul>
                </div>
                <div className="navbar-end">
                    <label className={`${darkMode ? 'text-white' : ''} mr-7 swap swap-rotate`}>
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />

                        {/* sun icon */}
                        <svg
                            className={`${!darkMode && `hidden`} swap-on h-10 w-10 fill-current`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className={`${darkMode && `hidden`} swap-off h-10 w-10 fill-current`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                    {user ?
                        <>
                            <div className="bg-base-100 shadow-sm rounded-full">
                                <div className="flex gap-2">
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="avatar">
                                            <div className="w-15 rounded-full">
                                                <img
                                                    alt="Tailwind CSS Navbar component"
                                                    src={user.photoURL && user.photoURL} />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                            <li><Link to={`myArticles/${user.email}`}>My Articles</Link></li>
                                            <li><Link to='postArticle'>Post Article</Link></li>
                                            <li onClick={handleSignOut} className='font-bold text-red-400'><a>Logout</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            {/* <Link to='/login' className='btn'>Login</Link>
                            <Link to='/register' state={location.state} className='btn'>Register</Link> */}

                            <Link to='/login' className="relative inline-block text-lg group">
                                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                    <span className="relative">Login</span>
                                </span>
                                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;