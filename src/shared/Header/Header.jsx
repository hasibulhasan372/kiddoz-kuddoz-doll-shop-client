import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import {HiX} from "react-icons/hi"
import {FaBars} from "react-icons/fa"

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showName, setShowName] = useState(false);
    const [humMenu, setHumMenu] = useState(false);

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
            <div className="flex justify-between py-2 items-center">
                <img src="https://i.ibb.co/JxxscGk/logo.png" alt="logo.png" className="w-16 h-16 lg:w-24 lg:h-24" />

                <div className="flex-none">
                    <button onClick={() => setHumMenu(!humMenu)} className="lg:hidden">
                        {
                            humMenu ? <HiX></HiX> : <FaBars></FaBars>
                        }
                    </button>


                <div className={`lg:space-x-8 font-semibold text-lg lg:font-bold lg:col-span-3 flex flex-col lg:flex-row gap-3 items-center transform duration-700 ease-in-out absolute lg:static  ${humMenu ? "right-0 top-12 bg-slate-400 lg:bg-none py-4 px-4": "right-0 -top-44"}`}>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/allToys">All Toys</NavLink>
                    <NavLink to="/blog">Blog</NavLink>

                    <div className="lg:space-x-8 lg:flex items-center">
                        {
                            user ? <>
                                <NavLink to="/myToys">My Toys</NavLink>
                                <NavLink to="/addToys">Add Toys</NavLink>
                                <NavLink className="relative">
                                <img
                                    onMouseOver={handleShowName}
                                    onMouseOut={handleHideName}
                                    src={user?.photoURL} alt="userPhoto" className="lg:w-8 lg:h-8 rounded-full border " />
                                     {
                                    showName && <h1 className="absolute right-0 -bottom-7 text-slate-600 text-sm lg:w-[140px]  text-right rounded">{user?.displayName}</h1> 
                                }
                                </NavLink>
                               
                                <button onClick={handleLogOut} className="py-2 px-3 
                                lg:px-6 font-semibold border rounded-3xl btn-bg-color text-white">
                                    Logout
                                </button>
                            </> :
                                <Link to="/login" className="py-2 px-3 lg:px-6 font-semibold border rounded-3xl btn-bg-color text-white">Login</Link>
                        }
                    </div>
                    

                </div>
                </div>


            </div>
        </div>
    );
};

export default Header;