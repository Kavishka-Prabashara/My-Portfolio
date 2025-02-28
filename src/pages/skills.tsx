import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaJs, FaPython, FaCloud, FaMobileAlt, FaDatabase, FaGitAlt, FaReact, FaBug } from "react-icons/fa";

// Motion Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Skills = () => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                controls.start({ opacity: 1, y: 0, scale: 1 });
            } else {
                controls.start({ opacity: 0.8, y: 20, scale: 0.95 });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    return (
        <motion.section
            id="skills"
            className="skills-container p-8 bg-white mx-4 md:mx-8 lg:mx-16"
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto">
                {/* Introduction */}
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-4xl font-bold mb-4 text-blue-900"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Skills & Expertise
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        I have extensive experience with a broad range of technologies, tools, and platforms. Here are some of the key skills I bring to the table.
                    </motion.p>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
                    {[
                        { Icon: FaJs, title: "JavaScript", desc: "ES6+, React, Node.js", color: "text-yellow-500" },
                        { Icon: FaPython, title: "Python", desc: "Django, Flask, Data Analysis", color: "text-green-500" },
                        { Icon: FaCloud, title: "Cloud & DevOps", desc: "AWS, Docker, Kubernetes", color: "text-blue-500" },
                        { Icon: FaMobileAlt, title: "Mobile Development", desc: "Flutter, React Native", color: "text-purple-500" },
                        { Icon: FaDatabase, title: "Databases", desc: "SQL, NoSQL, MongoDB", color: "text-red-500" },
                        { Icon: FaGitAlt, title: "Version Control", desc: "Git, GitHub, GitLab", color: "text-orange-500" },
                        { Icon: FaReact, title: "Front-End Frameworks", desc: "React, Angular", color: "text-cyan-500" },
                        { Icon: FaBug, title: "Testing & Debugging", desc: "Jest, Cypress, Selenium", color: "text-red-500" },
                    ].map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            className="skill-box p-6 bg-gray-100 rounded-lg shadow-md hover:bg-blue-50 hover:scale-105 transition-transform duration-300"
                        >
                            <skill.Icon size={40} className={`mb-4 ${skill.color} transition-colors duration-300 hover:text-blue-500`} />
                            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                            <p className="text-sm text-gray-600">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;
