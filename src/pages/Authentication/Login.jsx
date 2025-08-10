import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import React, { useState } from 'react';

const Login = () => {
  const { signInWithGoogle, loginUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';

  // State to control inputs for autofill
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully logged in with Google!',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from);
      })
      .catch(() => {
        // Handle error if needed
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login successful!',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from);
      })
      .catch((error) => {
        Swal.fire({
          title: `Failed to login: ${error.message}`,
          icon: 'error',
          timer: 1400,
        });
      });
  };

  // Autofill demo credentials
  const handleFillDemo = () => {
    setEmail('covicu@mailinator.com');
    setPassword('Akash123');
  };

  return (
    <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8">
      <h2 className="text-4xl font-bold text-violet-700 mb-8 text-center">Welcome Back</h2>

      {/* Autofill Button */}
      <div className="mb-6 text-center">
        <button
          type="button"
          onClick={handleFillDemo}
          className="inline-block px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md font-semibold transition"
          aria-label="Fill demo credentials"
        >
          Fill Demo Credentials
        </button>
      </div>

      <form onSubmit={handleLogin} className="space-y-6" noValidate>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
          />
        </div>

        <div className="flex justify-between items-center">
          <a href="#" className="text-sm text-violet-600 hover:text-violet-800 font-semibold">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-violet-600 hover:bg-violet-700 rounded-md text-white font-semibold transition"
        >
          Login
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <hr className="flex-grow border-gray-300" />
        <span className="text-gray-500 font-semibold">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <button
        onClick={handleSignInWithGoogle}
        className="w-full flex justify-center items-center gap-2 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition"
        aria-label="Sign in with Google"
      >
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          aria-hidden="true"
        >
          <path fill="#4285f4" d="M113 253h140v61H113z" />
          <path
            fill="#34a853"
            d="M256 113c36 0 66 14 89 38l-68 68H113v-60c0-22 9-42 23-57l56-56c-12-9-26-14-41-14C153 31 113 71 113 113z"
          />
          <path fill="#fbbc05" d="M402 138l-74 54c10 22 11 49 3 74l72 56c18-32 26-70 26-109 0-23-5-44-15-75z" />
          <path
            fill="#ea4335"
            d="M256 399c-27 0-53-12-71-31l-55 54c33 33 79 54 126 54 41 0 78-15 105-39l-73-57c-16 12-36 19-57 19z"
          />
        </svg>
        Continue with Google
      </button>

      <p className="mt-6 text-center text-gray-700">
        Don't have an account?{' '}
        <Link
          to="/register"
          state={location.state}
          className="font-semibold text-violet-600 hover:text-violet-800 underline"
        >
          Register Now
        </Link>
      </p>
    </div>
  );
};

export default Login;
