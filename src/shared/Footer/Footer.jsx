import {FaAddressBook, FaInstagramSquare, FaTwitter, FaPinterest} from 'react-icons/fa'
import { MdEmail, MdContactPhone, MdFacebook,  } from "react-icons/md";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <div className=" hero overflow-x-hidden" style={{ backgroundImage: `url("https://i.ibb.co/pPjmSx7/pexels-andres-victorero-3730754.jpg")` }}
        
        >
            <div className="hero-overlay bg-opacity-60 "></div>
            <div className="my-con pl-4 lg:pl-0 grid lg:grid-cols-4 lg:gap-x-12 py-8 lg:py-12 overflow-x-hidden"
             data-aos="fade-down-left" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out"
            >
                <div className='lg:col-span-2 overflow-x-hidden'
                >
                    <img src="https://i.ibb.co/JxxscGk/logo.png" alt="" className="w-20 h-20 mb-4 rounded-full" />
                    <h2 className='text-xl lg:text-3xl font-bold font-serif  my-4 text-[#91f6fb] '><span className='main-text-color'>Kiddoz Kuddoz</span> Doll Shop</h2>
                    <p className="text-lg text-white mb-4">It is a toy shop where you will; get all the dolls for kid. We are selling the most unique dolls with every size, color, design and different from other marketplace. </p>
                    <p className='text-lg text-white flex gap-3 '><FaAddressBook className='text-3xl text-orange-500'></FaAddressBook>
                    Address: Dhanmondi 27, 3/4 Street, Dhaka
                    </p>
                    <p className='text-lg text-white flex gap-3 mt-2'><MdEmail className='text-3xl text-orange-500'></MdEmail>
                    Email: kiddozkuddoz@gmail.com
                    </p>
                    <p className='text-lg text-white flex gap-3 mt-2'><MdContactPhone className='text-3xl text-orange-500'></MdContactPhone>
                    Contact: +880-1846-923454
                    </p>
                </div>
                <div
                
                >
                    <h2 className='font-bold text-xl text-white mb-8 '>Quick Links</h2>
                    <div className='text-white flex flex-col gap-3 font-semibold'>
                    <Link to="/">Home</Link>
                    <Link to="/allToys">All Toys</Link>
                    <Link to="/blog">Blog</Link>
                    <Link >Contact</Link>
                    </div>
                </div>
                <div className='overflow-x-hidden'
                >
                    <h2 className='font-bold text-xl text-white mb-8 '>Follow Us On</h2>
                    <Link className='text-lg text-white flex gap-3 mt-2'><MdFacebook className='text-3xl text-orange-500'></MdFacebook>
                    Facebook
                    </Link>
                    <Link className='text-lg text-white flex gap-3 mt-2'><FaInstagramSquare className='text-3xl text-orange-500'></FaInstagramSquare>
                    Instagram
                    </Link> 
                    <Link className='text-lg text-white flex gap-3 mt-2'><FaTwitter className='text-3xl text-orange-500'></FaTwitter>
                    Twitter
                    </Link>
                    <Link className='text-lg text-white flex gap-3 mt-2'><FaPinterest className='text-3xl text-orange-500'></FaPinterest>
                    Pinterest
                    </Link>
                </div>
            </div>
        </div>
        <div className=' py-2 lg:py-3 bg-blue-300'>
        <p className='text-[#2a1a1a] my-con'>Copyright © 2012 - 2023 TermsFeed®. All rights reserved.</p>
        </div>
        </div>
    );
};

export default Footer;