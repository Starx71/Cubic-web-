import { memo } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const ContactSection = memo(() => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section 
            id="contact" 
            className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
            aria-labelledby="contact-heading"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-12"
                >
                    <motion.h2 
                        id="contact-heading"
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.p 
                        variants={itemVariants}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        Have a question or want to discuss your AI project? We'd love to hear from you.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-6"
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Contact Information
                            </h3>
                            <p className="text-gray-600">
                                Feel free to reach out to us through any of these channels:
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900">Email</h4>
                                <a 
                                    href="mailto:contact@aicore.com" 
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                    aria-label="Send us an email"
                                >
                                    contact@aicore.com
                                </a>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900">Phone</h4>
                                <a 
                                    href="tel:+1234567890" 
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                    aria-label="Call us"
                                >
                                    +1 (234) 567-890
                                </a>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900">Address</h4>
                                <address className="text-gray-600 not-italic">
                                    123 AI Street<br />
                                    Tech City, TC 12345<br />
                                    United States
                                </address>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white p-8 rounded-xl shadow-lg"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
