import { Link } from "react-router-dom";


const Toy = ({ toy }) => {
    const { _id, name, img, price, rating} = toy;
    return (
        <div className=" lg:px-4 rounded-xl p-4 lg:pb-4  glass overflow-x-hidden ">
            <div className="rounded-xl">
            <img src={img} alt="img" className=" w-[130px] h-[130px] lg:w-[260px]  lg:h-[250px]  lg:pt-5 overflow-x-hidden"
           
            />
            </div>
            <div className="mt-2">
                <h2 className="text-2xl font-semibold main-text-color overflow-x-hidden"
               
                >{name}</h2>
                <p className="font-semibold text-slate-800 overflow-x-hidden"
              
                >Price: {price}</p>
                <p className="font-semibold text-slate-800 overflow-x-hidden"
               
                >Rating: {rating}</p>
                <div className=" text-right">
                    <Link to={`/viewDetails/${_id}`}>
                    <button  className="secondary-btn overflow-x-hidden"
                  
                    >View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Toy;