import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';

const ContactUs = () => {
  const { darkMode } = useAuth();

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-base-100 text-gray-900'} py-16 px-4 sm:px-6`}>
      
      {/* Hero Section */}
      <section className={`${darkMode ? 'bg-purple-900 text-white' : 'bg-purple-600 text-white'} bg-gradient-to-r from-purple-600 via-violet-700 to-purple-800 rounded-xl py-20 px-6 text-center max-w-5xl mx-auto mb-16`}>
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-md">Contact Our Readora Community</h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed tracking-wide drop-shadow-sm">
          Have questions, suggestions, or feedback? We'd love to hear from you! Reach out through any of the channels below or send us a message directly.
        </p>
      </section>

      {/* Contact Methods */}
      <section className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-20`}>
        {/* Email Card */}
        <div className={`${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'} rounded-xl shadow-lg p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300`}>
          <div className="p-5 rounded-full bg-purple-700 bg-opacity-20 mb-6">
            <FaEnvelope className="text-5xl text-purple-100" />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Email Us</h3>
          <p className="mb-3 text-sm md:text-base opacity-80">For general inquiries and support</p>
          <a href="mailto:support@redora.com" className="text-purple-600 font-medium hover:underline">
            support@redora.com
          </a>
        </div>

        {/* Community Card */}
        <div className={`${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'} rounded-xl shadow-lg p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300`}>
          <div className="p-5 rounded-full bg-purple-700 bg-opacity-20 mb-6">
            <FaPaperPlane className="text-5xl text-purple-100" />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Community</h3>
          <p className="mb-4 text-sm md:text-base opacity-80">Join our community discussions</p>
          <div className="flex gap-5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="btn btn-circle btn-outline border-purple-600 text-purple-600 hover:bg-purple-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="btn btn-circle btn-outline border-purple-600 text-purple-600 hover:bg-purple-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form and Additional Info */}
      <section className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 rounded-2xl p-14 ${darkMode ? 'bg-gray-800' : 'bg-purple-50'}`}>
        {/* Form */}
        <div>
          <h2 className={`${darkMode ? 'text-gray-100' : 'text-gray-900'} text-3xl font-bold mb-8`}>
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className={`${darkMode ? 'text-gray-200' : 'text-gray-700'} block mb-2 font-semibold`}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
                className={`w-full rounded-md border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition
                  ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-600'}`}
              />
            </div>

            <div>
              <label htmlFor="email" className={`${darkMode ? 'text-gray-200' : 'text-gray-700'} block mb-2 font-semibold`}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                className={`w-full rounded-md border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition
                  ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-600'}`}
              />
            </div>

            <div>
              <label htmlFor="subject" className={`${darkMode ? 'text-gray-200' : 'text-gray-700'} block mb-2 font-semibold`}>
                Subject
              </label>
              <select
                id="subject"
                required
                className={`w-full rounded-md border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition
                  ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Feature Request</option>
                <option>Report a Problem</option>
                <option>Partnership Opportunity</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message here..."
                required
                rows={5}
                className={`w-full rounded-md border px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 transition
                  ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-600'}`}
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>

        {/* Additional Contact Info */}
        <div className={`${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-900'} rounded-xl shadow-lg p-10`}>
          <h3 className="text-2xl font-bold mb-8">More Ways to Reach Us</h3>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-purple-700 bg-opacity-20 text-purple-100">
                <FaPhone className="text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Phone Support</h4>
                <p className="opacity-80">Monday - Friday, 9am - 5pm EST</p>
                <a href="tel:+18005551234" className="text-purple-600 hover:underline font-medium">
                  +1 (800) 555-1234
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-purple-700 bg-opacity-20 text-purple-100">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Our Office</h4>
                <address className="not-italic opacity-80 leading-relaxed">
                  123 Knowledge Lane<br />
                  Boston, MA 02108<br />
                  United States
                </address>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-purple-700 bg-opacity-20 text-purple-100">
                <FaClock className="text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                <p className="opacity-80">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
