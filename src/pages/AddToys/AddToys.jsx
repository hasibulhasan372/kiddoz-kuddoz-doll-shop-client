import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddToys = () => {
    const {user} = useContext(AuthContext);

    const handleDollPost = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = user?.email;
        const rating = form.rating.value;
        const price = form.price.value;
        const category = form.category.value;
        const img = form.photo.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const dollsDetails ={
            name,sellerName,sellerEmail,rating,category,price,img,quantity,details
        }
        fetch("https://kiddoz-kuddoz-doll-shop-server.vercel.app/dolls",{
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(dollsDetails)
        })
        .then(res => res.json()
        )
        .then(data => {
            if(data.insertedId){
                toast ("The Toy is added")
            }
            
        })

    }

    return (
        <div className="my-con my-10 lg:my-16">
            <h1 className="lg:text-4xl font-bold text-center ">Add your Toys </h1>
            <div className="lg:w-2/3 m-auto mt-10 border p-6">
                <form onSubmit={handleDollPost} className="grid lg:grid-cols-2 lg:gap-5">
                    <div>
                        <label className="text-base font-medium block mb-2"> Doll Name</label>
                        <input type="text" name="name" id="name" placeholder="Doll Name" className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" required />
                    </div>
                    <div>
                        <label className="text-base font-medium block mb-2"> Seller Name</label>
                        <input type="text" name="sellerName" id="sellerName" placeholder="Seller Name" className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" required />
                    </div>
                    <div>
                        <label className="text-base font-medium block mb-2"> Seller Email</label>
                        <input type="email" name="email" id="email" defaultValue={user?.email} className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" required readOnly />
                    </div>
                    <div>
                        <label className="text-base font-medium block mb-2"> Doll Price</label>
                        <input type="text" name="price" id="price" placeholder="Doll Price " className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" required />
                    </div>
                    <div>
                        <label className="text-base font-medium block mb-2"> Doll Quantity</label>
                        <input type="number" name="quantity" id="quantity" placeholder="Doll Quantity " className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" required />
                    </div>
                    <div>
                        <label className="text-base font-medium block mb-2"> Doll Category</label>
                        <input type="text" name="category" id="category" placeholder="Doll Category " className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" required />
                    </div>
                     <div>
                        <label className="text-base font-medium block mb-2">Rating ( 1 to 5 )</label>
                        <input type="text" name="rating" id="rating" placeholder=" Rating" className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" required />
                    </div>
                    <div >
                        <label className="text-base font-medium block mb-2"> Doll Photo URL</label>
                        <input type="url" name="photo" id="photo" placeholder="Doll photo url" className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" required />
                    </div> 
                    <div className="col-span-2">
                        <label className="text-base font-medium block mb-2"> Details</label>
                        <textarea name="details" id="details" cols="30" rows="6" className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full"></textarea>
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

export default AddToys;