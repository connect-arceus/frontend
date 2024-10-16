// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { tailspin } from "ldrs"
import "ldrs/tailspin"
import { AnimateOnView } from "react-animate-onview"

const Loading = () => {


    return (
        <AnimateOnView animation="zoomIn" delay={0.2}>
            <div className="w-screen h-screen flex justify-center bg-opacity-80 backdrop-blur-md bg-black items-center">
                <l-tailspin color="white" size={60} ></l-tailspin>
            </div>
        </AnimateOnView>
    )
}


export default Loading