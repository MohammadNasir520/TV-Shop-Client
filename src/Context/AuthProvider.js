import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    //  setting loading for when data is loading
    const [loading, setLoading] = useState(true)

    // create user with email
    const createUserByEmailAndPss = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //set current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    // user login by email paswword
    const loginByEmailAndPassWord = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };


    //use login by google
    const loginWithEmail = provider => {
        return signInWithPopup(auth, provider)
    }

    //updatedeing user
    const updateUser = (userInfo) => {

        return updateProfile(auth.currentUser, userInfo)
    }


    // logout
    const logout = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        createUserByEmailAndPss,
        loginByEmailAndPassWord,
        loginWithEmail,
        logout,
        loading,
        updateUser,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;