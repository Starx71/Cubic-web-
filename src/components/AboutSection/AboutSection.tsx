import { useState } from 'react';
// Make sure you have framer-motion installed: npm install framer-motion
import { motion } from 'framer-motion';

// --- About Section Component ---
// Using React.memo to prevent unnecessary re-renders if props don't change.
function AboutSection() {
  // State to track if the image is being hovered over
  const [isImageHovered, setIsImageHovered] = useState(false);

  // Variants for framer-motion animation
  // Defines the initial state and the state on hover
  const imageVariants = {
    initial: { scale: 1 }, // Normal scale
    hover: { scale: 1.03 }, // Slightly larger scale on hover
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  return (
    // Section container with padding
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900" // Added background colors for light/dark mode
      aria-labelledby="about-heading" // Accessibility: links section to its heading
    >
      {/* Centered content container */}
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12" // Added dark mode text color
        >
          About Us
        </h2>
        {/* Flex container for image and text content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="w-full md:w-1/2">
            {/* Animated image using framer-motion */}
            <motion.img
              src="/images/about-section.jpg" // Using the about section image
              alt="Starx team working on AI solutions" // More descriptive alt text
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              variants={imageVariants} // Apply defined variants
              initial="initial" // Start with the 'initial' variant
              animate={isImageHovered ? "hover" : "initial"} // Animate to 'hover' state based on state
              onMouseEnter={() => setIsImageHovered(true)} // Set hover state to true on mouse enter
              onMouseLeave={() => setIsImageHovered(false)} // Set hover state to false on mouse leave
              loading="lazy" // Lazy load the image for performance
              // Basic fallback in case the image fails to load
              onError={(e: any) => {
                const target = e.currentTarget;
                target.onerror = null; // Prevent infinite loop if fallback also fails
                target.src = "https://placehold.co/600x400/fecaca/1f2937?text=Image+Error";
                target.alt = "Error loading image";
              }}
            />
          </div>
          {/* Text Content Column */}
          <div className="w-full md:w-1/2 text-gray-700 dark:text-gray-300"> {/* Added dark mode text color */}
            {/* Main description paragraph */}
            <p className="text-lg mb-6"> {/* Added margin-bottom */}
              Starx is a team of passionate AI experts dedicated to helping
              businesses harness the power of artificial intelligence. With
              years of experience in machine learning, computer vision, and
              natural language processing, we develop custom solutions that
              drive innovation and efficiency.
            </p>
            {/* Mission Subsection */}
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-inner"> {/* Added background, padding, and shadow */}
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Our Mission
              </h4>
              <p className="text-gray-600 dark:text-gray-400"> {/* Added dark mode text color */}
                To empower businesses with cutting-edge AI technology, enabling
                them to solve complex challenges and achieve their goals.
              </p>
            </div>
             {/* Vision Subsection (Example) */}
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-inner">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Our Vision
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                To be a leading partner in AI transformation, fostering a future where intelligent technology benefits all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Setting a display name for the component, useful for debugging
AboutSection.displayName = 'AboutSection';

// --- Main App Component (for demonstration) ---
// This is where you would typically include your AboutSection
function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 font-sans">
      {/* You can add a Navbar or Header here */}
      <header className="bg-blue-600 dark:bg-blue-800 text-white p-4 text-center text-2xl font-bold shadow-md">
         My Website
      </header>

      <main>
        {/* Include the AboutSection */}
        <AboutSection />
        {/* You can add other sections of your website here */}
         <section className="py-16 px-4 sm:px-6 lg:px-8 text-center text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-semibold mb-4">More Content Goes Here</h2>
            <p>This is another section of the page.</p>
         </section>
      </main>

      {/* You can add a Footer here */}
      <footer className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 text-center mt-12">
          © 2025 Starx. All rights reserved.
      </footer>
    </div>
  );
}

export default App; // Export the main App component
