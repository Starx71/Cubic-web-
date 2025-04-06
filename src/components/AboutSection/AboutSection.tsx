
import { useState } from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    const [isImageHovered, setIsImageHovered] = useState(false);
    
    return (
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                    About Us
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <motion.img
                            src="https://placehold.co/600x400/EEE/31343C"
                            alt="About Us"
                            className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform duration-300"
                            onMouseEnter={() => setIsImageHovered(true)}
                            onMouseLeave={() => setIsImageHovered(false)}
                            style={{
                                transform: isImageHovered ? 'scale(1.03)' : 'scale(1)'
                            }}
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-gray-600 text-lg">
                            AICore is a team of passionate AI experts dedicated to helping
                            businesses harness the power of artificial intelligence. With
                            years of experience in machine learning, computer vision, and
                            natural language processing, we develop custom solutions that
                            drive innovation and efficiency.
                        </p>
                        <div className="mt-6">
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                Our Mission
                            </h4>
                            <p className="text-gray-600">
                                To empower businesses with cutting-edge AI technology, enabling
                                them to solve complex challenges and achieve their goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
