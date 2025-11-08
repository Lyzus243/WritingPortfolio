import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 font-poppins">
            Oluwaseun Olaniran
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Creative and technical writer specializing in transforming complex ideas into compelling, accessible narratives.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:oluwaseunolaniran01@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
               @ 2025 Oluwaseun Olaniran. Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
