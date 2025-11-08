import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'StudyRPG Demo Video',
      description: 'A gamified learning platform that transforms study sessions into engaging RPG adventures, combining educational content with interactive gameplay mechanics.',
      type: 'Video',
      link: 'https://www.awesomescreenshot.com/video/43357104?key=439920c289651bedf5302b52abe78f88',
      icon: '🎮'
    },
    {
      title: 'Reflective Essay: The Dance of Creativity and Learning',
      description: 'An exploration of the intricate relationship between creative expression and continuous learning, examining how they fuel each other in the pursuit of meaningful work.',
      type: 'Writing',
      link: '/writing/reflective-essay',
      icon: '📝'
    },
    {
      title: 'Narrative Story: The Last Letter',
      description: 'A compelling short story about rediscovery, loss, and the healing power of confronting past memories, featuring rich character development and emotional depth.',
      type: 'Writing',
      link: '/writing/narrative-story',
      icon: '📖'
    },
    {
      title: 'Informational Article: The Art of Clear Communication',
      description: 'A comprehensive guide to effective communication in the digital age, covering principles, strategies, and practical applications for writers and content creators.',
      type: 'Writing',
      link: '/writing/informational-article',
      icon: '📋'
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 section fade-in">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12 font-poppins">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{project.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 font-inter">
                    {project.title}
                  </h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {project.type}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>
              {project.type === 'Video' ? (
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View {project.type}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <Link
                  to={project.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  View {project.type}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
