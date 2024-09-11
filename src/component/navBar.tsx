import { Link } from 'react-scroll';
import { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white w-full  fixed  left-0 z-50  rounded-b-lg ">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <img src="/public/logo.png" alt="Logo" className="h-10 w-10" />

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {["Home", "About", "Skills", "Project", "Service", "Contact"].map((section) => (
                        <li key={section}>
                            <Link
                                activeClass="active" // Adds this class when link is active
                                to={section.toLowerCase()}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="cursor-pointer relative hover:text-yellow-500"
                            >
                                {section}
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 transition-all duration-300 hover:w-full"></span> {/* Underline animation */}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="md:hidden bg-gray-800 text-white text-center space-y-4 py-4 rounded-b-lg">
                    {["Home", "About", "Skills", "Project", "Service", "Contact"].map((section) => (
                        <li key={section}>
                            <Link
                                to={section.toLowerCase()}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setIsMenuOpen(false)}
                                className="cursor-pointer hover:text-yellow-500 relative"
                            >
                                {section}
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 transition-all duration-300 hover:w-full"></span> {/* Underline animation */}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
