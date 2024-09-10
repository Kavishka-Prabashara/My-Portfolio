function About() {
    return (
        <section id="about" className="h-screen bg-gray-100 py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                {/* Left Side: Text */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
                    <p className="text-lg text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                        interdum sapien nec arcu aliquet, eget hendrerit turpis pretium.
                        Suspendisse potenti. Nulla facilisi. Etiam varius felis sit amet
                        felis cursus, vel volutpat metus sodales. Morbi gravida eu orci nec
                        gravida. Donec pellentesque arcu quis purus lobortis fermentum.
                    </p>
                </div>

                {/* Right Side: Photo */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="/logo.png"
                        alt="About Me"
                        className="w-64 h-64 rounded-full border-4 border-gray-300 object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
