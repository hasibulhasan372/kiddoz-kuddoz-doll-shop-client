import { useEffect, useState } from "react";
import Toy from "../../../card/Toy/Toy";


const CategoryTab = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Disney Dolls");
    useEffect(() => {
        fetch(`http://localhost:5000/dolls?category=${activeTab}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [activeTab]);

    const handleTabName = (tabName) => {
        setActiveTab(tabName);
    }
    return (
        <div className="lg:my-14">

            <div className="flex">
                <button onClick={() => handleTabName("Disney Dolls")}
                    className={`${activeTab === "Disney Dolls" ? "border-t border-r p-2 " : "border-t border-r p-2 bg-slate-300"}`}>
                    Disney Doll
                </button>
                <button onClick={() => handleTabName("American Girl")} className={`${activeTab === "American Girl" ? "border-t border-r p-2 " : "border-t border-r p-2 bg-slate-300"}`}>American Doll</button>
                <button onClick={() => handleTabName("Barbie Dolls")} className={`${activeTab === "Barbie Dolls" ? "border-t border-r p-2 " : "border-t border-r p-2 bg-slate-300"}`}>Barbie Doll</button>

            </div>
            <div className="mt-4 grid grid-cols-2">

                {
                    toys.map(toy => <Toy
                        key={toy._id}
                        toy={toy}
                    ></Toy>)
                }
            </div>



        </div>
    );
};

export default CategoryTab;
