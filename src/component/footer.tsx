const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} All Rights Reserved. Developed by <a
                    href="https://www.linkedin.com/in/kavishka-prabashara-wijerathna-899588189/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline">
                    Kavishka Prabashara Wijerathna
                </a></p>

            </div>
        </footer>
    );
}

export default Footer;
