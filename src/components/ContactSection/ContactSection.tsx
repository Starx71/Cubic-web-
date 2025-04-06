
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection = () => {
    return (
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                    Contact Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">
                            Get in Touch
                        </h4>
                        <p className="text-gray-600 mb-6">
                            Have a project in mind or want to learn more about our services?
                            Reach out to us, and we&apos;ll be happy to assist you.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-gray-500" />
                                <span className="text-gray-600">info@example.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Github className="w-6 h-6 text-gray-500" />
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 transition-colors"
                                >
                                    GitHub
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <Linkedin className="w-6 h-6 text-gray-500" />
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <Twitter className="w-6 h-6 text-gray-500" />
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 transition-colors"
                                >
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">
                            Send us a Message
                        </h4>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
