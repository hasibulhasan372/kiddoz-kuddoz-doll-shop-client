import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Toy from "../../card/Toy/Toy";


const AllToys = () => {
    const [toys, setToys] = useState([]);
    const {loading} = useContext(AuthContext);
    const [search, setSearch] = useState("");
    const [showAll, setShowAll] = useState(true)

    useEffect(() =>{
        fetch("https://kiddoz-kuddoz-doll-shop-server.vercel.app/dolls")
        .then(res => res.json())
        .then(data =>setToys(data))
    },[])
    return (
        <div className="my-con lg:pb-20">
            <h1 className="text-4xl font-bold mb-20">Total Toys are: {toys.length}</h1>
           <div className="text-center lg:mb-6">
           <input type="text" onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search by Name" className="border p-2 border-[#4acdd5] placeholder:text-slate-900" />
           </div>
            <div className="grid lg:grid-cols-3 lg:gap-y-10">
                {
                    loading? <></> :
                    toys.filter(toy =>
                        {
                          
                            return search.toLowerCase() === "" ? toy : toy.name.toLowerCase().includes(search)
                        }
                        ).
                    
                    map(toy => <Toy
                    key={toy._id}
                    toy={toy}
                    ></Toy>)
                }
            </div>
            <div>
                <button onClick={() =>setShowAll(false)} className="btn  btn-success">Show All</button>
            </div>

        </div>
    );
};

export default AllToys;