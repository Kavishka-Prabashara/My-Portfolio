import profilePic from '../assets/proPic.jpeg';
import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { FaFacebook, FaWhatsapp, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

// Scroll animation variants
const fadeInOut = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

function About() {
    const controls = useAnimation();

    useEffect(() => {
        // Scroll event listener
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Control animation based on the scroll position
            if (scrollY > windowHeight / 3) {
                controls.start('visible');
            } else {
                controls.start('hidden');
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    return (
        <motion.section
            id="about"
            className="py-16 px-8 rounded-lg mx-8 shadow-lg"
            style={{ borderRadius: '15px', marginLeft: 'auto', marginRight: 'auto' }}
            initial="hidden" // Start hidden
            animate={controls} // Control visibility based on scroll
            variants={fadeInOut} // Apply fade-in/out animations
        >
            <div className="container mx-auto flex flex-col items-center">
                {/* About Me Title */}
                <motion.h2
                    className="text-4xl font-bold mb-6 text-left /*shadow-md p-4*/ text-blue-900"
                    variants={fadeInOut}
                >
                    About Me
                </motion.h2>

                <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                    {/* Left side - Text */}
                    <motion.div
                        className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left /*shadow-md p-4*/"
                        variants={fadeInOut}
                    >
                        <p className="text-lg text-gray-600 text-justify">
                            I am a passionate software developer with a strong foundation in web and mobile technologies.
                            Over the past few years, I have honed my skills in various programming languages and frameworks,
                            including JavaScript, React, Angular, and Node.js. I love turning ideas into functional,
                            aesthetically pleasing products. My portfolio showcases a variety of projects,
                            ranging from web applications to mobile apps, each reflecting my ability to tackle complex problems
                            and deliver creative solutions.
                        </p>
                    </motion.div>

                    {/* Right side - Photo */}
                    <motion.div
                        className="lg:w-1/2 flex justify-center"
                        variants={fadeInOut}
                    >
                        <img
                            src={profilePic}
                            alt="Your Photo"
                            className="rounded-full w-64 h-64 object-cover shadow-lg transform transition-transform duration-500 hover:scale-110"
                        />
                    </motion.div>
                </div>

                {/* Social Media Icons */}
                <motion.div
                    className="flex justify-left mt-12 space-x-4 "
                    variants={fadeInOut}
                >
                    <a href="https://www.facebook.com/kavishka.prabashara.7" target="_blank" rel="noopener noreferrer">
                        <FaFacebook
                            size={30}
                            className="text-black hover:text-blue-600 transform hover:scale-125 transition-all duration-300"
                        />
                    </a>
                    <a href="https://wa.me/715997463" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp
                            size={30}
                            className="text-black hover:text-green-500 transform hover:scale-125 transition-all duration-300"
                        />
                    </a>
                    <a href="https://www.youtube.com/@aruthde7944" target="_blank" rel="noopener noreferrer">
                        <FaYoutube
                            size={30}
                            className="text-black hover:text-red-600 transform hover:scale-125 transition-all duration-300"
                        />
                    </a>
                    <a href="https://www.instagram.com/Kavishka_Prabashara/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram
                            size={30}
                            className="text-black hover:text-pink-500 transform hover:scale-125 transition-all duration-300"
                        />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter
                            size={30}
                            className="text-black hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
                        />
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default About;
