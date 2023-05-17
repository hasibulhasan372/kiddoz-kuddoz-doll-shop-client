import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="my-con">
        <div className="lg:w-2/3 lg:p-4 bg-cyan-100 m-auto mt-10 rounded">
            <h1 className="lg:text-5xl lg:font-bold">Sign Up</h1>
            <form className="mt-8">
                <div className="mb-4">
                <label className="text-lg font-semibold block mb-2">Email</label>
                <input type="email" name="email" id="email" placeholder="your email" className="border rounded pl-2 py-2 lg:w-1/2" />
                </div> <div className="mb-4">
                <label className="text-lg font-semibold block mb-2">Password</label>
                <input type="password" name="password" id="password" placeholder="your password" className="border rounded pl-2 py-2 lg:w-1/2" />
                </div>
                <div>
                   <input type="submit" value="Submit" className="btn btn-bg-color border-rose-400 capitalize text-lg hover:bg-red-600 hover:border-none  " />

                </div>
            </form>
            <div>
                <p>Already have an account? <Link to="/login" className="text-green-500 underline">Login</Link></p>
            </div>

        </div>
    </div>
    );
};

export default SignUp;