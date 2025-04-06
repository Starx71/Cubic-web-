
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="py-4 px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/20">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <BrainCircuit className="w-8 h-8 text-blue-500" />
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        AICore
                    </h1>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li>
                            <a
                                href="#services"
                                className="text-gray-700 hover:text-blue-500 transition-colors"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#solutions"
                                className="text-gray-700 hover:text-blue-500 transition-colors"
                            >
                                Solutions
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="text-gray-700 hover:text-blue-500 transition-colors"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-gray-700 hover:text-blue-500 transition-colors"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <Button variant="outline" className="text-blue-500 hover:bg-blue-500/10 border-blue-500/30">
                    Get Started
                </Button>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleMobileMenu}
                        className="text-gray-700 hover:bg-gray-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden mt-4"
                    >
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#services"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                    onClick={toggleMobileMenu}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#solutions"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                    onClick={toggleMobileMenu}
                                >
                                    Solutions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                    onClick={toggleMobileMenu}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                    onClick={toggleMobileMenu}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
