const Service = () => {
    return (
        <section id="service" className="h-screen service-container p-8 bg-gray-50"
                 >
            <div className="container mx-auto">
                {/* Introduction/Overview */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Services I Offer</h2>
                    <p className="text-lg text-gray-700">
                        With expertise in a wide range of technologies, I provide top-notch software engineering services to meet your unique needs, whether it’s building web applications, mobile solutions, or cloud-based platforms.
                    </p>
                </div>

                {/* Core Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="service-box bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Custom Software Development</h3>
                        <p className="text-sm text-gray-600">
                            I create tailored software solutions designed to address your specific business needs.
                        </p>
                    </div>

                    <div className="service-box bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Web Application Development</h3>
                        <p className="text-sm text-gray-600">
                            Develop dynamic and responsive web applications using modern frameworks such as React and Node.js.
                        </p>
                    </div>

                    <div className="service-box bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
                        <p className="text-sm text-gray-600">
                            Build cross-platform and native mobile applications for iOS and Android using technologies like Flutter and React Native.
                        </p>
                    </div>

                    <div className="service-box bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">API Development & Integration</h3>
                        <p className="text-sm text-gray-600">
                            Develop scalable APIs and integrate third-party services into your application ecosystem.
                        </p>
                    </div>

                    <div className="service-box bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Cloud Services & DevOps</h3>
                        <p className="text-sm text-gray-600">
                            I offer cloud infrastructure setup, continuous integration, and continuous deployment services on AWS, Google Cloud, and Azure.
                        </p>
                    </div>

                    <div className="service-box bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Database Design & Management</h3>
                        <p className="text-sm text-gray-600">
                            Expertise in SQL and NoSQL databases, ensuring scalable and efficient data management solutions.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Ready to Collaborate?</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Let’s work together to bring your ideas to life! Reach out to discuss your project.
                    </p>
                    <a
                        href="#contact"
                        className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Service;
