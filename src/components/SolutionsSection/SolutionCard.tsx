
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SolutionCardProps {
    title: string;
    description: string;
    imageUrl: string;
    index: number;
}

const SolutionCard = ({ title, description, imageUrl, index }: SolutionCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: index * 0.3 }}
            viewport={{ once: true }}
            className={cn(
                "flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-lg",
                "transition-all duration-300",
                index % 2 === 0 ? "" : "md:flex-row-reverse"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-full md:w-1/2 overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-t-none">
                <motion.img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-auto object-cover transition-transform duration-300"
                    style={{
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                    }}
                />
            </div>
            <div className="w-full md:w-1/2 p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </motion.div>
    );
};

export default SolutionCard;
