
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, updateUser, setUser } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || '/'

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        const { name, email, photo, password } = data

        if(password.length<=5){
            toast.error('password must be more then 6 character');
            return
        }
        else if(!/[A-Z]/.test(password)){
            toast.error('password must contain an Uppercase latter');
            return
        }
        else if(!/[a-z]/.test(password)){
            toast.error('password must contain an lowercase latter');
            return
        }

        createUser(email, password)
            .then(userCredential => {
                console.log(userCredential)
                const user = userCredential.user
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        Swal.fire({
                            title: 'Registration Successful',
                            timer: '1400',
                            icon: 'success'
                        })
                        setUser({ ...user, displayName: name, photoURL: photo })
                        navigate(from)
                    })
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
                <div className="card-body bg-gray-100/10 shadow-xl">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                    <fieldset className="">
                        <form onSubmit={handleRegister} className='fieldset'>
                            <label className="label">Name</label>
                            <input required name='name' type="text" className="input input-shadow" placeholder="Name" />
                            <label className="label">Email</label>
                            <input required name='email' type="email" className="input input-shadow" placeholder="Email" />
                            <label className="label">Photo URL</label>
                            <input required name='photo' type="text" className="input input-shadow" placeholder="Photo URL" />
                            <label className="label">Password</label>
                            <input required name='password' type="password" className="input input-shadow" placeholder="Password" />

                            <button className="btn bg-violet-950 text-white border-2 border-violet-950 hover:bg-white hover:text-violet-950 text-lg mt-4">Register</button>
                        </form>
                        <p>Already have an account? Please <Link className='text-red-500 underline font-semibold' to='/login' state={location.state}>Login Now</Link></p>

                    </fieldset>
                </div>
            {/* </div> */}
        </div>
    );
};

export default Register;