import { Link } from "react-router-dom";


const Toy = ({ toy }) => {
    const { _id, name, img, price, rating} = toy;
    return (
        <div className=" lg:px-4 rounded-xl lg:pb-4  glass ">
            <img src={img} alt="img" className="lg:w-[260px] lg:h-[250px] object-cover lg:pt-5 rounded-xl" />
            <div className="mt-2">
                <h2 className="text-2xl font-semibold main-text-color">{name}</h2>
                <p className="font-semibold text-slate-800">Price: {price}</p>
                <p className="font-semibold text-slate-800">Rating: {rating}</p>
                <div className=" text-right">
                    <Link to={`/viewDetails/${_id}`}>
                    <button  className="secondary-btn">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Toy;