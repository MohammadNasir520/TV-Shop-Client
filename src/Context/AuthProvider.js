import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const user = 'rohim'

    const createUserByEmailAndPss = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createUserByEmailAndPss
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;