import { FaLightbulb, FaUsers, FaHandsHelping, FaHeart } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import { MdDiversity3 } from 'react-icons/md';
import { Link } from 'react-router';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-base-100/50">
      {/* Hero Section */}
      <div className="hero bg-[#be5fe6] text-white">
        <div className="hero-content text-center py-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">About Our Readora Community</h1>
            <p className="text-xl py-6">
              We're building a platform where curious minds meet to share, learn, and grow together. 
              Our mission is to democratize knowledge and make wisdom accessible to everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-4">
              Founded in {new Date().getFullYear()}, our platform began as a simple idea: 
              what if we could create a space where people could freely share what they know 
              and learn from others in a supportive environment?
            </p>
            <p className="text-lg mb-4">
              Today, we've grown into a vibrant community of thousands of knowledge seekers 
              and sharers from around the world, all united by a common passion for learning.
            </p>
            <p className="text-lg">
              Every day, we're inspired by the amazing insights our community members bring 
              to the platform, and we're committed to making this the best place to share 
              and discover knowledge.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
              alt="Community learning together" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-base-200/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <GiBrain className="text-5xl text-[#be5fe6] mb-4" />
                <h3 className="card-title text-2xl mb-2">Knowledge Sharing</h3>
                <p>We believe everyone has something valuable to teach and something new to learn.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <MdDiversity3 className="text-5xl text-[#be5fe6] mb-4" />
                <h3 className="card-title text-2xl mb-2">Inclusivity</h3>
                <p>All perspectives are welcome here. Diversity of thought makes us stronger.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaHandsHelping className="text-5xl text-[#be5fe6] mb-4" />
                <h3 className="card-title text-2xl mb-2">Support</h3>
                <p>We lift each other up through constructive feedback and encouragement.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaLightbulb className="text-5xl text-[#be5fe6] mb-4" />
                <h3 className="card-title text-2xl mb-2">Curiosity</h3>
                <p>We celebrate questions as much as answers, because that's where learning begins.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaHeart className="text-5xl text-[#be5fe6] mb-4" />
                <h3 className="card-title text-2xl mb-2">Passion</h3>
                <p>Our community is driven by genuine enthusiasm for sharing knowledge.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaUsers className="text-5xl text-[#be5fe6] mb-4" />
                <h3 className="card-title text-2xl mb-2">Community</h3>
                <p>We're more than a platform - we're a network of lifelong learners.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us CTA */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our Growing Community</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Whether you're here to share your expertise or to discover new insights, 
          we'd love to have you as part of our knowledge-sharing journey.
        </p>
        <Link to='/contact-us'><button className="btn bg-[#be5fe6] text-white btn-lg">Contact Us Now</button></Link>
      </div>
    </div>
  );
};


export default AboutUs;