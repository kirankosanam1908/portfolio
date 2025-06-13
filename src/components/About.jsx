import React, { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);



  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React', level: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
    { name: 'MongoDB', level: 80, color: 'from-emerald-500 to-emerald-600' },
    { name: 'Tailwind CSS', level: 95, color: 'from-cyan-500 to-cyan-600' },
    { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Express.js', level: 82, color: 'from-gray-600 to-gray-700' }
  ];

  const achievements = [
    {
      icon: '🎯',
      title: 'GATE 2025 Qualified',
      description: 'Computer Science & IT',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: '🏆',
      title: 'Hackathon Winner',
      description: 'GMRIT College Competition',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    {
      icon: '🎪',
      title: 'Event Organizer',
      description: 'RGUKT College Activities',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: '👥',
      title: '4x Class Representative',
      description: 'Leadership Excellence',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50'
    }
  ];

  const coreValues = [
    { icon: '🤝', label: 'Teamwork', color: 'blue' },
    { icon: '🧠', label: 'Critical Thinking', color: 'indigo' },
    { icon: '⏰', label: 'Time Management', color: 'cyan' },
    { icon: '💡', label: 'Innovation', color: 'green' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 overflow-hidden"
    >
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.4) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 mx-auto rounded-full shadow-lg"></div>
          </div>
          <p className="text-xl md:text-2xl text-slate-600 font-light mt-6 max-w-3xl mx-auto">
            Passionate Developer • Problem Solver • Team Leader
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-center gap-16 lg:gap-20">
          {/* Enhanced Profile Image Section */}
          <div className={`w-full xl:w-2/5 flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative group">
              {/* Animated border rings */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-all duration-1000 animate-spin-slow"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-all duration-800 animate-spin-reverse"></div>
              
              {/* Main image container */}
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-100 via-white to-indigo-100 p-3 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-xl">
                    <img
                      src="images/my_profile.jpg"
                      alt="Kiran Kosanam - MERN Stack Developer"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                {/* Enhanced floating badges */}
                <div className="absolute -top-6 -right-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-2xl text-sm font-bold shadow-lg animate-bounce-slow border-2 border-white/80">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🎯</span>
                      <div>
                        <div className="font-black">GATE 2025</div>
                        <div className="text-xs opacity-90">Qualified</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 group-hover:scale-110 transition-transform duration-300 delay-200">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-3 rounded-2xl text-sm font-bold shadow-lg animate-bounce-slow border-2 border-white/80">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🏆</span>
                      <div>
                        <div className="font-black">Winner</div>
                        <div className="text-xs opacity-90">Hackathon</div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>

          {/* Enhanced About Content Section */}
          <div className="w-full xl:w-3/5 space-y-8">
            {/* Introduction Card */}
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div 
                className="bg-white/70 backdrop-blur-lg border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:bg-white/80 transition-all duration-500 group cursor-pointer"
                onMouseEnter={() => setActiveCard('intro')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl">👋</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">Hello, I'm Kiran!</h3>
                      <p className="text-lg leading-relaxed text-slate-700">
                        A Computer Science undergraduate at <span className="font-semibold text-blue-700">RGUKT Srikakulam</span> and an aspiring MERN stack developer. I'm passionate about building responsive, user-friendly applications that make a real impact in people's lives.
                      </p>
                    </div>
                  </div>
                  
                  {/* Skills showcase */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">Technical Expertise</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {skills.map((skill, index) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                            <span className="text-sm text-slate-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div 
                              className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                              style={{ 
                                width: activeCard === 'intro' ? `${skill.level}%` : '0%',
                                transitionDelay: `${index * 100}ms`
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={achievement.title}
                    className={`bg-gradient-to-br ${achievement.bgColor} border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer group`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-2xl">{achievement.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 text-lg mb-1">{achievement.title}</h4>
                        <p className="text-slate-600 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Summary */}
            <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="bg-white/70 backdrop-blur-lg border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:bg-white/80 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">🚀</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Professional Journey</h3>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-slate-700 mb-6">
                    I've successfully completed industry-level training at <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded">NxtWave</span> and earned certifications in full-stack development. Beyond coding, I actively contribute to college events as an organizer and lead by example as a 4-time class representative.
                  </p>
                  
                  {/* Core Values */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-slate-800">Core Values</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {coreValues.map((value) => (
                        <div 
                          key={value.label}
                          className={`flex flex-col items-center text-center p-4 bg-${value.color}-50 border border-${value.color}-200 rounded-2xl hover:bg-${value.color}-100 transition-all duration-300 transform hover:scale-105`}
                        >
                          <span className="text-2xl mb-2">{value.icon}</span>
                          <span className={`text-${value.color}-700 font-medium text-sm`}>{value.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className={`transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start pt-6">
                <a href="#projects" className="group">
                  <button className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View My Projects
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </a>
                
                <a href="#contact" className="group">
                  <button className="relative px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                    <span className="flex items-center justify-center gap-2">
                      Get In Touch
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-float"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + i * 8}%`,
              animationDelay: `${i * 600}ms`,
              animationDuration: `${4 + i * 0.3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default About;