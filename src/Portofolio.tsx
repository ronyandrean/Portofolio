import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, Github, Linkedin, ExternalLink, Code, Database, Figma, Terminal, Users, Lightbulb, Target, ChevronDown, GitBranch } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  interface ScrollToSectionFn {
    (sectionId: string): void;
  }

  const scrollToSection: ScrollToSectionFn = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://example-ecommerce.com",
      githubLink: "https://github.com/yourusername/ecommerce"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team features",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      liveLink: "https://example-taskapp.com",
      githubLink: "https://github.com/yourusername/taskapp"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather application with forecasts, maps, and location-based services",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
      liveLink: "https://example-weather.com",
      githubLink: "https://github.com/yourusername/weather"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with beautiful data visualizations",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      liveLink: "https://example-dashboard.com",
      githubLink: "https://github.com/yourusername/dashboard"
    }
  ];

  const skills = {
    technical: [
      { name: "React.js", icon: <Code className="w-6 h-6" />, level: 90 },
      { name: "Node.js", icon: <Terminal className="w-6 h-6" />, level: 85 },
      { name: "JavaScript/TypeScript", icon: <Code className="w-6 h-6" />, level: 92 },
      { name: "Tailwind CSS", icon: <Code className="w-6 h-6" />, level: 88 },
      { name: "MongoDB/PostgreSQL", icon: <Database className="w-6 h-6" />, level: 80 },
      { name: "Git/GitHub", icon: <GitBranch className="w-6 h-6" />, level: 85 },
      { name: "Figma", icon: <Figma className="w-6 h-6" />, level: 75 },
      { name: "Redux/Context API", icon: <Code className="w-6 h-6" />, level: 82 }
    ],
    soft: [
      { name: "Problem Solving", icon: <Lightbulb className="w-5 h-5" /> },
      { name: "Team Collaboration", icon: <Users className="w-5 h-5" /> },
      { name: "Goal Oriented", icon: <Target className="w-5 h-5" /> }
    ]
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  interface HandleSubmitEvent extends React.MouseEvent<HTMLButtonElement> {}

  const handleSubmit = (e: HandleSubmitEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              John Doe
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 w-full text-left capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="mb-8 animate-fade-in-up">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up animation-delay-200">
            John Doe
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-400">
            Frontend Developer | React Enthusiast | Problem Solver
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-500/10 transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </div>
          
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate Frontend Developer with 5+ years of experience building modern web applications. 
              I specialize in React.js and love creating intuitive, performant user interfaces that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My journey in web development started with a curiosity about how websites work, and has evolved into 
              a deep expertise in JavaScript ecosystems, responsive design, and user experience principles. I thrive 
              in collaborative environments and enjoy mentoring junior developers.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through technical blog posts. I believe in continuous learning and staying 
              up-to-date with the latest industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.technical.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-gray-800/50 backdrop-blur-md rounded-xl p-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="text-blue-400">{skill.icon}</div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.soft.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-gray-800/50 backdrop-blur-md rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-gray-700/50 transition-colors"
                >
                  <div className="text-purple-400">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-32"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                Send Message
              </button>
            </div>
            
            <div className="mt-8 flex justify-center gap-6">
              <a
                href="mailto:john.doe@email.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/johndoe"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 John Doe. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://linkedin.com/in/johndoe" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/johndoe" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:john.doe@email.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;