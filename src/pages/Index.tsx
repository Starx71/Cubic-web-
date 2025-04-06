
import { useState, useEffect, useCallback } from 'react';
import AnimatedCubes from '@/components/AnimatedCubes/AnimatedCubes';
import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import SolutionsSection from '@/components/SolutionsSection/SolutionsSection';
import AboutSection from '@/components/AboutSection/AboutSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import Footer from '@/components/Footer/Footer';

const Index = () => {
    // State for managing active section for animated appearance
    const [activeSection, setActiveSection] = useState<string | null>('hero');

    const handleSectionInView = useCallback((sectionName: string) => {
        setActiveSection(sectionName);
    }, []);

    // Intersection Observer for section activation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        handleSectionInView(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.1, // Adjust as needed
            }
        );

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [handleSectionInView]);

    return (
        <div className="bg-white min-h-screen">
            <AnimatedCubes />
            <Header />
            <main>
                <HeroSection />
                <ServicesSection />
                <SolutionsSection />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
