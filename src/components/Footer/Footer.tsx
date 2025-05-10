export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

                    {/* Logo or Brand */}
                    <div className="text-2xl font-bold">📚 BookWorld</div>

                    {/* Navigation Links */}
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-gray-300">Home</a>
                        <a href="#" className="hover:text-gray-300">Books</a>
                        <a href="#" className="hover:text-gray-300">Authors</a>
                        <a href="#" className="hover:text-gray-300">Contact</a>
                    </div>

                    {/* Social Media Icons (placeholders) */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-400">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="mt-6 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} BookWorld. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
