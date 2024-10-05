import { Outlet } from "react-router-dom";
import Navbar from "../component/shared/Navbar";
import Footer from "../component/shared/Footer";
import Topbar from "../component/shared/Topbar";

const MainLayout = () => {
    return (
        <div>
            <Topbar/>
            <div className="sticky top-0 z-50 w-full">
            <Navbar />
            </div>
            <Outlet/>
            <Footer/> 
        </div>
    );
};

export default MainLayout;