import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const GoogleSignIn = () => {
    const {googleLogIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState("")

    const from = location.state?.from?.pathname || "/"; 
    const handleGoogleSignIn = () =>{
        setError("")
        googleLogIn()
        .then(result =>{
            const loggedUser = result.user;
            if(loggedUser.email){
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Log in Successful',
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
            navigate(from, {replace: true})
        })
        .catch( error => {
            return setError(error.message)
        })
    }
    return (
        <div>
            <div className="lg:mt-3">
                        <h3 className="text-red-500 font-semibold">{error}</h3>
                    </div>
            <div className=" my-2">
            <button onClick={handleGoogleSignIn} className="border border-cyan-500 rounded py-2 px-4 font-semibold text-cyan-500">
                <img src="https://i.ibb.co/xLZyxZf/Google-Icons-09-512.webp" alt="" className="w-6 h-6 inline-block mr-1" />
               Sign in Google</button>
        </div>
        </div>
    );
};

export default GoogleSignIn;