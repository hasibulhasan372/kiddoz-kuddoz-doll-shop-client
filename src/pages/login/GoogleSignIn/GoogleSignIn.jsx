import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";


const GoogleSignIn = () => {
    const {googleLogIn} = useContext(AuthContext)
    const handleGoogleSignIn = () =>{
        googleLogIn()
        .then(result =>{
            const loggedUser = result.user;
            if(loggedUser.email){
                alert("Google Sign In Successful ")
            }
        })
    }
    return (
        <div className=" my-2">
            <button onClick={handleGoogleSignIn} className="border border-cyan-500 rounded py-2 px-4 font-semibold text-cyan-500">
                <img src="https://i.ibb.co/xLZyxZf/Google-Icons-09-512.webp" alt="" className="w-6 h-6 inline-block mr-1" />
               Sign in Google</button>
        </div>
    );
};

export default GoogleSignIn;