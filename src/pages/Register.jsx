import React from 'react';

const Register = () => {
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Register now!</h1>

                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Photo URL</label>
                    <input type="text" className="input" placeholder="Photo URL" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </div>
        </div>
    );
};

export default Register;