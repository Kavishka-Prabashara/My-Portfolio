import Project1 from '../assets/projectSS/project1.png';
import Project2 from '../assets/projectSS/project2.png';
import Project3 from '../assets/projectSS/project3.png';
import Project4 from '../assets/projectSS/project4.png';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: 'Coffee Shop Management',
        description: 'Java, MySQL, JavaFX',
        img: Project1,
        githubLink: 'https://github.com/Kavishka-Prabashara/Coffee-Shop-Management-System-MVCJava',
    },
    {
        title: 'Restaurant Management',
        description: 'HTML, CSS, JavaScript',
        img: Project2,
        githubLink: 'https://github.com/Kavishka-Prabashara/RestoRise-Restaurant-and-Bar-Management-System-Web-POS',
    },
    {
        title: 'Pre School Management',
        description: 'A brief description of Project 3.',
        img: Project3,
        githubLink: '',
    },
    {
        title: 'Project 4',
        description: 'A brief description of Project 4.',
        img: Project4,
        githubLink: '',
    },
];

const Project = () => {
    const displayedProjects = projects.slice(0, 3);

    return (
        <motion.section
            id="project"
            className="py-16 mx-4 md:mx-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-4xl font-bold mb-10 text-center text-blue-900">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="relative group shadow-lg overflow-hidden rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-60 object-cover group-hover:opacity-50 transition-opacity duration-300"
                            />

                            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 transition-opacity duration-300">
                                <h3 className="text-white text-2xl mb-4">{project.title}</h3>
                                <p className="text-white text-sm mb-6 px-6 text-center">{project.description}</p>

                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
                                    >
                                        <FaGithub className="mr-2" size={24} />
                                        <span>View on GitHub</span>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <a
                        href="../pages/sss"
                        className="text-gray-700 hover:text-gray-900 text-lg font-semibold"
                    >
                        See All Projects
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default Project;
