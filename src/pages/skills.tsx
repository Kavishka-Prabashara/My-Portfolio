import { motion } from 'framer-motion';
import { FaJs, FaPython, FaCloud, FaMobileAlt, FaDatabase, FaGitAlt, FaReact, FaBug } from 'react-icons/fa';

const Skills = () => {
    // Motion Variants for Scroll-triggered Animation
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="skills" className="skills-container p-8 bg-white">
            <div className="container mx-auto">
                {/* Introduction */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-900">Skills & Expertise</h2>
                    <p className="text-lg text-gray-700">
                        I have extensive experience with a broad range of technologies, tools, and platforms. Here are some of the key skills I bring to the table.
                    </p>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
                    {/* JavaScript */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible" // Trigger animation on scroll
                        viewport={{ once: true }} // Animate only once
                        className="skill-box p-6 bg-gray-100 rounded-lg shadow-md hover:bg-blue-50 hover:scale-105 transition-transform duration-300"
                    >
                        <FaJs
                            size={40}
                            className="mb-4 text-yellow-500 transition-colors duration-300 hover:text-blue-500" // Original color to hover
                        />
                        <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
                        <p className="text-sm text-gray-600">ES6+, React, Node.js</p>
                    </motion.div>

                    {/* Python */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="skill-box p-6 bg-gray-100 rounded-lg shadow-md hover:bg-blue-50 hover:scale-105 transition-transform duration-300"
                    >
                        <FaPython
                            size={40}
                            className="mb-4 text-green-500 transition-colors duration-300 hover:text-blue-500"
                        />
                        <h3 className="text-xl font-semibold mb-2">Python</h3>
                        <p className="text-sm text-gray-600">Django, Flask, Data Analysis</p>
                    </motion.div>

                    {/* Cloud & DevOps */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="skill-box p-6 bg-gray-100 rounded-lg shadow-md hover:bg-blue-50 hover:scale-105 transition-transform duration-300"
                    >
                        <FaCloud
                            size={40}
                            className="mb-4 text-blue-500 transition-colors duration-300 hover:text-blue-500"
                        />
                        <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
                        <p className="text-sm text-gray-600">AWS, Docker, Kubernetes</p>
                    </motion.div>

                    {/* Mobile Development */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="skill-box p-6 bg-gray-100 rounded-lg shadow-md hover:bg-blue-50 hover:scale-105 transition-transform duration-300"
                    >
                        <FaMobileAlt
                            size={40}
                            className="mb-4 text-purple-500 transition-colors duration-300 hover:text-blue-500"
                        />
                        <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
                        <p className="text-sm text-gray-600">Flutter, React Native</p>
                    </motion.div>

                    {/* Databases */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="skill-box p-6 bg-gray-100 rounded-lg shadow-md hover:bg-blue-50 hover:scale-105 transition-transform duration-300"
                    >
                        <FaDatabase
                            size={40}
                            className="mb-4 text-red-500 transition-colors duration-300 hover:text-blue-500"
                        />
                        <h3 className="text-xl font-semibold mb-2">Databases</h3>
                        <p className="text-sm text-gray-600">SQL, NoSQL, MongoDB</p>
                    </motion.div>

                    {/* Version Control */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="skill-box p-6 bg-gray-100 rounded-lg shadow-md hover:bg-blue-50 hover:scale-105 transition-transform duration-300"
                    >
                        <FaGitAlt
                            size={40}
                            className="mb-4 text-orange-500 transition-colors duration-300 hover:text-blue-500"
                        />
                        <h3 className="text-xl font-semibold mb-2">Version Control</h3>
                        <p className="text-sm text-gray-600">Git, GitHub, GitLab</p>
                    </motion.div>

                    {/* Front-End Frameworks */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="skill-box p-6 bg-gray-100 rounded-lg shadow-md hover:bg-blue-50 hover:scale-105 transition-transform duration-300"
                    >
                        <FaReact
                            size={40}
                            className="mb-4 text-cyan-500 transition-colors duration-300 hover:text-blue-500"
                        />
                        <h3 className="text-xl font-semibold mb-2">Front-End Frameworks</h3>
                        <p className="text-sm text-gray-600">React, Angular</p>
                    </motion.div>

                    {/* Testing & Debugging */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="skill-box p-6 bg-gray-100 rounded-lg shadow-md hover:bg-blue-50 hover:scale-105 transition-transform duration-300"
                    >
                        <FaBug
                            size={40}
                            className="mb-4 text-red-500 transition-colors duration-300 hover:text-blue-500"
                        />
                        <h3 className="text-xl font-semibold mb-2">Testing & Debugging</h3>
                        <p className="text-sm text-gray-600">Jest, Cypress, Selenium</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
