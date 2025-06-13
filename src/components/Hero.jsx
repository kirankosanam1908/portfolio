import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  const backgroundImageUrl = "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1920&h=1080&fit=crop";

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden"
      style={{ 
        backgroundImage: `url('${backgroundImageUrl}')`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced Dynamic Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.9) 50%, rgba(67, 56, 202, 0.95) 100%)`
        }}
      ></div>
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs with parallax effect */}
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse-slow"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x * 0.015}px), calc(-50% + ${mousePosition.y * 0.015}px))`,
            animationDelay: '4s'
          }}
        ></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 min-h-screen">
        <div className="max-w-6xl w-full space-y-8">
          
          {/* Profile Image with Enhanced Animation */}
          <div className={`transform transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative inline-block group mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500 animate-pulse-slow"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group-hover:scale-110 transition-all duration-500">
                <img 
                  src="images/my_profile.jpg" 
                  alt="Kiran Kosanam" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
              {/* Floating status indicator */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white/80 shadow-lg">
                <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Name with Advanced Typography */}
          <div className={`space-y-6 transform transition-all duration-1500 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="inline-block">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
                <span className="inline-block animate-slideInLeft">Kiran</span>
                <span className="inline-block animate-slideInRight delay-200"> Kosanam</span>
              </h1>
              <div className="h-1.5 w-32 md:w-48 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 mx-auto mt-6 rounded-full shadow-lg shadow-blue-500/50 animate-expandWidth"></div>
            </div>
          </div>

          {/* Enhanced Role & Tagline with Typewriter Effect */}
          <div className={`transform transition-all duration-1500 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="space-y-4">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 backdrop-blur-sm rounded-full border border-white/20 shadow-xl hover:scale-105 transition-all duration-300">
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-white tracking-wide">
                  MERN Stack Developer
                </p>
              </div>
              <p className="text-base md:text-lg lg:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto font-light">
                Crafting <span className="text-cyan-300 font-semibold">Scalable</span> & 
                <span className="text-white font-semibold"> User-Centric</span> Web Applications
                <br />
                <span className="text-sm md:text-base text-indigo-200/80">
                  Transforming ideas into digital experiences that make a difference
                </span>
              </p>
            </div>
          </div>

          {/* Enhanced Achievements with Hover Effects */}
          <div className={`transform transition-all duration-1500 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
              {[
                { icon: "🎯", text: "GATE 2025 Qualified", color: "from-emerald-500/20 to-green-500/20 border-green-400/30" },
                { icon: "🏆", text: "Hackathon Winner @ GMRIT", color: "from-yellow-500/20 to-orange-500/20 border-yellow-400/30" },
                { icon: "🎪", text: "Event Organizer @ RGUKT", color: "from-purple-500/20 to-pink-500/20 border-purple-400/30" }
              ].map((achievement, index) => (
                <div 
                  key={index}
                  className={`group px-4 py-3 bg-gradient-to-r ${achievement.color} backdrop-blur-md border rounded-full text-sm md:text-base font-medium text-white/90 hover:text-white hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer`}
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                >
                  <span className="inline-block group-hover:animate-bounce mr-2">{achievement.icon}</span>
                  {achievement.text}
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className={`transform transition-all duration-1500 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#projects" className="group">
                <button className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-500 rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 hover:-translate-y-1 group-hover:shadow-2xl overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                </button>
              </a>
              
              <a href="#contact" className="group">
                <button className="relative px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-semibold text-lg rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105">
                  <span className="flex items-center gap-2">
                    Get In Touch
                    <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced 3D Model Container */}
        
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className={`absolute bottom-8 w-full flex justify-center z-20 transform transition-all duration-1500 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <a 
          href="#about" 
          className="group flex flex-col items-center text-white/70 hover:text-white transition-all duration-300 animate-bounce-slow" 
          aria-label="Scroll to About"
        >
          <span className="text-xs font-medium tracking-wider uppercase mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            Explore More
          </span>
          <div className="relative p-3 border-2 border-white/20 rounded-full group-hover:border-white/40 transition-all duration-300 hover:bg-white/5 backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </div>
        </a>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-float`}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 800}ms`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes slideInLeft {
          0% { transform: translateX(-100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          0% { transform: translateX(100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes expandWidth {
          0% { width: 0; }
          100% { width: 8rem; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
        }
        
        .animate-expandWidth {
          animation: expandWidth 1.5s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;