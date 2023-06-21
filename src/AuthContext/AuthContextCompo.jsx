import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Cofig/firebse.config';

export const AuthContextData = createContext()
const auth = getAuth(app)
const githubProvider = new GithubAuthProvider()
const googleProvider = new GoogleAuthProvider()


const AuthContextCompo = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user with email pass func
    const createUserWithEmailPassFunc = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update user profile func
    const updateUserProfileFunc = (currUser, name, photoURL)=>{
        return updateProfile(currUser, {
            displayName: name, photoURL: photoURL
          })
    }
    // signin user with email pass func
    const signinUserWithEmailPassFunc = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signin with github
    const signinWithGithubFunc = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // signin with github
    const signinWithGoogleFunc = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // signout func
    const signoutFunc = ()=>{
        return signOut(auth)
    }


    // monitoring auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currUser => {
            setLoading(false)
            setUser(currUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    // shared data
    const authObj = {
        createUserWithEmailPassFunc,
        updateUserProfileFunc,
        signinUserWithEmailPassFunc,
        signinWithGithubFunc,
        signinWithGoogleFunc,
        signoutFunc,
        user,
        setUser,
        loading,
        setLoading,
    }

    return (
        <AuthContextData.Provider value={authObj}>
            {children}
        </AuthContextData.Provider>
    )
};

export default AuthContextCompo;