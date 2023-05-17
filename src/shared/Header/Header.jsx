import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    
    const handleLogOut = () =>{
        logOut();
    }

    return (
        <div className="my-con lg:py-4  ">
            <div className="flex lg:justify-between  lg:items-center">
                <img src="https://i.ibb.co/JxxscGk/logo.png" alt="logo.png" className="lg:w-24 lg:h-2w-24" />

                <div className="lg:space-x-8 lg:font-bold lg:text-lg lg:col-span-3 lg:flex lg:items-center">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/allToys">All Toys</NavLink>
                    <div className="lg:space-x-8">
                        {
                            user ? <>
                                <NavLink to="/myToys">My Toys</NavLink>
                                <NavLink to="/addToys">Add Toys</NavLink>
                                <img src={user?.photoURL || user?.displayName} alt="userPhoto" className="lg:w-7 lg:h-7 rounded-full inline-block border " />
                                <button onClick={handleLogOut} className="py-2 px-6 font-semibold border rounded-3xl btn-bg-color text-white">
                                    Logout
                                </button>
                            </> :
                                <Link to="/login" className="py-2 px-6 font-semibold border rounded-3xl btn-bg-color text-white">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;