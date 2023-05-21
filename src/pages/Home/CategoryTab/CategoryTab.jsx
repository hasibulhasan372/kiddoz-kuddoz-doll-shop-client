import { useContext, useEffect, useState } from "react";
import Toy from "../../../card/Toy/Toy";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { BounceLoader } from "react-spinners";


const CategoryTab = () => {
    const {loading} = useContext(AuthContext)
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Disney Dolls");
    useEffect(() => {
        fetch(`https://kiddoz-kuddoz-doll-shop-server.vercel.app/dolls?category=${activeTab}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [activeTab]);

    const handleTabName = (tabName) => {
        setActiveTab(tabName);
    }
    return (
        <div className="hero lg:my-6 " style={{ backgroundImage: `url("https://i.ibb.co/sPdZfRL/pexels-laura-james-6102450.jpg")` }}>
            <div className="hero-overlay bg-opacity-60 "></div>

            <div className="my-con py-10  lg:py-14 ">
                    <h1 className=" text-xl lg:text-3xl main-text-color lg:font-bold text-center pb-6"
                    data-aos="fade-right" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
                    >Shop By Category 
                        </h1>
                <div className="flex">
                    <button onClick={() => handleTabName("Disney Dolls")}
                        className={`${activeTab === "Disney Dolls" ? "border-t border-r p-2 font-semibold main-text-color text-lg" : "border-t border-r p-2 bg-slate-300 font-semibold text-lg"}`}
                        data-aos="fade-left" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
                        
                        >
                        Disney Doll
                    </button>
                    <button onClick={() => handleTabName("American Girl")} className={`${activeTab === "American Girl" ? "border-t border-r p-2 font-semibold main-text-color text-lg" : "border-t border-r p-2 bg-slate-300 font-semibold text-lg"}`}
                    data-aos="fade-bottom" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
                    >American Doll</button>
                    <button onClick={() => handleTabName("Barbie Dolls")} className={`${activeTab === "Barbie Dolls" ? "border-t border-r p-2 font-semibold main-text-color text-lg" : "border-t border-r p-2 bg-slate-300 font-semibold text-lg"}`}
                    data-aos="fade-left" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
                    >Barbie Doll</button>

                </div>
                <div className="mt-4 grid lg:grid-cols-3 gap-y-5 lg:gap-10">

                    { loading ? <BounceLoader color="#36d7b7" className="m-auto" />  :
                        toys.map(toy => <Toy
                            key={toy._id}
                            toy={toy}
                        ></Toy>)
                    }
                </div>
            </div>



        </div>
    );
};

export default CategoryTab;
