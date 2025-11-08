import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="bg-white dark:bg-gray-800 section fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12 font-poppins">
          Experience
        </h2>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-sm">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2 font-inter">
              Content Developer Intern
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
              Leadcraft Innovations • March 2024 - August 2024
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Developed and implemented content strategies for educational technology products, focusing on user engagement and learning outcomes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Conducted research on emerging trends in digital storytelling and gamification, applying insights to content development processes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Collaborated with cross-functional teams to create compelling narratives that enhanced user experience and educational impact.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Edited and refined technical documentation, ensuring clarity and accessibility for diverse audiences.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
