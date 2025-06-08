import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from './AuthContext';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // Register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    // login
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signin with  google
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    // signOut User
    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
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
        signOutUser
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;