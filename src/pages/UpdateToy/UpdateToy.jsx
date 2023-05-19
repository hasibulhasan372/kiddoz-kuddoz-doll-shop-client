import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateToy = () => {
    const toy = useLoaderData()
    const { _id, name, img, price, sellerName, quantity, category } = toy;

    const handleDollUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const price = form.price.value;
        const category = form.category.value;
        const img = form.photo.value;
        const quantity = form.quantity.value;
        const updateDollsDetails ={
            name,sellerName,category,price,img,quantity
        }
        console.log(updateDollsDetails)
        fetch(`https://kiddoz-kuddoz-doll-shop-server.vercel.app/dolls/${_id}`,{
            method: "PATCH",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(updateDollsDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
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
                        <label className="text-base font-medium block mb-2"> Doll Name</label>
                        <input type="text" name="name" id="name" placeholder="Doll Name" className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" defaultValue={name} />
                    </div>
                    <div>
                        <label className="text-base font-medium block mb-2"> Seller Name</label>
                        <input type="text" name="sellerName" id="sellerName" placeholder="Seller Name" className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" defaultValue={sellerName} />
                    </div>
                    
                    <div>
                        <label className="text-base font-medium block mb-2"> Doll Price</label>
                        <input type="number" name="price" id="price" placeholder="Doll Price " className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" defaultValue={price} />
                    </div>
                    <div>
                        <label className="text-base font-medium block mb-2"> Doll Quantity</label>
                        <input type="number" name="quantity" id="quantity" placeholder="Doll Quantity " className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" defaultValue={quantity} />
                    </div>
                    <div>
                        <label className="text-base font-medium block mb-2"> Doll Category</label>
                        <input type="text" name="category" id="category" placeholder="Doll Category " className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" defaultValue={category} />
                    </div>
                     
                    <div >
                        <label className="text-base font-medium block mb-2"> Doll Photo URL</label>
                        <input type="url" name="photo" id="photo" placeholder="Doll photo url" className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" defaultValue={img} />
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