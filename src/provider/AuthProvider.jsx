import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from './AuthContext';
import axios from 'axios';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    // login
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signin with  google
    const signInWithGoogle = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    // signOut User
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            if(currentUser?.email){
                const userData = {email:currentUser.email}
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, userData)
                .then(res=>{
                    const token = res.data.token;
                    localStorage.setItem('token', token)
                })
                .catch(error=>console.log(error))
            }
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authData = {
        createUser,
        updateUser,
        loginUser,
        signInWithGoogle,
        user,
        setUser,
        signOutUser,
        loading
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;