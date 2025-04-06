import { memo } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = memo(() => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com',
            icon: Github,
            label: 'Visit our GitHub profile'
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com',
            icon: Linkedin,
            label: 'Visit our LinkedIn profile'
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com',
            icon: Twitter,
            label: 'Visit our Twitter profile'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
                        <p className="text-gray-400">
                            Starx is dedicated to providing cutting-edge AI solutions
                            to help businesses thrive in the digital age.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a 
                                    href="#about" 
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="Go to About section"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#services" 
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="Go to Services section"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#contact" 
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="Go to Contact section"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map(({ name, href, icon: Icon, label }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label={label}
                                >
                                    <Icon className="w-6 h-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-8 pt-8 border-t border-gray-800 text-center"
                >
                    <motion.p variants={itemVariants} className="text-gray-400">
                        © {currentYear} Starx. All rights reserved.
                    </motion.p>
                    <motion.div variants={itemVariants} className="mt-4 space-x-4">
                        <a 
                            href="/terms" 
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Read our Terms of Service"
                        >
                            Terms of Service
                        </a>
                        <a 
                            href="/privacy" 
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Read our Privacy Policy"
                        >
                            Privacy Policy
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';

export default Footer;
