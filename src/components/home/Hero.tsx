import { Link } from "react-router-dom"
import Carousel from "./Carousel"
import { ArrowRight } from "lucide-react";

import FadeIn from "react-fade-in";

const Hero = () => {
    return (
        <div className="w-full h-full relative">
            {/* TO CHANGE */}
                <div className="z-10 absolute w-screen h-screen flex flex-col justify-center items-center">
                    <div className="ml-[56rem] mt-80">
                        {/* TO CHANGE */}
                        <FadeIn transitionDuration={600}>
                            <p className="text-[160px] tracking-tighter font-bold text-white/70">
                                TO SERVE
                            </p>
                            <Link to={""} className="flex justify-end -mt-8 items-center gap-3 text-white/70 font-bold text-2xl tracking-wide">
                                EXPLORE OUR SERVICES 
                                <span>
                                    <ArrowRight />
                                </span>
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            <Carousel />
        </div>
    );
}


export default Hero