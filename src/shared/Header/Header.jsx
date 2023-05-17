import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="my-con lg:py-4  ">
            <div className="flex lg:justify-between lg:items-center">
                <img src="https://i.ibb.co/JxxscGk/logo.png" alt="logo.png" className="lg:w-20 lg:h-20"  />

                <div className="lg:space-x-12 lg:font-bold lg:text-lg">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/allToys">All Toys</NavLink>
                    <NavLink to="/myToys">My Toys</NavLink>
                    <NavLink to="/addToys">Add Toys</NavLink>
                    <Link to="/login" className="py-2 px-6 font-semibold border rounded-3xl btn-bg-color text-white">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;