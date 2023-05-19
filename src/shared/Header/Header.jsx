import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showName, setShowName] = useState(false)

    const handleLogOut = () => {
        logOut();
    };
    const handleShowName = ()=>{
        setShowName(true)
    };
    const handleHideName = () =>{
        setShowName(false)
    };

    return (
        <div className="my-con lg:py-4  ">
            <div className="flex lg:justify-between  lg:items-center">
                <img src="https://i.ibb.co/JxxscGk/logo.png" alt="logo.png" className="lg:w-24 lg:h-2w-24" />

                <div className="lg:space-x-8 lg:font-bold lg:text-lg lg:col-span-3 lg:flex lg:items-center">
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
                    <NavLink to="/allToys">All Toys</NavLink>
                    <NavLink to="/blog">Blog</NavLink>

                    <div className="lg:space-x-8 flex items-center">
                        {
                            user ? <>
                                <NavLink to="/myToys">My Toys</NavLink>
                                <NavLink to="/addToys">Add Toys</NavLink>
                                <NavLink className="relative">
                                <img
                                    onMouseOver={handleShowName}
                                    onMouseOut={handleHideName}
                                    src={user?.photoURL || user?.displayName} alt="userPhoto" className="lg:w-8 lg:h-8 rounded-full border " />
                                     {
                                    showName && <h1 className="absolute right-0 text-sm lg:w-[140px]  text-right rounded">{user?.displayName}</h1> 
                                }
                                </NavLink>
                               
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