import { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Download, 
  ExternalLink, 
  Github, 
  Mail, 
  MapPin, 
  Phone,
  Code2,
  Database,
  Globe,
  Server,
  Eye,
  Calendar,
  Award,
  Briefcase
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import TypingEffect from '@/components/TypingEffect';

export default function Index() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const skills = {
    programmingLanguages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'C++'],
    frameworksAndLibraries: ['React', 'Node.js', 'Express', 'Django', 'jQuery', 'Nextjs', 'TensorFlow', 'Flask'],
    toolsAndTechnologies: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Firebase', 'Jupyter Notebook', 'Anaconda'],
    otherSkills: ['Problem Solving', 'Data Structures', 'Algorithms', 'UI/UX', 'Responsive Design', 'REST APIs']
  };

  const projects = [
    {
      title: 'Freelance Hub',
      description: 'A comprehensive freelance marketplace platform with job posting, proposals, and instant order placement. Built analytics dashboards for clients and freelancers, plus an admin panel for managing users, orders, and gigs.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
      image: '/placeholder.svg',
      demo: '#',
      github: 'https://github.com/Maurya-15',
      featured: true
    },
    {
      title: 'Skiply - Smart Queue Booking',
      description: 'Real-time queue booking system for hospitals, banks, and businesses with role-based access, live status tracking, booking calendar, and business analytics dashboard.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'ShadCN/UI', 'Framer Motion', 'Node.js', 'MongoDB'],
      image: '/placeholder.svg',
      demo: '#',
      github: 'https://github.com/Maurya-15',
      featured: true
    },
    {
      title: 'Desktop Assistant',
      description: 'Voice-controlled assistant for web searches, opening apps, and automating system tasks with hands-free interaction.',
      tech: ['Python', 'SpeechRecognition', 'PyAudio', 'Pyttsx3', 'Webbrowser', 'OS'],
      image: '/placeholder.svg',
      demo: '#',
      github: 'https://github.com/Maurya-15',
      featured: false
    },
    {
      title: 'Cricket Champion',
      description: 'ML model for player performance prediction, fantasy team generation, and player/team comparison with explainable AI insights.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Streamlit', 'Generative AI'],
      image: '/placeholder.svg',
      demo: '#',
      github: 'https://github.com/Maurya-15',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        id="home" 
        data-section
        className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
          visibleSections.includes('home') ? 'fade-in' : ''
        }`}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
            Hi, I'm <span className="gradient-text">Maurya Doshi</span>
          </h1>
          
          <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
            <TypingEffect 
              texts={[
                'Aspiring Full-Stack Developer',
                'React.js Enthusiast',
                'Problem Solver',
                'Tech Innovator'
              ]}
              className="gradient-text font-semibold"
            />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Full-stack developer skilled in building responsive web apps using React, Node.js, Express, and MongoDB. 
            Experienced in authentication, database integration, and deployment. Passionate about delivering clean, 
            scalable code with intuitive UI/UX.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-semibold transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        data-section
        className={`py-20 ${visibleSections.includes('about') ? 'fade-in' : ''}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">Background</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm currently pursuing a B.E. in Computer Science and Technology at L.J. Institute of Engineering & Technology (2023-2027) in Ahmedabad, Gujarat.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey in web development began with curiosity and has evolved into a passion for creating innovative solutions. I love turning complex problems into simple, beautiful, and intuitive designs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect rounded-xl p-6 text-center">
                  <Briefcase className="mx-auto mb-3 text-primary" size={32} />
                  <h4 className="font-semibold mb-2">4+</h4>
                  <p className="text-sm text-muted-foreground">Projects Built</p>
                </div>
                <div className="glass-effect rounded-xl p-6 text-center">
                  <Award className="mx-auto mb-3 text-accent" size={32} />
                  <h4 className="font-semibold mb-2">Full Stack</h4>
                  <p className="text-sm text-muted-foreground">Development</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 glass-effect rounded-xl">
                <Mail className="text-primary" size={20} />
                <span>mauryadoshi1@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 p-4 glass-effect rounded-xl">
                <Phone className="text-primary" size={20} />
                <span>+91 9712590555</span>
              </div>
              <div className="flex items-center gap-3 p-4 glass-effect rounded-xl">
                <MapPin className="text-primary" size={20} />
                <span>Ahmedabad, Gujarat 382210</span>
              </div>
              <div className="flex items-center gap-3 p-4 glass-effect rounded-xl">
                <Calendar className="text-primary" size={20} />
                <span>Expected Graduation: 2027</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        data-section
        className={`py-20 bg-surface ${visibleSections.includes('skills') ? 'fade-in' : ''}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills</h2>
            <p className="text-muted-foreground text-lg">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="skill-pill text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-accent" size={24} />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="skill-pill text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Database</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
                  <span key={skill} className="skill-pill text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-accent" size={24} />
                <h3 className="text-xl font-semibold">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="skill-pill text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        data-section
        className={`py-20 ${visibleSections.includes('projects') ? 'fade-in' : ''}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">My Projects</h2>
            <p className="text-muted-foreground text-lg">
              A showcase of my recent work and achievements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`project-card p-6 ${project.featured ? 'lg:col-span-2' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${project.featured ? 'md:flex gap-8' : ''}`}>
                  <div className={`${project.featured ? 'md:w-1/2' : ''}`}>
                    <div className="relative overflow-hidden rounded-lg mb-4 bg-surface/50 h-48">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  <div className={`${project.featured ? 'md:w-1/2' : ''}`}>
                    <h3 className="text-2xl font-bold mb-3 gradient-text">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="skill-pill text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a 
                        href={project.demo}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300"
                      >
                        <Eye size={16} />
                        Live Demo
                      </a>
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-surface-hover rounded-lg transition-colors duration-300"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        data-section
        className={`py-20 bg-surface ${visibleSections.includes('contact') ? 'fade-in' : ''}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's connect and create something amazing together!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a 
                href="mailto:mauryadoshi1@gmail.com"
                className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 group"
              >
                <Mail className="mx-auto mb-4 text-primary group-hover:animate-bounce" size={32} />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">mauryadoshi1@gmail.com</p>
              </a>

              <a 
                href="https://github.com/Maurya-15"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 group"
              >
                <Github className="mx-auto mb-4 text-primary group-hover:animate-bounce" size={32} />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-muted-foreground">github.com/Maurya-15</p>
              </a>

              <a 
                href="https://www.linkedin.com/in/maurya-doshi-79073227a/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 group"
              >
                <ExternalLink className="mx-auto mb-4 text-primary group-hover:animate-bounce" size={32} />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-muted-foreground">Connect with me</p>
              </a>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Ready to start a project or just want to chat? I'd love to hear from you.
              </p>
              <a 
                href="mailto:mauryadoshi1@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                Say Hello
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Maurya Doshi. Built with ❤️ using React & TypeScript
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
