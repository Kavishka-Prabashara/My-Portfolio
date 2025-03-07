import profilePic from '../assets/proPic.jpeg';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/component/mycv.pdf"; // Ensure this path is correct
        link.download = "mycv.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="px-6 sm:px-10 py-8">
            {/* Page Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
                About Me
            </h1>

            <motion.section
                id="about"
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex flex-col md:flex-row items-center justify-between rounded-xl mx-4 sm:mx-10 p-6 sm:p-10"
            >
                {/* Left Side - Profile Image */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0 rounded-lg p-6"
                >
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full border-4 border-gray-300 shadow-xl"
                    />
                </motion.div>

                {/* Right Side - Who is Kavishka */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0.5 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full md:w-2/3 text-center md:text-left"
                >
                    <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-black">Who is Kavishka?</h2>
                    </div>
                    <p className="text-gray-600 mt-3 text-base sm:text-lg">
                        A driven and enthusiastic individual with a strong passion for learning and
                        tackling new challenges. I thrive in both team-oriented and independent
                        work settings, consistently delivering high-quality results while meeting
                        deadlines and achieving objectives. With a bold and exploratory mindset, I
                        embrace challenges and take calculated risks, particularly in the dynamic
                        and ever-evolving field of technology
                    </p>

                    {/* Statistics */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0.5 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5"
                    >
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-lg sm:text-xl font-semibold">Projects Completed</h3>
                            <p className="text-blue-500 text-2xl sm:text-3xl font-bold">50+</p>
                        </div>
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-lg sm:text-xl font-semibold">Years of Experience</h3>
                            <p className="text-blue-500 text-2xl sm:text-3xl font-bold">2Y+</p>
                        </div>
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-lg sm:text-xl font-semibold">Industry Covered</h3>
                            <p className="text-blue-500 text-2xl sm:text-3xl font-bold">3+</p>
                        </div>
                    </motion.div>

                    {/* Download CV Button */}
                    <motion.div className="mt-6">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-gray-800 text-white px-5 sm:px-6 py-3 rounded-lg shadow-lg font-semibold text-base sm:text-lg"
                            onClick={handleDownload}
                        >
                            Download CV
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.section>
        </section>
    );
}

export default About;
