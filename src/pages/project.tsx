import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

// Sample project data (replace these with actual project details)
const projects = [
    {
        title: 'Project 1',
        description: 'A brief description of Project 1.',
        img: '/src/assets/projectSS/project1.png', // Screenshot path
        githubLink: 'https://drive.google.com/file/d/12D45lyqIHc-5GBdnxMaaFCb6NliM2Bzs/view',
    },
    {
        title: 'Project 2',
        description: 'A brief description of Project 2.',
        img: '/src/assets/projectSS/project2.png', // Screenshot path
        githubLink: 'https://drive.google.com/file/d/12D45lyqIHc-5GBdnxMaaFCb6NliM2Bzs/view',
    },
    {
        title: 'Project 3',
        description: 'A brief description of Project 3.',
        img: '/src/assets/projectSS/project3.png', // Screenshot path
        githubLink: 'https://drive.google.com/file/d/1LcR6ii7iTM2rUSJn5jxOgl40FdFFGEmz/view',
    },
    {
        title: 'Project 4',
        description: 'A brief description of Project 4.',
        img: '/src/assets/projectSS/project4.png', // Screenshot path
        githubLink: 'https://drive.google.com/file/d/1jN5aHVkuG63xMRyMu16pxrdBQKlambsH/view',
    },
    // Add more projects as needed
];

const Project = () => {
    // Only display the first 3 projects on mobile view
    const displayedProjects = projects.slice(0, 3);

    return (
        <section id="project" className="py-16">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="relative group shadow-lg overflow-hidden rounded-lg"
                            whileHover={{ scale: 1.05 }} // Slight zoom on hover
                            whileTap={{ scale: 0.95 }} // Slight shrink on tap
                        >
                            {/* Project Screenshot */}
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-60 object-cover group-hover:opacity-50 transition-opacity duration-300"
                            />

                            {/* Project Details on Hover */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 transition-opacity duration-300">
                                <h3 className="text-white text-2xl mb-4">{project.title}</h3>
                                <p className="text-white text-sm mb-6 px-6 text-center">{project.description}</p>

                                {/* GitHub Button */}
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
                                >
                                    <FaGithub className="mr-2" size={24} />
                                    <span>View on GitHub</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* See All Projects Button */}
                <div className="flex justify-center mt-12">
                    <a
                        href="/all-projects" // Link to the page showing all projects
                        className="text-gray-700 hover:text-gray-900 text-lg font-semibold"
                    >
                        See All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Project;
