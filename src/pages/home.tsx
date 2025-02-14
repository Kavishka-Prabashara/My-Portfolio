import { Link } from 'react-scroll';
import { FaGithub , FaLinkedin } from 'react-icons/fa';
import CV from '../assets/pdf/cv.pdf';

const Home = () => {
    return (
        <section
            id="home"
            className="h-screen flex flex-col justify-center items-center text-white"
            style={{
                background: "linear-gradient(to bottom right, #0000FF, #00FFFF)",
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)"
            }}
        >
            {/* Name and Title */}
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold mb-4">Kavishka Prabashara Wijerathna</h1>
                <h2 className="text-2xl font-semibold">I'm a Software Engineer</h2>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-8">
                <a href="https://www.linkedin.com/in/kavishka-prabashara-wijerathna-899588189/" target="_blank" rel="noopener noreferrer" className="text-4xl">
                    <FaLinkedin className="hover:text-blue-500 transition duration-300" />
                </a>
                <a href="https://github.com/Kavishka-Prabashara" target="_blank" rel="noopener noreferrer" className="text-4xl">
                    <FaGithub className="hover:text-gray-500 transition duration-300" />
                </a>
            </div>

            {/* Buttons: Download CV and Hire Me */}
            <div className="flex space-x-4">
                <a
                    href={CV}
                    download
                    className="bg-white text-blue-600 py-3 px-6 rounded-lg shadow-md font-semibold hover:bg-blue-50 transition duration-300"
                >
                    Download CV
                </a>

                {/* Updated Hire Me Button */}
                <Link
                    to="contact" // Scroll to the contact section
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md font-semibold cursor-pointer hover:bg-blue-700 transition duration-300"
                >
                    Hire Me
                </Link>
            </div>
        </section>
    );
};

export default Home;
