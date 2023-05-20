import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import MyToy from "../../card/MyToy/MyToy";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyToys = () => {
    const { user, loading } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url = `https://kiddoz-kuddoz-doll-shop-server.vercel.app/dolls?sellerEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url]);

    const handleDeleteToy = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://kiddoz-kuddoz-doll-shop-server.vercel.app/dolls/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        const remaining = myToys.filter(toy => toy._id !== id)
                        setMyToys(remaining)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })

    };
    if (myToys.length === 0) {
        return <div className="my-con py-12 flex gap-5 items-center justify-center">
            <h1 className="text-center text-3xl font-bold">You have added no toys. Please add some toys.</h1>
            <Link to="/addToys" className="text-xl underline text-green-400 capitalize">Add Toy</Link>
        </div>
    }
    const handleLowPrice = () => {
        fetch(`https://kiddoz-kuddoz-doll-shop-server.vercel.app/lowPriceDolls?sellerEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }
    const handleHighPrice = () => {
        fetch(`https://kiddoz-kuddoz-doll-shop-server.vercel.app/highPriceDolls?sellerEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }

    return (
        <div className="my-con lg:my-12">
            <div className=" flex gap-4 mb-4 items-center">
                <h4 className="text-xl font-semibold"> Sort By: </h4>
                <button className="btn bg-[#4acdd5] border-none text-[#fff] capitalize hover:bg-[#106a6e] transform duration-500" onClick={handleLowPrice}>Low to High</button>
                <button className=" btn bg-[#4acdd5] border-none text-[#fff] capitalize hover:bg-[#106a6e] transform duration-500" onClick={handleHighPrice}>High to Low</button>
            </div>
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
