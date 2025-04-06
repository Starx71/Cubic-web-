import { memo } from 'react';
import SolutionCard from './SolutionCard';

const solutions = [
    {
        title: "Smart Manufacturing",
        description: "AI-powered solutions for optimizing production, predictive maintenance, and quality control.",
        imageUrl: "https://placehold.co/600x400/EEE/31343C",
    },
    {
        title: "Healthcare AI",
        description: "AI tools for diagnostics, personalized medicine, drug discovery, and patient care.",
        imageUrl: "https://placehold.co/600x400/EEE/31343C",
    },
    {
        title: "Financial Services",
        description: "AI solutions for fraud detection, risk management, algorithmic trading, and customer service.",
        imageUrl: "https://placehold.co/600x400/EEE/31343C",
    },
];

const SolutionsSection = memo(() => {
    return (
        <section 
            id="solutions" 
            className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100/50"
            aria-labelledby="solutions-heading"
        >
            <div className="max-w-6xl mx-auto">
                <h2 
                    id="solutions-heading"
                    className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12"
                >
                    Our Solutions
                </h2>
                <div 
                    className="space-y-16"
                    role="list"
                    aria-label="List of solutions"
                >
                    {solutions.map((solution, index) => (
                        <SolutionCard
                            key={solution.title}
                            title={solution.title}
                            description={solution.description}
                            imageUrl={solution.imageUrl}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
});

SolutionsSection.displayName = 'SolutionsSection';

export default SolutionsSection;
