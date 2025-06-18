import { ChevronLeft } from "lucide-react";

export default function GoBack({url}) {
    return(
        <a href={url} className="active:scale-90 transition-all top-10 left-10 fixed text-white">
            <ChevronLeft size={50}/>
        </a>
    )
}