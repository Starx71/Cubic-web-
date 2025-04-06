
import { BrainCircuit, Zap, Code2, Users, MessageSquare, Settings } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
    return (
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        title="AI Consulting"
                        description="Strategic guidance to integrate AI into your business, identify opportunities, and develop roadmaps."
                        icon={<BrainCircuit className="w-8 h-8" />}
                        index={0}
                    />
                    <ServiceCard
                        title="Custom AI Development"
                        description="Tailored AI solutions, including machine learning models, computer vision, and natural language processing."
                        icon={<Zap className="w-8 h-8" />}
                        index={1}
                    />
                    <ServiceCard
                        title="AI Integration"
                        description="Seamless integration of AI solutions into your existing systems and workflows."
                        icon={<Code2 className="w-8 h-8" />}
                        index={2}
                    />
                    <ServiceCard
                        title="Data Analysis"
                        description="Comprehensive data analysis services to extract valuable insights and improve decision-making."
                        icon={<Users className="w-8 h-8" />}
                        index={3}
                    />
                    <ServiceCard
                        title="Chatbot Development"
                        description="Build intelligent chatbots to automate customer support and enhance user experience."
                        icon={<MessageSquare className="w-8 h-8" />}
                        index={4}
                    />
                    <ServiceCard
                        title="AI Training & Support"
                        description="Training programs and ongoing support to ensure your team can effectively use and manage AI solutions."
                        icon={<Settings className="w-8 h-8" />}
                        index={5}
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
