import profilePic from '../assets/proPic.jpeg';
import { motion, useInView } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import { useRef } from 'react';

function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col md:flex-row items-center justify-between p-10 bg-white rounded-xl mx-10"
        >
            {/* Left Side - Profile Image */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-1/3 flex justify-center"
            >
                <img
                    src={profilePic}
                    alt="Profile"
                    className="w-64 h-64 rounded-full border-4 border-gray-300 shadow-xl"
                />
            </motion.div>

            {/* Right Side - Who is Kavishka */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-2/3 text-center md:text-left"
            >
                <div className="flex items-center gap-3">
                    <FaUser className="text-white bg-blue-500 p-2 rounded-full text-5xl shadow-md" />
                    <h2 className="text-3xl font-bold">Who is Kavishka?</h2>
                </div>
                <p className="text-gray-600 mt-3 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>

                {/* Statistics */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0.5 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5"
                >
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold">Projects Completed</h3>
                        <p className="text-blue-500 text-3xl font-bold">50+</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold">Years of Experience</h3>
                        <p className="text-blue-500 text-3xl font-bold">2Y+</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold">Industry Covered</h3>
                        <p className="text-blue-500 text-3xl font-bold">3+</p>
                    </div>
                </motion.div>

                {/* Download CV Button */}
                <motion.div className="mt-6">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold text-lg"
                    >
                        Download CV
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default About;
