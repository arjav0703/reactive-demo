import Link from "next/link";

export default function MyButton({children, url}) {
    return(
        <Link href={url}>
            <button className="p-3 text-lg transition-all border-white border-1 rounded-lg bg-transparent backdrop-blur-2xl backdrop-brightness-75 hover:scale-110 active:scale-75 text-white">
                {children}
            </button>
        </Link>
    )
}