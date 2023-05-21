import { Link } from "react-router-dom";


const SingleToy = ({ toy }) => {
    const { _id, name, img, price, sellerName, quantity, category } = toy;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle lg:w-32 lg:h-32">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <td>

                <span >{category}</span>
            </td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>{sellerName}</td>
            <th>
                <Link to={`/viewDetails/${_id}`}>
                    <button className="secondary-btn capitalize">View Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default SingleToy;