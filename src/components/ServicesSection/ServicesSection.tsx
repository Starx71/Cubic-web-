import { memo } from 'react';
import { BrainCircuit, Zap, Code2, Users, MessageSquare, Settings } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
    {
        title: "Smart Manufacturing",
        description: "Strategic guidance to integrate AI into your manufacturing processes, identify opportunities, and develop roadmaps.",
        icon: <BrainCircuit className="w-8 h-8" />,
        image: "/images/smart-manufacturing.jpg"
    },
    {
        title: "Healthcare Solutions",
        description: "Tailored AI solutions for healthcare, including machine learning models, computer vision, and natural language processing.",
        icon: <Zap className="w-8 h-8" />,
        image: "/images/healthcare.jpg"
    },
    {
        title: "Financial Services",
        description: "Seamless integration of AI solutions into your financial systems and workflows for improved efficiency and security.",
        icon: <Code2 className="w-8 h-8" />,
        image: "/images/financial-services.jpg"
    },
    {
        title: "Data Analysis",
        description: "Comprehensive data analysis services to extract valuable insights and improve decision-making.",
        icon: <Users className="w-8 h-8" />,
    },
    {
        title: "Chatbot Development",
        description: "Build intelligent chatbots to automate customer support and enhance user experience.",
        icon: <MessageSquare className="w-8 h-8" />,
    },
    {
        title: "AI Training & Support",
        description: "Training programs and ongoing support to ensure your team can effectively use and manage AI solutions.",
        icon: <Settings className="w-8 h-8" />,
    },
];

const ServicesSection = memo(() => {
    return (
        <section 
            id="services" 
            className="py-16 px-4 sm:px-6 lg:px-8"
            aria-labelledby="services-heading"
        >
            <div className="max-w-6xl mx-auto">
                <h2 
                    id="services-heading"
                    className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12"
                >
                    Our Services
                </h2>
                <div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    role="list"
                    aria-label="List of services"
                >
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;
