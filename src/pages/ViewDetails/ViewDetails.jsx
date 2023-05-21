import { useLoaderData } from "react-router-dom";
import useTitle from "../../customHooks/useTitle";



const ViewDetails = () => {
    useTitle("details");
    const toy = useLoaderData();
    const { name, img, price, rating, sellerName, quantity, category, details, sellerEmail } = toy;
    return (
      <div className="bg-orange-100">
          <div className="my-con lg:py-14  ">
         <div className="w-9/12 m-auto bg-white rounded">
         <div className=" rounded flex gap-5 lg:py-10 pr-4">
                <img src={img} alt="" className=" object-cover lg:w-2/6 rounded-lg " />
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-[#ff6799] ">{name}</h2>
                        <p className="text-lg font-semibold lg:pt-2 lg:pb-6 text-[#4acdd5]">Category: {category}</p>
                        <p>{details}</p>
                        <p className="text-lg py-2">Seller Name: <span className="font-semibold">{sellerName}</span></p>
                        <p className="text-lg pb-4">Seller Email: {sellerEmail}</p>

                    </div>
                    <div className="flex justify-between items-center gap-4 bg-[#f3f3f3] px-8 py-3 flex-2 w-full">
                    <h4 className="text-lg  font-medium">Price: ${price}</h4>
                        <p className="text-lg font-semibold">Quantity: {quantity}</p>
                        <p className="text-lg font-semibold">Rating: {rating}</p>
                    </div>
                </div>
            </div>
         </div>
        </div>
      </div>
    );
};

export default ViewDetails;