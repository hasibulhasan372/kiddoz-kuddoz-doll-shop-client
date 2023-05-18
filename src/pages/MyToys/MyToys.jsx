import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import MyToy from "../../card/MyToy/MyToy";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url = `https://kiddoz-kuddoz-doll-shop-server.vercel.app/dolls?sellerEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])

    return (
        <div className="my-con lg:my-12">
            <h1 className="text-2xk font-bold mb-6">Total My Add Toys: {myToys.length} </h1>
            <div>
                {
                    myToys.map(myToy => <MyToy
                    key={myToy._id}
                    myToy={myToy}
                    ></MyToy>)
                }
            </div>
        </div>
    );
};

export default MyToys;
