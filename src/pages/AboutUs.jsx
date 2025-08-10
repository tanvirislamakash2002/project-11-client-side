import { FaLightbulb, FaUsers, FaHandsHelping, FaHeart } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import { MdDiversity3 } from 'react-icons/md';
import { Link } from 'react-router';
import useAuth from '../hooks/useAuth';

const AboutUs = () => {
  const {darkMode} = useAuth()
  return (
    <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      
      {/* Hero Section */}
      <section className={`${darkMode ? 'bg-purple-900 text-white' : 'bg-purple-600 text-white'} bg-gradient-to-r from-purple-600 via-violet-700 to-purple-800`}>
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-md">About Our Readora Community</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed tracking-wide drop-shadow-sm">
            We're building a platform where curious minds meet to share, learn, and grow together. 
            Our mission is to democratize knowledge and make wisdom accessible to everyone.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className={`max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16`}>
        <div className="lg:w-1/2 space-y-6">
          <h2 className={`${darkMode ? 'text-gray-100' : 'text-gray-900'} text-4xl font-bold tracking-tight`}>
            Our Story
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed`}>
            Founded in <span className="font-semibold">{new Date().getFullYear()}</span>, our platform began as a simple idea: 
            what if we could create a space where people could freely share what they know 
            and learn from others in a supportive environment?
          </p>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed`}>
            Today, we've grown into a vibrant community of thousands of knowledge seekers 
            and sharers from around the world, all united by a common passion for learning.
          </p>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed`}>
            Every day, we're inspired by the amazing insights our community members bring 
            to the platform, and we're committed to making this the best place to share 
            and discover knowledge.
          </p>
        </div>
        <div className="lg:w-1/2 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
            alt="Community learning together"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Our Core Values */}
      <section className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} py-20`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`${darkMode ? 'text-gray-100' : 'text-violet-700'} text-4xl font-extrabold text-center mb-14 tracking-wide`}>
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <GiBrain className="text-6xl text-purple-600 mb-4" />,
                title: 'Knowledge Sharing',
                description: 'We believe everyone has something valuable to teach and something new to learn.'
              },
              {
                icon: <MdDiversity3 className="text-6xl text-purple-600 mb-4" />,
                title: 'Inclusivity',
                description: 'All perspectives are welcome here. Diversity of thought makes us stronger.'
              },
              {
                icon: <FaHandsHelping className="text-6xl text-purple-600 mb-4" />,
                title: 'Support',
                description: 'We lift each other up through constructive feedback and encouragement.'
              },
              {
                icon: <FaLightbulb className="text-6xl text-purple-600 mb-4" />,
                title: 'Curiosity',
                description: "We celebrate questions as much as answers, because that's where learning begins."
              },
              {
                icon: <FaHeart className="text-6xl text-purple-600 mb-4" />,
                title: 'Passion',
                description: 'Our community is driven by genuine enthusiasm for sharing knowledge.'
              },
              {
                icon: <FaUsers className="text-6xl text-purple-600 mb-4" />,
                title: 'Community',
                description: "We're more than a platform - we're a network of lifelong learners."
              }
            ].map(({ icon, title, description }) => (
              <div
                key={title}
                className={`${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-900'} rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300`}
              >
                {icon}
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className={`${darkMode ? 'text-gray-100' : 'text-violet-700'} text-4xl font-extrabold mb-6 tracking-tight`}>
          Join Our Growing Community
        </h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg mb-10 max-w-xl mx-auto leading-relaxed`}>
          Whether you're here to share your expertise or to discover new insights, 
          we'd love to have you as part of our knowledge-sharing journey.
        </p>
        <Link to='/contact-us'>
          <button
            className={`${darkMode ? 'bg-purple-700 hover:bg-purple-800 text-white' : 'bg-violet-600 hover:bg-violet-700 text-white'} px-8 py-3 rounded-lg shadow-lg transition-all duration-300`}
          >
            Contact Us Now
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
