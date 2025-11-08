import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 min-h-screen flex items-center justify-center section fade-in">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 font-poppins">
          Oluwaseun Olaniran
        </h1>
        <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-8 font-inter">
          Turning complex ideas into clear, meaningful stories.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          A creative and technical writer blending storytelling, research, and editing skills to craft compelling narratives with clarity, creativity, and depth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="/Oluwaseun_Olaniran_Professional_CV.pdf" download className="btn-secondary">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
