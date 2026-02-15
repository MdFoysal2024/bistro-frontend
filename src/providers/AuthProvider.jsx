import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // creat new User account---->
    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // User Profile updated!
    const updateUserProfile = (name, photo) => {
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    //  User account login---->
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    // user account logout ------->
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }





























    //---Manage Users in Firebase-->
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current User from auth:', currentUser)

            setLoading(false);
        })

        return () => {
            return unsubscribe();
        }

    }, [])





    const authInfo = {
        user,
        loading,
        creatUser,
        signIn,
        logOut,
        updateUserProfile

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
