import React from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    const { darkMode, user } = useAuth()
    // console.log(user)
    return (
        <footer className={`${darkMode ? 'bg-black text-white' : 'bg-violet-200'}`}>
            <div className={`footer max-w-7xl mx-auto sm:footer-horizontal p-10 items-center`}>
                <aside>

                    <Link to='/' className={`${darkMode ? `text-white` : `text-black`} text-2xl font-bold`}>Rea<span className={`${darkMode ? 'text-violet-300' : 'text-violet-700'} text-3xl `}>d</span>ora</Link>

                </aside>

                <nav>
                    <h6 className="footer-title">Explore</h6>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/allArticles' className="link link-hover">All Articles</Link>
                    <Link to={`/myArticles/${user?.email}`} className="link link-hover">My Articles</Link>
                    <Link to='/postArticle' className="link link-hover">Post Articles</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Terms & Conditions</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className="flex gap-3">
                        <a  target='_blank' href='https://x.com/'><FaTwitter size={20}/></a>
                        <a target='_blank' href='https://www.linkedin.com/'><FaLinkedinIn size={20}/></a>
                        <a target='_blank' href='https://www.facebook.com/'><FaFacebookF size={20}/></a>
                    </div>
                </nav>
            </div>
            <div className="footer sm:footer-horizontal footer-center bg-violet-800/10 p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Readora</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;