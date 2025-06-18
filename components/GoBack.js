import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function GoBack({url}) {
    return(
        <Link href={url} className="active:scale-90 transition-all top-10 left-10 fixed text-white">
            <ChevronLeft size={50}/>
        </Link>
        
    )
}