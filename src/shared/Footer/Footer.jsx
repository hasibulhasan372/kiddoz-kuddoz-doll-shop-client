import {FaAddressBook, FaInstagramSquare, FaTwitter, FaPinterest} from 'react-icons/fa'
import { MdEmail, MdContactPhone, MdFacebook,  } from "react-icons/md";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <section className="py-12 section-bg">
            <div className="my-con grid lg:grid-cols-4 lg:gap-x-12">
                <div className='lg:col-span-2'>
                    <img src="https://i.ibb.co/JxxscGk/logo.png" alt="" className="w-20 h-20 mb-4 rounded-full" />
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
                <div>
                    <h2 className='font-bold text-xl text-white mb-8 '>Quick Links</h2>
                    <div className='text-white flex flex-col gap-3 font-semibold'>
                    <Link to="/">Home</Link>
                    <Link to="/allToys">All Toys</Link>
                    <Link to="/blog">Blog</Link>
                    <Link >Contact</Link>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-xl text-white mb-8 '>Follow Us On</h2>
                    <Link className='text-lg text-white flex gap-3 mt-2'><MdFacebook className='text-3xl '></MdFacebook>
                    Facebook
                    </Link>
                    <Link className='text-lg text-white flex gap-3 mt-2'><FaInstagramSquare className='text-3xl '></FaInstagramSquare>
                    Instagram
                    </Link> 
                    <Link className='text-lg text-white flex gap-3 mt-2'><FaTwitter className='text-3xl '></FaTwitter>
                    Twitter
                    </Link>
                    <Link className='text-lg text-white flex gap-3 mt-2'><FaPinterest className='text-3xl '></FaPinterest>
                    Pinterest
                    </Link>
                    
                </div>

            </div>
        </section>
    );
};

export default Footer;