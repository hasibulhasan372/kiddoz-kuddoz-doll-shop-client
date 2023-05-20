import { Link } from "react-router-dom";


const Toy = ({ toy }) => {
    const { _id, name, img, price, rating} = toy;
    return (
        <div className=" lg:px-4 rounded-xl p-4 lg:pb-4  glass ">
            <div className="rounded-xl">
            <img src={img} alt="img" className=" w-[130px] h-[130px] lg:w-[260px]  lg:h-[250px]  lg:pt-5"
            data-aos="fade-right" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
            />
            </div>
            <div className="mt-2">
                <h2 className="text-2xl font-semibold main-text-color"
                data-aos="fade-left" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
                >{name}</h2>
                <p className="font-semibold text-slate-800"
                data-aos="fade-right" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
                >Price: {price}</p>
                <p className="font-semibold text-slate-800"
                data-aos="fade-left" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
                >Rating: {rating}</p>
                <div className=" text-right">
                    <Link to={`/viewDetails/${_id}`}>
                    <button  className="secondary-btn"
                    data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
                    >View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Toy;