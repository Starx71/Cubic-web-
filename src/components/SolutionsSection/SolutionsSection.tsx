
import SolutionCard from './SolutionCard';

const SolutionsSection = () => {
    return (
        <section id="solutions" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                    Our Solutions
                </h2>
                <div className="space-y-16">
                    <SolutionCard
                        title="Smart Manufacturing"
                        description="AI-powered solutions for optimizing production, predictive maintenance, and quality control."
                        imageUrl="https://placehold.co/600x400/EEE/31343C"
                        index={0}
                    />
                    <SolutionCard
                        title="Healthcare AI"
                        description="AI tools for diagnostics, personalized medicine, drug discovery, and patient care."
                        imageUrl="https://placehold.co/600x400/EEE/31343C"
                        index={1}
                    />
                    <SolutionCard
                        title="Financial Services"
                        description="AI solutions for fraud detection, risk management, algorithmic trading, and customer service."
                        imageUrl="https://placehold.co/600x400/EEE/31343C"
                        index={2}
                    />
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
