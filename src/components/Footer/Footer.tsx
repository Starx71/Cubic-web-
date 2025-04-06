
const Footer = () => {
    return (
        <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-100/50">
            <div className="max-w-6xl mx-auto text-center text-gray-600">
                &copy; {new Date().getFullYear()} AICore. All rights reserved.
                <div className="mt-4 flex justify-center">
                    <a
                        href="#"
                        className="text-blue-500 hover:text-blue-700 transition-colors mx-4"
                    >
                        Terms of Service
                    </a>
                    <span className="text-gray-400">|</span>
                    <a
                        href="#"
                        className="text-blue-500 hover:text-blue-700 transition-colors mx-4"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
