import ContinentalDetails from "@/components/Continental";
import Footer from "@/components/Footer";
import Guests from "@/components/Guests";
import MyButton from "@/components/MyButton";

export default function Continental() {
  return (
    <>
        <div className="flex justify-center items-center h-screen continental flex-col gap-5">
            <ContinentalDetails/>
            <MyButton url={"/continental/guests"}>Get guest info</MyButton>
        </div>
        <Footer/>
    </>
  );
}
