import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const Sidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="text-white flex items-center gap-2">
                <span>
                    <MenuIcon size={28} />
                </span>
            </SheetTrigger>
            <SheetContent side={"left"} className="w-1/2 bg-black border-none">
                <div className="w-full h-full">
                    <div className="w-3/12 h-full">

                    </div>
                    <div className="flex-1 h-full">

                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default Sidebar;
