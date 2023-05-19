import { useLoaderData } from "react-router-dom";



const ViewDetails = () => {
    const toy = useLoaderData();
    const { name, img, price, rating, sellerName, quantity, category, details } = toy;
    return (
        <div className="my-con lg:my-14">
            <div className="border p-4 rounded w-10/12 flex gap-10">
                <img src={img} alt="" className="lg:h-[400px] object-cover lg:w-2/6 rounded-lg " />

                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl bold ">{name}</h2>
                        <h4 className="text-xl mt-2 font-medium">Price: ${price}</h4>
                        <p className="text-lg font-semibold">Seller: {sellerName}</p>
                        <p className="text-lg font-semibold">Category: {category}</p>
                        <p>{details}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold">Available: {quantity}</p>
                        <p>{rating}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ViewDetails;