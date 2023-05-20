import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";
Aos.init();


const Gallery = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch("https://kiddoz-kuddoz-doll-shop-server.vercel.app/dollGallery")
            .then(res => res.json())
            .then(data => setImages(data))
    }, []);
    
    return (
        <div className="">
            <div className="my-con" >
                <h1 className="lg:text-3xl main-text-color lg:font-bold text-center lg:py-12" data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out">Dolls Gallery</h1>
                <div className="grid lg:grid-cols-6 lg:gap-4" >
                    {
                        images.map(img =>
                            <img data-aos="fade-down-left" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out" key={img._id} src={img.img} alt="toys" className="cursor-pointer lg:w-[250px]  lg:h-[270px] object-cover transform hover:scale-90 hover:-rotate-12 duration-500 ease-in-out hover:rounded-3xl " />
                        )
                    }
                </div>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default Gallery;