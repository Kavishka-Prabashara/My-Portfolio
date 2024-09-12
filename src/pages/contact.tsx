const Contact = () => {
    return (
        <section id="contact" className="p-8 bg-gray-50">
            <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-between">
                {/* Left Side: Contact Form */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src="https://unblast.com/wp-content/uploads/2022/08/Programmer-Illustration.jpg"
                        alt="Contact Illustration"
                        className="w-3/4 h-auto"
                    />
                </div>
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <h2 className="text-3xl font-bold mb-4 text-blue-900">Let’s Collaborate!</h2>
                    <p className="text-base text-gray-700 mb-6">
                        I’d love to hear from you! Whether you have a project in mind, a question, or just want to
                        connect, feel free to send me a message below.
                    </p>

                    <form className="space-y-4">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-base font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your email"
                            />
                        </div>

                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-base font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your name"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message"
                                   className="block text-base font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                className="w-full p-2 h-24 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your message"
                            ></textarea>
                        </div>

                        {/* Send Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="w-1/3 bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition duration-300 text-sm mx-auto"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Side: SVG Graphic */}

            </div>
        </section>
    );
}

export default Contact;
