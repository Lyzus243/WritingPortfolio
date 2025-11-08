import React from 'react';

const Awards = () => {
  const awards = [
    {
      title: 'Best Content Developer Intern',
      organization: 'Leadcraft Innovations',
      year: '2024',
      description: 'Recognized for exceptional performance in content development and innovative approaches to educational technology.',
      icon: '🏆'
    },
    {
      title: 'Digital Storytelling Innovation',
      organization: 'Tech Writers Guild',
      year: '2023',
      description: 'Recognized for pioneering approaches to digital storytelling and innovative content creation techniques.',
      icon: '✨'
    }
  ];

  return (
    <section id="awards" className="bg-white dark:bg-gray-800 section fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12 font-poppins">
          Awards & Recognition
        </h2>
        <div className="space-y-8">
          {awards.map((award, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <div className="flex items-start">
                <span className="text-4xl mr-4">{award.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 font-inter">
                      {award.title}
                    </h3>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {award.organization}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
