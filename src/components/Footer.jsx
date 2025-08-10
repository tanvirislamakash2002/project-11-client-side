import React from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
    const { darkMode } = useAuth();

    return (
        <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link to='/' className="flex items-center">
                            <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Rea<span className={`${darkMode ? 'text-primary' : 'text-primary'} text-3xl`}>d</span>ora
                            </span>
                        </Link>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Empowering knowledge sharing through community contributions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" 
                               className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-gray-100 text-gray-700'} transition-colors`}>
                                <FaTwitter className="w-4 h-4" />
                            </a>
                            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
                               className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-gray-100 text-gray-700'} transition-colors`}>
                                <FaLinkedinIn className="w-4 h-4" />
                            </a>
                            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"
                               className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-gray-100 text-gray-700'} transition-colors`}>
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Explore</h3>
                        <ul className={`space-y-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/allArticles" className="hover:text-primary transition-colors">All Articles</Link></li>
                            <li><Link to="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    {/* <div className="space-y-4">
                        <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Resources</h3>
                        <ul className={`space-y-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div> */}

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact Us</h3>
                        <ul className={`space-y-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <li className="flex items-center">
                                <IoMdMail className="mr-2 text-primary" />
                                <span>contact@readora.com</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>123 Knowledge St, Learning City</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className={`py-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                    <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                        © {new Date().getFullYear()} Readora. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className={`text-sm hover:text-primary transition-colors ${darkMode ? 'text-gray-500 hover:text-primary' : 'text-gray-600 hover:text-primary'}`}>
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className={`text-sm hover:text-primary transition-colors ${darkMode ? 'text-gray-500 hover:text-primary' : 'text-gray-600 hover:text-primary'}`}>
                            Terms of Service
                        </Link>
                        <Link to="/cookies" className={`text-sm hover:text-primary transition-colors ${darkMode ? 'text-gray-500 hover:text-primary' : 'text-gray-600 hover:text-primary'}`}>
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;