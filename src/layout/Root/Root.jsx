import { Outlet } from "react-router-dom";
import NavBar from "../shared/Header/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";

const Root = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;