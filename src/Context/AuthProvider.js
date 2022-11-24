import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user)

    // create user with email
    const createUserByEmailAndPss = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    //set current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

        })
        return () => unsubscribe();
    }, [])
    // user login by email paswword

    const loginByEmailAndPassWord = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout
    const logout = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        createUserByEmailAndPss,
        loginByEmailAndPassWord,
        logout,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;