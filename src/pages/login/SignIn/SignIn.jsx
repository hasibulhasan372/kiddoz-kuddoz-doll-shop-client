import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import Swal from "sweetalert2";


const SignIn = () => {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"; 

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset("")
                if (loggedUser) {
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
            .catch(error => console.log(error))

    }

    return (
        <div className="my-con lg:my-12">
            <div className="lg:w-2/3 lg:p-8 bg-cyan-100 m-auto mt-10 rounded ">
                <h1 className="lg:text-5xl lg:font-bold">Login</h1>
                <form onSubmit={handleLogIn} className="mt-8 lg:w-1/2 m-auto">
                    <div className="mb-4 ">
                        <label className="text-lg font-semibold block mb-2">Email</label>
                        <input type="email" name="email" id="email" placeholder="your email" className="border rounded pl-2 py-2 lg:w-full" />
                    </div> <div className="mb-4">
                        <label className="text-lg font-semibold block mb-2">Password</label>
                        <input type="password" name="password" id="password" placeholder="your password" className="border rounded pl-2 py-2 lg:w-full" />
                    </div>
                    <div>
                        <input type="submit" value="Submit" className="btn btn-bg-color border-rose-400 capitalize text-lg hover:bg-red-600 hover:border-none  " />

                    </div>
                    <div className="mt-4">
                    <h2 className="text-lg font-semibold">Or</h2>
                    <GoogleSignIn></GoogleSignIn>
                </div>
                <div>
                    <p>Haven't an account? <Link to="/signUp" className="text-green-500 underline">Sign Up</Link></p>
                </div>
                </form>
                
            </div>
        </div>
    );
};

export default SignIn;