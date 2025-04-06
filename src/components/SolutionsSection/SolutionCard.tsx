import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SolutionCardProps {
    title: string;
    description: string;
    imageUrl: string;
    index: number;
}

const SolutionCard = memo(({ title, description, imageUrl, index }: SolutionCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const cardVariants = {
        initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8, ease: 'easeInOut', delay: index * 0.3 }
    };

    const imageVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.05 },
        transition: { duration: 0.3 }
    };
    
    return (
        <motion.div
            {...cardVariants}
            viewport={{ once: true }}
            className={cn(
                "flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-lg",
                "transition-all duration-300",
                index % 2 === 0 ? "" : "md:flex-row-reverse"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="article"
            aria-label={`${title} solution`}
        >
            <div className="w-full md:w-1/2 overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-t-none">
                <motion.img
                    src={imageUrl}
                    alt={`${title} solution illustration`}
                    className="w-full h-auto object-cover"
                    variants={imageVariants}
                    initial="initial"
                    animate={isHovered ? "hover" : "initial"}
                    loading="lazy"
                />
            </div>
            <div className="w-full md:w-1/2 p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </motion.div>
    );
});

SolutionCard.displayName = 'SolutionCard';

export default SolutionCard;
