import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import MyToy from "../../card/MyToy/MyToy";


const MyToys = () => {
    const { user, loading } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url = `https://kiddoz-kuddoz-doll-shop-server.vercel.app/dolls?sellerEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url]);

    const handleDeleteToy = (id) =>{
        fetch(`https://kiddoz-kuddoz-doll-shop-server.vercel.app/dolls/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            const remaining = myToys.filter(toy => toy._id !== id)
            setMyToys(remaining)
            if(data.deletedCount > 0){
                alert("Deleted Successfully")
            }
        })

    }

    return (
        <div className="my-con lg:my-12">
            <h1 className="text-2xk font-bold mb-6">Total My Add Toys: {myToys.length} </h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
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
                        {loading ? <></> :
                            myToys.map(toy => <MyToy
                                key={toy._id}
                                toy={toy}
                                handleDeleteToy={handleDeleteToy}
                            ></MyToy>)
                        }
                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </div>
    );
};

export default MyToys;
