import { Link } from "react-router-dom";


const HeroSection = () => {
    return (
        <div className="hero lg:h-[400px] " style={{ backgroundImage: `url("https://i.ibb.co/1Jv7SHr/pexels-skylar-kang-6045113.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 lg:leading-[70px] text-5xl font-bold text-purple-300">A Charming Welcome <br /> To <br /> <span className="text-[#ff6799]">Kiddoz Kuddoz Doll Shop</span></h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to="/allToys" className="btn btn-primary capitalize">All Toys</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;