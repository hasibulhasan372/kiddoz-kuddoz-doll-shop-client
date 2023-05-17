import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";


const Main = () => {
    return (
        <>
            <Header></Header>
            <div className="outlet-height">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;