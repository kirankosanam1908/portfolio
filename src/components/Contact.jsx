import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
        setForm({ name: '', email: '', message: '' });
        setErrors({});
        setTimeout(() => setSubmitted(false), 5000);
      }, 1000);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'kirankosanam123@gmail.com',
      link: 'mailto:kirankosanam123@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/kirankosanam/'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: 'GitHub',
      value: 'View my code',
      link: 'https://github.com/kirankosanam1908'
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-slate-100 via-blue-50/20 to-indigo-50/30 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block space-y-4">
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-slate-600 font-light mt-6 max-w-2xl mx-auto">
            Ready to collaborate? I'd love to hear about your project and discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fadeInUp delay-300">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-800 mb-6">Get in Touch</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'm always excited to connect with fellow developers and potential collaborators.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80 transform hover:scale-[1.02]"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                      {method.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{method.value}</p>
                  </div>
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-slate-800 mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24h</div>
                  <div className="text-sm text-slate-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">100%</div>
                  <div className="text-sm text-slate-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="animate-fadeInUp delay-500">
            <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-3xl shadow-2xl p-8 lg:p-10">
              {/* Success Message */}
              {submitted && (
                <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl animate-fadeInUp">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
                      <p className="text-green-600 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-8">
                {/* Form Header */}
                <div className="text-center pb-4">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Send a Message</h3>
                  <p className="text-slate-600">Fill out the form below and I'll get back to you as soon as possible.</p>
                </div>

                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-slate-700 font-semibold">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className={`w-full border-2 ${errors.name ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'} rounded-xl px-4 py-4 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 placeholder-slate-400`}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-slate-700 font-semibold">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className={`w-full border-2 ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'} rounded-xl px-4 py-4 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 placeholder-slate-400`}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-slate-700 font-semibold">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows="6"
                      required
                      placeholder="Tell me about your project or just say hello..."
                      className={`w-full border-2 ${errors.message ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'} rounded-xl px-4 py-4 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 placeholder-slate-400 resize-none`}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                    <div className="absolute right-4 top-4">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-sm flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className={`group relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:from-slate-400 disabled:to-slate-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 shadow-lg hover:shadow-xl disabled:shadow-md ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        Sending...
                      </>
                    ) : submitted ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-500"></div>
      <div className="absolute bottom-40 left-16 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1500"></div>
    </section>
  );
};

export default Contact;