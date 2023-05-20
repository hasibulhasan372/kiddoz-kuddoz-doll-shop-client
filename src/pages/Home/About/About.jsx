

const About = () => {
    return (
        <div className="my-con lg:py-12">
            <h1 className="main-text-color text-center font-bold lg:text-3xl"
            data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
            >About Us </h1>
            <div className="grid md:grid-cols-2 lg:mt-12 items-center lg:gap-10">
                    <div data-aos="fade-down-left" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out">
                        <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/2.png" alt="" />
                    </div>
                    <div data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out">
                        <h3 className="text-5xl font-bold mb-4 font-serif">Who we are</h3>
                        <p>We are the number one Doll seller in the city. We have the enormous amount of product with latest version. You will get the most amazing collection of Dolls with hundreds of different varieties. We have many vendors they are supply us the product with the reasonable price.</p>
                        <button className="main-btn text-white font-semibold capitalize text-xl mt-5">Learn More</button>
                    </div>
            </div>
        </div>
    );
};

export default About;
