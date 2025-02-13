import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="backdrop-blur-md bg-gray-900 bg-opacity-30 border border-white/20 shadow-lg text-white w-11/12 max-w-5xl fixed left-0 right-0 z-50 rounded-3xl mt-4 mx-auto my-2">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <img src={logo} alt="Logo" className="h-10 w-10"/>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {["Home", "About", "Skills", "Project", "Service", "Contact"].map((section) => (
                        <li key={section}>
                            <Link
                                activeClass="active"
                                to={section.toLowerCase()}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="cursor-pointer relative hover:text-yellow-500 drop-shadow-md"
                            >
                                {section}
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 transition-all duration-300 hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="md:hidden backdrop-blur-md bg-gray-900 bg-opacity-30 border-t border-white/20 text-white text-center space-y-4 py-4 rounded-2xl shadow-lg">
                    {["Home", "About", "Skills", "Project", "Service", "Contact"].map((section) => (
                        <li key={section}>
                            <Link
                                to={section.toLowerCase()}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setIsMenuOpen(false)}
                                className="cursor-pointer hover:text-yellow-500 relative drop-shadow-md"
                            >
                                {section}
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 transition-all duration-300 hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
