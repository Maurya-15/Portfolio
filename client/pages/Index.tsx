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

  const mainProjects = [
    {
      title: 'Freelance Hub',
      subtitle: 'Freelance Marketplace Platform',
      description: 'A comprehensive Fiverr-like platform with job posting, proposals, gig creation, and instant order placement. Built analytics dashboards for clients and freelancers, plus an admin panel for managing users, orders, and gigs.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
      image: '/placeholder.svg',
      demo: '#',
      github: 'https://github.com/Maurya-15',
      status: 'Live',
      type: 'Web Application',
      icon: '💼'
    },
    {
      title: 'Skiply',
      subtitle: 'Smart Queue Booking Web',
      description: 'Real-time queue booking system for hospitals, banks, and businesses with role-based access, live status tracking, booking calendar, and business analytics dashboard.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'ShadCN/UI', 'Framer Motion', 'Node.js', 'MongoDB'],
      image: '/placeholder.svg',
      demo: '#',
      github: 'https://github.com/Maurya-15',
      status: 'Live',
      type: 'Web Application',
      icon: '📱'
    }
  ];

  const otherProjects = [
    {
      title: 'Desktop Assistant',
      subtitle: 'Speech Recognition Automation Tool',
      description: 'Voice-controlled assistant for web searches, opening apps, and automating system tasks with hands-free interaction.',
      tech: ['Python', 'SpeechRecognition', 'PyAudio', 'Pyttsx3', 'Webbrowser', 'OS'],
      demo: '#',
      github: 'https://github.com/Maurya-15',
      status: 'Completed',
      type: 'Desktop App',
      icon: '🎤'
    },
    {
      title: 'Cricket Champion',
      subtitle: 'Fantasy Cricket Team Generator',
      description: 'ML model for player performance prediction, fantasy team generation, and player/team comparison with explainable AI insights.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Streamlit', 'Generative AI'],
      demo: '#',
      github: 'https://github.com/Maurya-15',
      status: 'Completed',
      type: 'ML Project',
      icon: '🏏'
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
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-purple-dark/5 rounded-full blur-3xl"></div>
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
              href="https://cdn.builder.io/o/assets%2F6302eed1ff854c46b4222e42af8b3ed4%2F8880045b83d84214bbed1f5e9de498bc?alt=media&token=27664d51-b78f-4fa8-a743-96258a0cb284&apiKey=6302eed1ff854c46b4222e42af8b3ed4"
              download="Maurya_Doshi_Resume.pdf"
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download Resume
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

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Programming Languages */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Programming Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.programmingLanguages.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-surface border border-purple-dark/30 rounded-lg text-sm font-medium hover:bg-purple-dark/20 hover:border-primary transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.toolsAndTechnologies.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-surface border border-purple-dark/30 rounded-lg text-sm font-medium hover:bg-purple-dark/20 hover:border-primary transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.frameworksAndLibraries.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-surface border border-purple-dark/30 rounded-lg text-sm font-medium hover:bg-purple-dark/20 hover:border-primary transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Other Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.otherSkills.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-surface border border-purple-dark/30 rounded-lg text-sm font-medium hover:bg-purple-dark/20 hover:border-primary transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
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

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-gradient-to-br from-surface via-surface to-surface/80 rounded-2xl p-8 border border-purple-dark/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
                  {/* Project Image */}
                  <div className="lg:col-span-1">
                    <div className="relative overflow-hidden rounded-xl bg-purple-dark/10 h-48 lg:h-56 group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>

                      {/* Floating Project Number */}
                      <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-3xl font-bold gradient-text">{project.title}</h3>
                        {project.featured && (
                          <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                    </div>

                    {/* Tech Stack with Icons */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-purple-dark/10 text-foreground text-sm font-medium rounded-lg border border-purple-dark/30 hover:bg-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-2">
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                      >
                        <Eye size={18} />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl font-semibold transition-all duration-300"
                      >
                        <Github size={18} />
                        View Code
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
