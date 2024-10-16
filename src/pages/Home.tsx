import Hero from "@/components/home/Hero"

const Home = () => {
    return (
        <div className="w-full h-fit">
            <Hero />
            <div className="w-full h-screen relative bg-home-map flex justify-center items-center bg-no-repeat bg-cover">
                <div className="w-3/5">
                    <p className="font-extrabold text-white tracking-tighter text-[58px]">
                        GOT SOMETHING TO SHIP?
                    </p>
                    <p className="font-extrabold tracking-tighter text-[96px] text-primary">
                        YES, WE SHIP IT!
                    </p>
                </div>
            </div>
        </div>
    );
}


export default Home