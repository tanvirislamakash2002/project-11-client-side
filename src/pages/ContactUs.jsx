import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero bg-[#be5fe6] text-white">
        <div className="hero-content text-center py-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Contact Our Readora Community</h1>
            <p className="text-xl py-6">
              Have questions, suggestions, or feedback? We'd love to hear from you! 
              Reach out through any of the channels below or send us a message directly.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {/* Email Card */}
          <div className="card bg-base-100/70 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body items-center text-center">
              <div className="p-4 rounded-full bg-[#be5fe6] bg-opacity-10 mb-4">
                <FaEnvelope className="text-4xl text-white" />
              </div>
              <h3 className="card-title text-2xl mb-2">Email Us</h3>
              <p className="mb-2">For general inquiries and support</p>
              <a href="mailto:support@knowledgehub.com" className="link link-primary text-xl">
                support@redora.com
              </a>
            </div>
          </div>

          {/* Support Card */}
          {/* <div className="card bg-base-100/70 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body items-center text-center">
              <div className="p-4 rounded-full bg-[#be5fe6] bg-opacity-10 mb-4">
                <MdSupportAgent className="text-4xl text-white" />
              </div>
              <h3 className="card-title text-2xl mb-2">Help Center</h3>
              <p className="mb-2">Visit our comprehensive help center</p>
              <a href="/help" className="btn btn-primary btn-sm">
                Visit Help Center
              </a>
            </div>
          </div> */}

          {/* Social Card */}
          <div className="card bg-base-100/70 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body items-center text-center">
              <div className="p-4 rounded-full bg-[#be5fe6] bg-opacity-10 mb-4">
                <FaPaperPlane className="text-4xl text-white" />
              </div>
              <h3 className="card-title text-2xl mb-2">Community</h3>
              <p className="mb-2">Join our community discussions</p>
              <div className="flex gap-4">
                <button className="btn btn-circle btn-outline hover:bg-violet-200 ">
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </button>
                <button className="btn btn-circle btn-outline hover:bg-violet-200 ">
                  <span className="sr-only">Discord</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start rounded-2xl bg-violet-200 p-14">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="input input-bordered w-full input-shadow"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full input-shadow"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="subject">
                  <span className="label-text">Subject</span>
                </label>
                <select className="select select-bordered w-full select-shadow" id="subject" required>
                  <option disabled selected>Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Feature Request</option>
                  <option>Report a Problem</option>
                  <option>Partnership Opportunity</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label" htmlFor="message">
                  {/* <span className="label-text">Your Message</span> */}
                </label>
                <textarea
                  id="message"
                  className="textarea textarea-bordered h-32 w-full input-shadow"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <div className="form-control pt-4">
                <button type="submit" className="btn bg-[#be5fe6] text-white">
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Additional Contact Info */}
          <div className="card bg-violet-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-6">More Ways to Reach Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#be5fe6] bg-opacity-10">
                    <FaPhone className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone Support</h4>
                    <p className="text-gray-600">Monday - Friday, 9am - 5pm EST</p>
                    <a href="tel:+18005551234" className="link link-primary">
                      +1 (800) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#be5fe6] bg-opacity-10">
                    <FaMapMarkerAlt className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Our Office</h4>
                    <address className="not-italic">
                      123 Knowledge Lane<br />
                      Boston, MA 02108<br />
                      United States
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#be5fe6] bg-opacity-10">
                    <FaClock className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Business Hours</h4>
                    <p>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ CTA */}
      {/* <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Quickly?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Check out our Frequently Asked Questions for instant answers to common questions.
          </p>
          <a href="/faq" className="btn btn-primary btn-lg">
            Visit FAQ Section
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default ContactUs;