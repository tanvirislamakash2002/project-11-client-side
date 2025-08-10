import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Register = () => {
  const { createUser, updateUser, setUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const { name, email, photo, password } = data;

    if (password.length <= 5) {
      toast.error('Password must be more than 6 characters');
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error('Password must contain an uppercase letter');
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error('Password must contain a lowercase letter');
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            Swal.fire({
              title: 'Registration Successful',
              timer: 1400,
              icon: 'success',
              showConfirmButton: false,
            });
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate(from);
          });
      })
      .catch((error) => {
        Swal.fire({
          title: `Failed to register: ${error.message}`,
          timer: 1400,
          icon: 'error',
          showConfirmButton: false,
        });
      });
  };

  return (
    <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 max-w-md mx-auto">
      <h2 className="text-4xl font-bold text-violet-700 mb-8 text-center">Create an Account</h2>

      <form onSubmit={handleRegister} className="space-y-6" noValidate>
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
          />
        </div>

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
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
          />
        </div>

        <div>
          <label htmlFor="photo" className="block mb-1 font-medium text-gray-700">
            Photo URL
          </label>
          <input
            id="photo"
            name="photo"
            type="url"
            placeholder="https://example.com/photo.jpg"
            required
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
            placeholder="Create a password"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-violet-600 hover:bg-violet-700 rounded-md text-white font-semibold transition"
        >
          Register
        </button>
      </form>

      <p className="mt-6 text-center text-gray-700">
        Already have an account?{' '}
        <Link
          to="/login"
          state={location.state}
          className="font-semibold text-violet-600 hover:text-violet-800 underline"
        >
          Login Now
        </Link>
      </p>
    </div>
  );
};

export default Register;
