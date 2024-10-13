import Hero from "@/components/home/Hero"

const Home = () => {
    return (
        <div className="w-full h-full overlfow-y-scroll">
            <Hero /> 
            <div className="w-full h-screen relative bg-home-map flex justify-center items-center bg-no-repeat bg-cover">
                <div className="w-3/5">
                    <p className="font-extrabold tracking-tighter text-[55px]">
                        <span className="text-white">YOUR REFERENCE FOR</span>
                        <span className="text-primary"> TRANSPORTATION AND LOGISTICS SERVICES</span>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Home