import { Fade } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css";

import hero1 from "@/assets/home-header1-1920.jpg"
import hero2 from "@/assets/home-header2-1920.jpg"
import hero3 from "@/assets/home-header3-1920.jpg"

const Carousel = () => {

    const images = [hero1, hero2, hero3]

    return (
        <Fade duration={4000} arrows={false} cssClass="h-screen w-screen z-0">
            <img src={images[0]} className="h-full object-fit" alt="slide" />
            <img src={images[2]} className="h-full object-fit" alt="slide" />
        </Fade>
    );
}


export default Carousel