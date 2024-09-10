import { useState } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div
            className="w-full h-1 mt-2 fixed top-0 left-0 z-50 flex justify-between items-center text-black py-6 px-8 md:px-32 bg-amber-200 drop-shadow-md rounded-2xl "
            /*className="w-full mt-2 fixed top-0 left-0 z-50 flex justify-between items-center text-black py-6 px-8 md:px-32 bg-amber-200 drop-shadow-md rounded-2xl"*/
        >
            <a href="#">
                <img
                    src="/logo.png"
                    alt="icon"
                    className="w-10 hover:scale-105 transition-all rounded-md"
                />
            </a>
            <nav className="flex flex-col md:flex-row items-center gap-12 font-semibold text-base">
                <ul className={`md:flex ${isOpen ? 'block' : 'hidden'} items-center gap-12`}>
                    <li
                        className="p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"
                    >
                        <Link to="home" spy={true} smooth={true} offset={-70} onClick={closeMenu}>Home</Link>
                    </li>
                    <li
                        className="p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"
                    >
                        <Link to="about" spy={true} smooth={true} offset={-70} onClick={closeMenu}>About</Link>
                    </li>
                    <li
                        className="p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"
                    >
                        <Link to="services" spy={true} smooth={true} offset={-70} onClick={closeMenu}>Service</Link>
                    </li>
                    <li
                        className="p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"
                    >
                        <Link to="skills" spy={true} smooth={true} offset={-70} onClick={closeMenu}>Skills</Link>
                    </li>
                    <li
                        className="p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"
                    >
                        <Link to="projects" spy={true} smooth={true} offset={-70} onClick={closeMenu}>Projects</Link>
                    </li>
                    <li
                        className="p-3 hover:bg-amber-200 hover:text-amber-50 rounded-md transition-all cursor-pointer"
                    >
                        <Link to="contact" spy={true} smooth={true} offset={-70} onClick={closeMenu}>Contact Me</Link>
                    </li>
                </ul>
                <div className="relative hidden md:flex items-center justify-center gap-3 font-semibold text-base">
                    <i
                        className="bx bx-menu xl:hidden block text-5xl cursor-pointer text-black"
                        onClick={toggleMenu}
                    ></i>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
