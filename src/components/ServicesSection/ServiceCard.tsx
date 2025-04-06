import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}

const ServiceCard = memo(({ title, description, icon, index }: ServiceCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: 'easeInOut', delay: index * 0.2 }
    };

    const iconVariants = {
        initial: { scale: 1, y: 0 },
        hover: { scale: 1.1, y: -5 },
        transition: { type: "spring", stiffness: 300, damping: 20 }
    };

    return (
        <motion.div
            {...cardVariants}
            viewport={{ once: true }}
            className={cn(
                "bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md border border-gray-200/50 transition-all duration-300",
                "hover:shadow-lg hover:scale-[1.01] hover:border-blue-500/30",
                isHovered && "border-blue-500/30 shadow-blue-500/20"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="article"
            aria-label={`${title} service`}
        >
            <motion.div
                className="mb-4 text-blue-500"
                variants={iconVariants}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                aria-hidden="true"
            >
                {icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
