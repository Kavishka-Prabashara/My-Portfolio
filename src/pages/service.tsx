import { FaCode, FaMobileAlt, FaCloud, FaDatabase, FaCogs, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Service = () => {
    return (
        <section id="service" className="service-container p-8 bg-white mx-8">
            <div className="container mx-auto">
                {/* Introduction/Overview */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-4  text-gray-800">Services I Offer</h2>
                </motion.div>

                {/* Core Services */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    {[
                        { icon: <FaCode />, title: "Custom Software Development", text: "I create tailored software solutions designed to address your specific business needs.", color: "text-gray-800" },
                        { icon: <FaLaptopCode />, title: "Web Application Development", text: "Develop dynamic and responsive web applications using modern frameworks such as React and Node.js.", color: "text-gray-800" },
                        { icon: <FaMobileAlt />, title: "Mobile App Development", text: "Build cross-platform and native mobile applications for iOS and Android using technologies like Flutter and React Native.", color: "text-gray-800" },
                        { icon: <FaCogs />, title: "API Development & Integration", text: "Develop scalable APIs and integrate third-party services into your application ecosystem.", color: "text-gray-800" },
                        { icon: <FaCloud />, title: "Cloud Services & DevOps", text: "I offer cloud infrastructure setup, continuous integration, and continuous deployment services on AWS, Google Cloud, and Azure.", color: "text-gray-800" },
                        { icon: <FaDatabase />, title: "Database Design & Management", text: "Expertise in SQL and NoSQL databases, ensuring scalable and efficient data management solutions.", color: "text-gray-800" },
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-box bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-2 duration-300 ease-in-out"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className={`flex items-center justify-center mb-4 text-3xl ${service.color}`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-600">{service.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-semibold mb-4">Ready to Collaborate?</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Let’s work together to bring your ideas to life! Reach out to discuss your project.
                    </p>
                    <a
                        href="#contact"
                        className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Service;
