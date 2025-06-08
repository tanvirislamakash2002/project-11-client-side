import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, updateUser, setUser } = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        const { name, email, photo, password } = data

        if(password.length<=5){
            alert('password must be more then 6 character');
            return
        }
        else if(!/[A-Z]/.test(password)){
            alert('password must contain an Uppercase latter');
            return
        }
        else if(!/[a-z]/.test(password)){
            alert('password must contain an lowercase latter');
            return
        }

        createUser(email, password)
            .then(userCredential => {
                console.log(userCredential)
                const user = userCredential.user
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        Swal.fire({
                            title: 'what an alert',
                            timer: '1400',
                            icon: 'success'
                        })
                        setUser({ ...user, displayName: name, photoURL: photo })
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
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Register now!</h1>

                <fieldset className="">
                    <form onSubmit={handleRegister} className='fieldset'>
                        <label className="label">Name</label>
                        <input required name='name' type="text" className="input" placeholder="Name" />
                        <label className="label">Email</label>
                        <input required name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">Photo URL</label>
                        <input required name='photo' type="text" className="input" placeholder="Photo URL" />
                        <label className="label">Password</label>
                        <input required name='password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                </fieldset>
            </div>
        </div>
    );
};

export default Register;