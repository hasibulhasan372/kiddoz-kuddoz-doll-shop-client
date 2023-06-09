import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../customHooks/useTitle";


const Error = () => {
    const {error, status} = useRouteError();
    useTitle("error")
    return (
        <div className="h-screen flex items-center justify-center my-con">
            <div className="inline-block text-center">
            <h1 className="text-3xl font-bold">This is the Error Page</h1>
            <h3 className="text-xl font-bold py-6">{error.message}</h3>
            <h4 className="text-5xl font-bold">{status || 404}</h4>
            <img src="https://i.ibb.co/0ZdKzXy/depositphotos-26505551-stock-photo-error-metaphor.webp" alt="" className="py-6" />
            <Link to="/" className="btn my-6 ">Back to Home</Link>

            </div>


        </div>
    );
};

export default Error;