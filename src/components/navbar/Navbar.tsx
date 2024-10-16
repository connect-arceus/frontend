import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const nav = useNavigate()

    return (
        <div className="z-50 fixed h-28 bg-black w-screen flex justify-between items-center px-10">
            <div className="h-full flex justify-center items-center">
                <Link to={"/"} className="h-full">
                    <img
                        src="/company-logo.png"
                        className="h-56 lg:-mt-10 w-full"
                        alt="RMann"
                    />
                </Link>
            </div>
            <div className="flex justify-center items-center gap-4">
                <Button onClick={() => nav('/get-a-quote')} variant={"navbar"}>Get Quote</Button>
                <Sidebar />
            </div>
        </div>
    );
}


export default Navbar