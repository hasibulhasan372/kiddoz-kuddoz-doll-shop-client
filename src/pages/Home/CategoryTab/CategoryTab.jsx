import { useEffect, useState } from "react";
import Toy from "../../../card/Toy/Toy";


const CategoryTab = () => {
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

            <div className="my-con  lg:py-14 ">
                    <h1 className="lg:text-4xl main-text-color lg:font-bold text-center pb-6">Shop By Category </h1>
                <div className="flex">
                    <button onClick={() => handleTabName("Disney Dolls")}
                        className={`${activeTab === "Disney Dolls" ? "border-t border-r p-2 font-semibold main-text-color text-lg" : "border-t border-r p-2 bg-slate-300 font-semibold text-lg"}`}>
                        Disney Doll
                    </button>
                    <button onClick={() => handleTabName("American Girl")} className={`${activeTab === "American Girl" ? "border-t border-r p-2 font-semibold main-text-color text-lg" : "border-t border-r p-2 bg-slate-300 font-semibold text-lg"}`}>American Doll</button>
                    <button onClick={() => handleTabName("Barbie Dolls")} className={`${activeTab === "Barbie Dolls" ? "border-t border-r p-2 font-semibold main-text-color text-lg" : "border-t border-r p-2 bg-slate-300 font-semibold text-lg"}`}>Barbie Doll</button>

                </div>
                <div className="mt-4 grid lg:grid-cols-3 lg:gap-10">

                    {
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
