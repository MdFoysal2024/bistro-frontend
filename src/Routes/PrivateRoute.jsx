import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);



    const location = useLocation();
    // যে প্রাইভেট পেজ থেকে লগিন পেজে আসবে লগিন এরপর সরাসরি ঐ পেজে যেতে 



    if (loading) {
        return <div className="flex items-center py-24 justify-center text-center">
            
            {/* <span className=" loading loading-spinner text-primary"></span> */}
            {/* <span className="skeleton skeleton-text">Data Loading...</span> */}

            <span className="loading loading-spinner loading-xl"></span>


            

        </div>
        //loading না দিলে প্রাইভেট পেইজ রিলোড দিলে লগিন পেজে চলে যাবে। 
    }


    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute
