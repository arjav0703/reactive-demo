import Footer from "@/components/Footer";
import Guests from "@/components/Guests";

export default function ContinentalGuests() {
    return(
        <>
            <div className="flex justify-center items-center h-screen continental">
                <Guests/>
            </div>
            <Footer/>
        </>
    )
}