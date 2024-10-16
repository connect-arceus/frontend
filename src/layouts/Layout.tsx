import { Outlet } from "react-router-dom"

import Navbar from "../components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

import ScrollToTop from "@/lib/scroll"

const Layout = () => {
    
    return (
        <div className="w-screen h-screen bg-white">
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}


export default Layout