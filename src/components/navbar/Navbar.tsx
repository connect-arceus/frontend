import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar/Sidebar";

const Navbar = () => {
    return (
        <div className="z-50 fixed h-24 bg-black w-screen flex justify-between items-center px-10">
            <div className="h-full flex justify-center gap-4 items-center">
                <Sidebar />
                <div className="h-full">
                    <img
                        src="/company-logo.png"
                        className="h-48 lg:-mt-4 rotate-12 w-full object-fit"
                        alt="Logo"
                    />
                </div>
            </div>
            <div>
                <Button variant={"navbar"}>Get Quote</Button>
            </div>
        </div>
    );
}


export default Navbar