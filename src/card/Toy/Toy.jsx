import { Link } from "react-router-dom";


const Toy = ({ toy }) => {
    const { _id, name, img, price, rating} = toy;
    return (
        <div className="card w-96 glass ">
            <figure ><img src={img} alt="img" className="lg:w-[250px] lg:h-[250px] object-cover lg:pt-5 text-left" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/viewDetails/${_id}`}>
                    <button  className="btn btn-primary capitalize">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Toy;