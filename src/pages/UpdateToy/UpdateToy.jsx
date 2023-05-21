import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useTitle from "../../customHooks/useTitle";

const UpdateToy = () => {
    const toy = useLoaderData();
    useTitle("updateToy")
    const { _id, price, quantity, details } = toy;

    const handleDollUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const updateDollsDetails = {
            details,
            price: parseFloat(price),
            quantity: parseFloat(quantity)
        };
        
        fetch(`https://kiddoz-kuddoz-doll-shop-server.vercel.app/dolls/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateDollsDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast("Toy Details Updated")
                }
            })

    }

    return (
        <div className="my-con my-10 lg:my-16">
            <h1 className="lg:text-4xl font-bold text-center ">Update Your Toy </h1>
            <div className="lg:w-2/3 m-auto mt-10 border p-6">
                <form onSubmit={handleDollUpdate} className="grid lg:grid-cols-2 lg:gap-5">


                    <div>
                        <label className="text-base font-medium block mb-2"> Doll Price</label>
                        <input type="text" name="price" id="price" placeholder="Doll Price " className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" defaultValue={price} />
                    </div>
                    <div>
                        <label className="text-base font-medium block mb-2"> Doll Quantity</label>
                        <input type="number" name="quantity" id="quantity" placeholder="Doll Quantity " className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" defaultValue={quantity} />
                    </div>
                    <div className="col-span-2">
                        <label className="text-base font-medium block mb-2"> Details</label>
                        <textarea name="details" id="details" cols="30" rows="6" className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" defaultValue={details}></textarea>
                    </div>



                    <div className="">
                        <input type="submit" value="Submit" className=" text-xl btn-bg-color font-semibold text-white py-2 px-4 border rounded-lg " />
                    </div>

                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default UpdateToy;