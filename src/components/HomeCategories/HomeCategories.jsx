export default function HomeCategories({image, title}) {
    return (
        <div className="group relative rounded-lg transition ease-out delay-150">
            {/* <img src={image} className="group-hover:brightness-50 h-10 transition ease-out delay-150"/> */}
            <h1 className="absolute drop-shadow-xl self-end top-5 ml-10 text-black text-3xl delay-150 z-0 opacity-0 group-hover:opacity-100">{title}</h1>
        </div>
    )
}