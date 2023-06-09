import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import SingleToy from "../../card/SingleToy/SingleToy";
import { CircleLoader } from "react-spinners";
import useTitle from "../../customHooks/useTitle";


const AllToys = () => {
    const [toys, setToys] = useState([]);
    const { loading } = useContext(AuthContext);
    const [search, setSearch] = useState("");
    const [showAll, setShowAll] = useState(true);
    useTitle("allToys");

    useEffect(() => {
        fetch("https://kiddoz-kuddoz-doll-shop-server.vercel.app/dollsLimit")
            .then(res => res.json())
            .then(data => setToys(data))
           
    }, []);

    const handleShowAllData = () => {
        fetch("https://kiddoz-kuddoz-doll-shop-server.vercel.app/dolls")
            .then(res => res.json())
            .then(data => setToys(data))
        setShowAll(false)
       
    };
       
    return (
        <div className="my-con lg:pb-20">
            <div className="text-center lg:mb-6">
                <input type="text" onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search by Name" className="border p-2 border-[#4acdd5] placeholder:text-slate-900 rounded lg:w-3/12" />
            </div>
            
            <div className="overflow-x-auto w-full">
                <table className="table w-full text-center">
                    {/* head */}
                    <thead  >
                        <tr className="main-text-color">
                            <th className="text-lg border capitalize">Name</th>
                            <th className="text-lg border capitalize">Category</th>
                            <th className="text-lg border capitalize">Price</th>
                            <th className="text-lg border capitalize">Quantity</th>
                            <th className="text-lg border capitalize">Seller Name</th>
                            <th className="text-lg border capitalize">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {loading ? <CircleLoader color="#36d7b7" /> :
                            toys.filter(toy => {
                                return search.toLowerCase() === "" ? toy : toy.name.toLowerCase().includes(search)
                            }
                            ).map(toy => <SingleToy
                                key={toy._id}
                                toy={toy}
                            ></SingleToy>)
                        }
                    </tbody>
                    {/* foot */}
                </table>
            </div>
            <div className="lg:mt-10 text-center">
                <button onClick={handleShowAllData} disabled={!showAll} className="main-btn capitalize">Show All</button>
            </div>

        </div>
    );
};

export default AllToys;