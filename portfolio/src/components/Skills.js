import React from 'react';

const Skills = () => {
  const skills = [
    {
      title: 'Research & Analysis',
      description: 'Conducting thorough research and data analysis to inform compelling narratives.',
      icon: '🔍'
    },
    {
      title: 'Engaging Writing',
      description: 'Crafting clear, captivating content that resonates with diverse audiences.',
      icon: '✍️'
    },
    {
      title: 'Editing',
      description: 'Refining content for clarity, coherence, and professional presentation.',
      icon: '📝'
    },
    {
      title: 'Creative Content Development',
      description: 'Developing innovative content strategies and original creative works.',
      icon: '🎨'
    },
    {
      title: 'Visual Storytelling',
      description: 'Integrating visual elements to enhance narrative impact and engagement.',
      icon: '📊'
    }
  ];

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-900 section fade-in">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12 font-poppins">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 font-inter">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
