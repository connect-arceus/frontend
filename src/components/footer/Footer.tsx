
const Footer = () => {
    return (
        <div className="h-96 w-screen bg-black">
            <div className="w-full h-full flex px-56 items-center py-4">
                <div className="h-full flex flex-col items-start justify-center">
                    <div className="flex justify-center items-center">
                        <img src="/logo-2-white.png" className="h-40 object-contain" alt="" />
                    </div>
                    <div className="text-white font-semibold">
                        <p className="font-bold text-white mb-4 tracking-tighter text-2xl">MAIN OFFICE</p>
                        <p>1111 46e avenue, Lachine, Quebec H8T 3C5 CANADA</p>
                        <p>+1 866-446-5252</p>
                        <p>info@vitessetransport.com</p>
                    </div>
                </div>
                {/* <Separator orientation="vertical" className="mx-8" /> */}
                <div>

                </div>
            </div>            
        </div>
    )
}


export default Footer