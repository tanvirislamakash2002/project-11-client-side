import React from "react";
import { FaUsers, FaBook, FaPlusCircle, FaChartLine, FaUser } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-base-200 p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-base-content/70">Welcome back! Here's your overview.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-primary text-primary-content p-6 rounded-xl shadow-md flex items-center space-x-4">
          <FaUsers size={28} />
          <div>
            <p className="text-sm opacity-80">Total Users</p>
            <p className="text-2xl font-bold">1,245</p>
          </div>
        </div>

        <div className="bg-secondary text-secondary-content p-6 rounded-xl shadow-md flex items-center space-x-4">
          <FaBook size={28} />
          <div>
            <p className="text-sm opacity-80">My Articles</p>
            <p className="text-2xl font-bold">34</p>
          </div>
        </div>

        <div className="bg-accent text-accent-content p-6 rounded-xl shadow-md flex items-center space-x-4">
          <FaPlusCircle size={28} />
          <div>
            <p className="text-sm opacity-80">Articles Posted</p>
            <p className="text-2xl font-bold">8</p>
          </div>
        </div>

        <div className="bg-neutral text-neutral-content p-6 rounded-xl shadow-md flex items-center space-x-4">
          <FaChartLine size={28} />
          <div>
            <p className="text-sm opacity-80">Views This Month</p>
            <p className="text-2xl font-bold">12.5K</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-base-200 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="divide-y divide-base-300">
          <li className="py-3 flex items-center justify-between">
            <span>New article posted: "Understanding MERN Stack"</span>
            <span className="text-sm opacity-70">2 hours ago</span>
          </li>
          <li className="py-3 flex items-center justify-between">
            <span>Profile updated</span>
            <span className="text-sm opacity-70">1 day ago</span>
          </li>
          <li className="py-3 flex items-center justify-between">
            <span>Article "Tailwind Tips" reached 1K views</span>
            <span className="text-sm opacity-70">3 days ago</span>
          </li>
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="bg-base-200 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-primary flex items-center gap-2">
            <FaPlusCircle /> Post Article
          </button>
          <button className="btn btn-secondary flex items-center gap-2">
            <FaBook /> View My Articles
          </button>
          <button className="btn btn-accent flex items-center gap-2">
            <FaUser /> Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
