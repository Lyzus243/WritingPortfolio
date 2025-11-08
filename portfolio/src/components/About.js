import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-800 section fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12 font-poppins">
          About Me
        </h2>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-sm">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            As a creative and technical writer based in Ikeja, Lagos, I specialize in transforming complex concepts into engaging, accessible narratives. My background combines rigorous research with artistic storytelling, allowing me to craft content that not only informs but also resonates emotionally with readers.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
            Whether developing gamified learning platforms or producing compelling written works, I approach each project with a commitment to clarity, creativity, and depth. My editing expertise ensures that every piece meets the highest standards of quality and readability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
