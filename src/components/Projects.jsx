import React from 'react';

const projects = [
  {
    title: 'NxtWatch – Video Streaming Platform',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&crop=center',
    description: 'YouTube-inspired app with login, trending, gaming, and saved videos. Secured with JWT and React Router.',
    link: 'https://nxtwatch1908.ccbp.tech/',
    github: 'https://github.com/kirankosanam1908/nxt_watch',
    technologies: ['React', 'JWT', 'React Router', 'REST API'],
    category: 'Full Stack',
    icon: '🎥'
  },
  {
    title: 'Jobby App – Job Search Platform',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6273d?w=800&h=600&fit=crop&crop=center',
    description: 'Full-featured job search app with authentication, job listings, filters, and protected routes.',
    link: 'https://kiranjobby.ccbp.tech/',
    github: 'https://github.com/kirankosanam1908/Jobby-App',
    technologies: ['React', 'Authentication', 'Filters', 'Protected Routes'],
    category: 'Web App',
    icon: '💼'
  },
  {
    title: 'NxtTrendz – E-commerce Clone',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
    description: 'Amazon & Flipkart-inspired site with product list, cart, and protected login. Built with React & REST APIs.',
    link: 'https://nxttrendz1908.ccbp.tech/',
    github: 'https://github.com/kirankosanam1908/Shoppy',
    technologies: ['React', 'REST API', 'E-commerce', 'Cart System'],
    category: 'E-commerce',
    icon: '🛒'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-br from-slate-100 via-blue-50/20 to-indigo-50/30 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-cyan-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Enhanced Section Header with Icon */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block space-y-4">
            <div className="text-6xl mb-4">💻</div>
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-slate-600 font-light mt-6 max-w-2xl mx-auto">
            Showcasing real-world applications built with modern technologies and best practices
          </p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white/70 backdrop-blur-sm border border-white/50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:scale-[1.02] animate-fadeInUp"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              {/* Category Badge with Icon */}
              <div className="absolute top-4 left-4 z-20">
                <span className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold rounded-full shadow-lg">
                  <span>{project.icon}</span>
                  {project.category}
                </span>
              </div>

              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-3xl">
                {project.splineEmbed ? (
                  <iframe
                    src={project.splineEmbed}
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-64 transition-transform duration-500 group-hover:scale-110"
                    title={project.title}
                  ></iframe>
                ) : (
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback gradient background if image fails to load
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = 'linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6)';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-64 flex items-center justify-center text-white text-6xl">
                            ${project.icon}
                          </div>
                        `;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110"
                      >
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110"
                      >
                        <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="p-8 space-y-6">
                {/* Title with Icon */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 text-blue-700 text-sm font-medium rounded-full hover:from-blue-200 hover:to-indigo-200 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex items-center gap-4 pt-4">
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <span>Live Demo</span>
                      <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-slate-300 text-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-700 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Subtle gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section with Icons */}
        <div className="text-center mt-16 animate-fadeInUp delay-1000">
          <div className="space-y-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-slate-800">
              Want to see more of my work?
            </h3>
            <p className="text-slate-600 max-w-md mx-auto">
              Check out my GitHub profile for additional projects and contributions
            </p>
            <a
              href="https://github.com/kirankosanam1908"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View All Projects on GitHub</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-40 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-700"></div>
      <div className="absolute bottom-60 right-16 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping delay-1200"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1800"></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-32 right-1/3 text-2xl animate-bounce delay-500">⚡</div>
      <div className="absolute bottom-40 left-1/3 text-xl animate-pulse delay-1500">✨</div>
      <div className="absolute top-2/3 right-20 text-lg animate-bounce delay-2000">🎯</div>
    </section>
  );
};

export default Projects;