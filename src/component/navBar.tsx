import { useState } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {

    const [isMenuOpen , setIsMenuOpen] = useState(false);


    return (
        <div
            className="w-full h-1 mt-2 fixed top-2 left-0 z-50 flex justify-between items-center text-black py-6 px-8 md:px-32 bg-amber-200 drop-shadow-md rounded-2xl "
        >
            <a href="#">
                <img
                    src="/logo.png"
                    alt="icon"
                    className="w-10 hover:scale-105 transition-all rounded-md"
                />
            </a>
            <nav className="flex flex-col md:flex-row items-center gap-12 font-semibold text-base">
                <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
                    <li
                        className="p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"
                    >
                        <Link to="home" spy={true} smooth={true} offset={-70}>Home</Link>
                    </li>
                    <li
                        className="p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"
                    >
                        <Link to="about" spy={true} smooth={true} offset={-70}>About</Link>
                    </li>
                    <li
                        className="p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"
                    >
                        <Link to="skills" spy={true} smooth={true} offset={-70}>Skills</Link>
                    </li>
                    <li
                        className="p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"
                    >
                        <Link to="project" spy={true} smooth={true} offset={-70}>Projects</Link>
                    </li>
                    <li
                        className="p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"
                    >
                        <Link to="service" spy={true} smooth={true} offset={-70}>Service</Link>
                    </li>

                    <li
                        className="p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"
                    >
                        <Link to="contactMe" spy={true} smooth={true} offset={-70}>Contact Me</Link>
                    </li>
                </ul>
                <div className="rel ative hidden md:flex items-center justify-center gap-3 font-semibold text-base">
                    <i
                        className="bx bx-menu xl:hidden block text-5xl cursor-pointer text-black"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    ></i>
                    <div
                        className={`absolute top-24 left-0 w-full bg-amber-200 flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                        style={{transition: "transform 0.3s ease,opacity 0.3s ease"}}>
                        <li className="list-none w-full text-center p-4 hover:bg-amber-200 hover:text-white transition-all cursor-pointer">Home</li>
                        <li className="list-none w-full text-center p-4 hover:bg-amber-200 hover:text-white transition-all cursor-pointer">About</li>
                        <li className="list-none w-full text-center p-4 hover:bg-amber-200 hover:text-white transition-all cursor-pointer">Service</li>
                        <li className="list-none w-full text-center p-4 hover:bg-amber-200 hover:text-white transition-all cursor-pointer">Skills</li>
                        <li className="list-none w-full text-center p-4 hover:bg-amber-200 hover:text-white transition-all cursor-pointer">Project</li>
                        <li className="list-none w-full text-center p-4 hover:bg-amber-200 hover:text-white transition-all cursor-pointer">Contact Me</li>


                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
