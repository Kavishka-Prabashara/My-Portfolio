
const NavBar = () => {
    return (
        <div
            className="w-full h-1 absolute flex justify-between items-center text-black py-6 px-8 md:px-32 bg-amber-200 drop-shadow-md rounded-2xl">
            <a href={"#"}>
                <img src={"/logo.png"} alt={"icon"} className="w-10 hover:scale-105 transition-all rounded-md"/>
            </a>
            <ul className={"hidden xl:flex items-center gap-12 font-semibold text-base"}>
                <li className={"p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"}>Home</li>
                <li className={"p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"}>About</li>
                <li className={"p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"}>Service</li>
                <li className={"p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"}>Project</li>
                <li className={"p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"}>Skills</li>
                <li className={"p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"}>Contact Me</li>
            </ul>
        </div>
    );
}

export default NavBar;
