import React from "react";
import useAuth from "../hooks/useAuth";
import { FaUserEdit } from "react-icons/fa";

const Profile = () => {
  const { user } = useAuth();
  const darkMode = document.documentElement.classList.contains("dark");

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Profile Card */}
        <div className="bg-base-100 shadow-xl rounded-2xl p-6 flex flex-col md:flex-row gap-8">
          {/* Left Side - User Info */}
          <div className="md:w-1/3 flex flex-col items-center text-center">
            <div className="avatar">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL || "https://i.ibb.co/MBtjqXQ/no-avatar.png"} alt="User Avatar" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-4">{user?.displayName || "Anonymous"}</h2>
            <p className="text-sm opacity-80">{user?.role || "User"}</p>
            <p className="text-sm mt-2">{user?.email}</p>
          </div>

          {/* Right Side - Editable Info */}
          <div className="md:w-2/3">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaUserEdit /> Edit Profile
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  disabled
                  className="input input-bordered w-full bg-base-300"
                />
              </div>

              <div className="md:col-span-2">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.photoURL}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="md:col-span-2 mt-4">
                <button type="submit" className="btn btn-primary w-full">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
