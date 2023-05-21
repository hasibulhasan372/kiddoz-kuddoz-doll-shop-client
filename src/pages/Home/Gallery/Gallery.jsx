import { useEffect, useState } from "react";


const Gallery = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch("https://kiddoz-kuddoz-doll-shop-server.vercel.app/dollGallery")
            .then(res => res.json())
            .then(data => setImages(data))
    }, []);
    
    return (
        <div className="overflow-x-hidden">
            <div className="my-con" >
                <h1 className="lg:text-3xl text-xl main-text-color font-bold text-center py-6 lg:py-12 overflow-x-hidden" data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out" >Dolls Gallery</h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-4" >
                    {
                        images.map(img =>
                            <img  key={img._id} src={img.img} alt="toys" className="cursor-pointer w-[150px] h-[150px] lg:w-[250px]  lg:h-[270px] object-cover transform hover:scale-90 hover:-rotate-12 duration-500 ease-in-out hover:rounded-3xl overflow-x-hidden "
                            data-aos="fade-down-left" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
                            />
                        )
                    }
                </div>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default Gallery;