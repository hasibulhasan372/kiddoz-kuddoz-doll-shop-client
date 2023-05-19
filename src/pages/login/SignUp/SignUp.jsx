import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import Swal from "sweetalert2";


const SignUp = () => {
    const { createUser, logOut} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignIn = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            updateUserInfo(result.user, name, photo);
            if(loggedUser){
                logOut();
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Sign Up Successful',
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
            form.reset("");
            navigate("/login")
        })
        .catch(error => console.log(error))

    };

    const updateUserInfo = (currentUser,name, photo) =>{
         updateProfile(currentUser, {
            displayName: name, photoURL: photo
        })
        .then(()=>{})
        .then(error => console.log(error))
    };

    return (
        <div className="my-con">
        <div className="lg:w-2/3 lg:p-8 bg-cyan-100 m-auto mt-10 rounded ">
            <h1 className="lg:text-5xl lg:font-bold">Sign Up</h1>
            <form onSubmit={handleSignIn} className="mt-8 grid lg:grid-cols-2 lg:gap-x-8">
                <div className="mb-4">
                <label className="text-lg font-semibold block mb-2">Name</label>
                <input type="name" name="name" id="name" placeholder="Your name" className="border rounded pl-2 py-2 lg:w-full" />
                </div>
                <div className="mb-4">
                <label className="text-lg font-semibold block mb-2">Photo URL</label>
                <input type="url" name="photo" id="photo" placeholder="Photo URL" className="border rounded pl-2 py-2 lg:w-full" />
                </div>
                 <div className="mb-4">
                <label className="text-lg font-semibold block mb-2">Email</label>
                <input type="email" name="email" id="email" placeholder="Your email" className="border rounded pl-2 py-2 lg:w-full" />
                </div>
                 <div className="mb-4">
                <label className="text-lg font-semibold block mb-2">Password</label>
                <input type="password" name="password" id="password" placeholder="Your password" className="border rounded pl-2 py-2 lg:w-full" />
                </div>
                <div>
                   <input type="submit" value="Submit" className="btn btn-bg-color border-rose-400 capitalize text-lg hover:bg-red-600 hover:border-none  " />

                </div>
            </form>
            <div className="mt-4">
                    <h2 className="text-lg font-semibold">Or</h2>
                    <GoogleSignIn></GoogleSignIn>
                </div>
            <div>
                <p>Already have an account? <Link to="/login" className="text-green-500 underline">Login</Link></p>
            </div>

        </div>
    </div>
    );
};

export default SignUp;