import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Toy from "../../card/Toy/Toy";


const AllToys = () => {
    const [toys, setToys] = useState([]);
    const {loading} = useContext(AuthContext);

    useEffect(() =>{
        fetch("https://kiddoz-kuddoz-doll-shop-server.vercel.app/dolls")
        .then(res => res.json())
        .then(data =>setToys(data))
    },[])
    return (
        <div className="my-con lg:pb-20">
            <h1 className="text-4xl font-bold mb-20">Total Toys are: {toys.length}</h1>
            <div className="grid lg:grid-cols-3 lg:gap-y-10">
                {
                    loading? <></> :
                    toys.map(toy => <Toy
                    key={toy._id}
                    toy={toy}
                    ></Toy>)
                }
            </div>

        </div>
    );
};

export default AllToys;