
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const { user, signOutUser } = useAuth()
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
        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-red-400' : 'text-green-500'}>Home</NavLink></li>
        <li><NavLink to={'/allArticles'} className={({ isActive }) => isActive ? 'text-red-400' : 'text-green-500'}>All Articles</NavLink></li>
        {/* <li><NavLink to={'/postArticle'} className={({ isActive }) => isActive ? 'text-red-400' : 'text-green-500'}>Post Article</NavLink></li>
        <li><NavLink to={'/myArticles'} className={({ isActive }) => isActive ? 'text-red-400' : 'text-green-500'}>My Articles</NavLink></li> */}
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
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
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}

                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <div className="bg-base-100 shadow-sm">
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
                        <Link to='/login' className='btn'>Login</Link>
                        <Link to='/register' state={location.state} className='btn'>Register</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;