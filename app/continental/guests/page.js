import Footer from "@/components/Footer";
import GoBack from "@/components/GoBack";
import Guests from "@/components/Guests";

export default function ContinentalGuests() {
    return(
        <>
            <GoBack url={"/continental"}/>
            <div className="flex justify-center items-center h-screen continental">
                <Guests/>
            </div>
            <Footer/>
        </>
    )
}