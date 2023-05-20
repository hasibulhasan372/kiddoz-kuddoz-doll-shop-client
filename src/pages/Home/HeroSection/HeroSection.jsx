import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import Aos from "aos";
Aos.init();

const HeroSection = () => {
    return (
        <div className="hero lg:h-[400px]" style={{ backgroundImage: `url("https://i.ibb.co/1Jv7SHr/pexels-skylar-kang-6045113.jpg")` } }>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="max-w-xl">
                    <h1 className="mb-5 lg:leading-[70px] text-5xl font-bold text-purple-300" 
                    data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out">
                        A Charming Welcome <br /> To <br /> 
                        <span className="text-[#ff6799]" >Kiddoz Kuddoz Doll Shop</span></h1>

                    <p className="mb-5  " 
                    data-aos="fade-left" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out">
                        We are the number one Doll shop in the city. You are are welcome to our shop to buy the best liked and trending toys for your child
                        </p>
                    <Link to="/allToys" >
                        <button  className="secondary-btn capitalize"
                    data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
                    >All Toys
                        </button></Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;