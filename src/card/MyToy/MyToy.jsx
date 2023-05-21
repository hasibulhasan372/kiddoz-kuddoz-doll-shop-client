
import { Link } from "react-router-dom";

const MyToy = ({ myToy, handleDeleteToy }) => {
    const { _id, name, img, price, sellerName, quantity, category, sellerEmail, rating, details } = myToy;
    return (

        <tr className="py-4 border-b last:border-b-0 text-center">
            <td className="py-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-32 h-32">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td className=" p-2 ">
                {name}
            </td>
            <td className=" p-2 ">
                {category}
            </td>
            <td className=" p-2 ">${price}</td>
            <td className=" p-2 ">{quantity}</td>
            <td className=" p-2 ">{sellerName}</td>
            <td className=" p-2 ">{sellerEmail}</td>
            <td className=" p-2 ">{details.length > 100 ? `${details.slice(0,100)}....` : details}</td>
            <td className=" p-2">
                {rating}

            </td>
            <td className="space-x-4 space-y-4 ">
                <Link to={`/update/${_id}`}>
                    <button className="secondary-btn capitalize">Update</button>
                </Link>

                <button onClick={() => handleDeleteToy(_id)} className="main-btn capitalize">Delete</button>
            </td>
        </tr>

    );
};

export default MyToy;