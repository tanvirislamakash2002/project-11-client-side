
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';

const Login = () => {
    const { signInWithGoogle, loginUser } = useAuth()
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state || '/'

    // signin with google
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from)
            })
            .then(error => {
                // console.log(error)
            })
    }

    //login with email and password
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        const { email, password } = data
        loginUser(email, password)
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from)
            })
            .catch(error => {
                Swal.fire({
                    title: `failed to register ${error.message}`,
                    timer: '1400',
                    icon: 'success'
                })
            })
    }
    return (


        <div className="card bg-base-100 w-full mx-auto max-w-sm select-shadow" style={{ perspective: '1000px' }}>
         {/* <div className="flex items-center min-h-screen"> */}
               <div className="card-body shadow-2xl bg-gray-100/10">
                <h1 className="text-5xl font-bold">Login now!</h1>

                <fieldset className="fieldset">
                    <form onSubmit={handleLogin} className='fieldset'>
                        <label className="label">Email</label>
                        <input required name='email' type="email" className="input input-shadow" placeholder="Email" />
                        <label className="label">Password</label>
                        <input required name='password' type="password" className="input input-shadow" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn bg-violet-950 text-white border-2 border-violet-950 hover:bg-white hover:text-violet-950 text-lg mt-4">Login</button>
                    </form>
                    <button onClick={handleSignInWithGoogle} className="btn  text-black border-[#e5e5e5] bg-violet-200 hover:bg-violet-300">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Continue with Google
                    </button>
                    <p>Don't have an account? Please <Link className='text-red-500 underline font-semibold' to='/register' state={location.state}>Register Now</Link></p>
                </fieldset>
            </div>
         {/* </div> */}
        </div>

    );
};

export default Login;