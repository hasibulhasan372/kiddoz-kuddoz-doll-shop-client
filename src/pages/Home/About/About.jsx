

const About = () => {
    return (
        <div className="my-con py-10 lg:py-12 text-center lg:text-left overflow-x-hidden ">
            <h1 className="main-text-color text-center font-bold text-xl lg:text-3xl overflow-x-hidden"
           data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
            >About Us </h1>
            <div className="grid md:grid-cols-2 mt-6 lg:mt-12 items-center gap-6 lg:gap-10 overflow-x-hidden">
                    <div  className="overflow-x-hidden"
                    data-aos="fade-down-left" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
                    >
                        <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/2.png" alt="" className="w-[240px] lg:w-full inline-block overflow-x-hidden" />
                    </div>
                    <div className="overflow-x-hidden"
                    data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
                    >
                        <h3 className="lg:text-5xl main-text-color font-bold mb-4 font-serif">Who we are</h3>
                        <p>We are the number one Doll seller in the city. We have the enormous amount of product with latest version. You will get the most amazing collection of Dolls with hundreds of different varieties. We have many vendors they are supply us the product with the reasonable price.</p>
                        <button className="main-btn text-white font-semibold capitalize text-xl mt-5">Learn More</button>
                    </div>
            </div>
        </div>
    );
};

export default About;
