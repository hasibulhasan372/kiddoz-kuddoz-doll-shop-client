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
                <table className="  table-auto">
                    {/* head */}
                    <thead  >
                        <tr className="main-text-color  bg-slate-100">
                            <th></th>
                            <th className="text-lg capitalize ">Name</th>
                            <th className="text-lg capitalize p-2 ">Category</th>
                            <th className="text-lg capitalize p-2 ">Price</th>
                            <th className="text-lg capitalize p-2 ">Quantity</th>
                            <th className="text-lg capitalize p-2 ">Seller Name</th>
                            <th className="text-lg capitalize p-2 ">Seller Email</th>
                            <th className="text-lg capitalize p-2 ">Details</th>
                            <th className="text-lg capitalize p-2 ">Rating</th>
                            <th className="text-lg capitalize p-2 ">Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {/* row 1 */}
                        {loading ? <></> :
                            myToys.map(myToy => <MyToy
                                key={myToy._id}
                                myToy={myToy}
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
