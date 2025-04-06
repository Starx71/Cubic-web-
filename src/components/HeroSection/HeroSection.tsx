
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
                >
                    Revolutionize Your Business with AI
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
                    className="text-lg sm:text-xl text-gray-700 mb-8"
                >
                    We develop cutting-edge AI solutions to automate your processes,
                    improve efficiency, and drive growth.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
                >
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        Explore Our Solutions
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
