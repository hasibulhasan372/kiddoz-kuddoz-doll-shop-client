import { useEffect, useState } from "react";


const CustomerFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/customerFeedback')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])

    return (
        <div className="lg:py-20 py-10">
            <div className="my-con">
                <h1 className=" text-xl lg:text-3xl main-text-color lg:font-bold text-center pb-6 lg:py-12 font-serif overflow-x-hidden"
                data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
                >What Our Customer Says</h1>
                <div className="grid lg:grid-cols-3 gap-5 overflow-x-hidden"
                  
                >
                    {
                        feedbacks.map(feedback => <div
                            data-aos="fade-down-left" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
                            key={feedback._id}
                            className="border p-3 lg:p-4 rounded-ee-[60px] bg-sky-50  rounded-ss-[60px] overflow-x-hidden"
                        >
                            <div className="mb-4 flex justify-between items-center gap-4">
                                <img src={feedback.img} alt="" className=" w-20 h-20 lg:w-[120px] lg:h-[120px] object-cover rounded-full" />
                                <div>
                                    <h1 className="text-xl font-semibold"> {feedback.name}</h1>
                                    <p className="text-2xl font-bold text-orange-400">★★★★★{feedback.rating}</p>
                                </div>
                                <img src={feedback.icon} alt="" className=" w-[50px]  h-[50px]" />
                            </div>
                            <p>{feedback.feedback}</p>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedback;