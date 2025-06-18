export default function MyButton({children, url}) {
    return(
        <a href={url}>
            <button className="p-2 border-white border-1 rounded-lg bg-transparent backdrop-blur-2xl backdrop-brightness-75 hover:scale-110 active:scale-75 text-white">
                {children}
            </button>
        </a>
    )
}