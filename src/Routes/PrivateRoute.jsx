import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <h1>Loading..........</h1>
    }
    if (!user) {
        Swal.fire(
            {
                position: 'top',
                title: 'Please Login First'
            }
        )
    }
    else {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
};

export default PrivateRoute;