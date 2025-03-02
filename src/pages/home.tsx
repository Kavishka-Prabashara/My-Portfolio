import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Home = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.section
            id="home"
            className="flex flex-col items-center justify-center h-screen bg-white text-center"
            animate={{ y: -scrollY * 0.5 }}
            transition={{ type: "spring", stiffness: 50 }}
        >
            <motion.h1
                className="text-6xl font-extrabold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Kavishka Prabashara Wijerathna
            </motion.h1>
            <motion.h2
                className="text-2xl text-gray-600 mt-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                I'm a Software Developer
            </motion.h2>
            <motion.div
                className="mt-6 flex gap-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <motion.button
                    className="px-8 py-3 bg-black text-white text-lg rounded-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Hire Me
                </motion.button>
                <motion.button
                    className="px-8 py-3 bg-white text-black text-lg border border-black rounded-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Download CV
                </motion.button>
            </motion.div>
        </motion.section>
    );
};

export default Home;
