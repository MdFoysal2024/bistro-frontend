import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
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


    //  User account login---->
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(email, password);
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
            console.log('Current User', currentUser)

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
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
