import Breadcrumb from "@/components/Breadcrumb";
import QuoteForm from "@/components/QuoteForm";


const GetAQuote = () => {
    return (
        <div className="w-screen h-fit flex flex-col justify-start pt-28 items-center bg-white">
            <div className="w-full h-64 flex flex-col px-48 justify-center bg-primary">
                <Breadcrumb />
                <p className="text-white text-[75px] font-display">
                    GET A QUOTE
                </p>
            </div>
            <div className="w-3/5 h-fit flex-1 mx-auto flex flex-col my-8">
                <p className="text-md tracking-wide text-primary font-display">
                    PLEASE FILL OUT THIS FORM TO RECEIVE A QUOTE FOR YOUR
                    TRANSPORTATION NEEDS
                </p>
                <QuoteForm />
            </div>
        </div>
    );
}


export default GetAQuote