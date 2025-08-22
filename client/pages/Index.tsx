import { useState, useEffect } from "react";
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
  Briefcase,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import TypingEffect from "@/components/TypingEffect";

export default function Index() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const skills = {
    programmingLanguages: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "C++",
    ],
    frameworksAndLibraries: [
      "React",
      "Node.js",
      "Express",
      "Django",
      "jQuery",
      "Nextjs",
      "TensorFlow",
      "Flask",
    ],
    toolsAndTechnologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Firebase",
      "Jupyter Notebook",
      "Anaconda",
    ],
    otherSkills: [
      "Problem Solving",
      "Data Structures",
      "Algorithms",
      "UI/UX",
      "Responsive Design",
      "REST APIs",
    ],
  };

  const mainProjects = [
    {
      title: "Freelance Hub",
      subtitle: "Freelance Marketplace Platform",
      description:
        "A comprehensive Fiverr-like platform with job posting, proposals, gig creation, and instant order placement. Built analytics dashboards for clients and freelancers, plus an admin panel for managing users, orders, and gigs.",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT Authentication",
      ],
      image: "/placeholder.svg",
      demo: "#",
      github: "https://github.com/Maurya-15",
      status: "Live",
      type: "Web Application",
      icon: "💼",
    },
    {
      title: "Skiply",
      subtitle: "Smart Queue Booking Web",
      description:
        "Real-time queue booking system for hospitals, banks, and businesses with role-based access, live status tracking, booking calendar, and business analytics dashboard.",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN/UI",
        "Framer Motion",
        "Node.js",
        "MongoDB",
      ],
      image: "/placeholder.svg",
      demo: "#",
      github: "https://github.com/Maurya-15",
      status: "Live",
      type: "Web Application",
      icon: "📱",
    },
  ];

  const otherProjects = [
    {
      title: "Desktop Assistant",
      subtitle: "Speech Recognition Automation Tool",
      description:
        "Voice-controlled assistant for web searches, opening apps, and automating system tasks with hands-free interaction.",
      tech: [
        "Python",
        "SpeechRecognition",
        "PyAudio",
        "Pyttsx3",
        "Webbrowser",
        "OS",
      ],
      demo: "#",
      github: "https://github.com/Maurya-15",
      status: "Completed",
      type: "Desktop App",
      icon: "🎤",
    },
    {
      title: "Cricket Champion",
      subtitle: "Fantasy Cricket Team Generator",
      description:
        "ML model for player performance prediction, fantasy team generation, and player/team comparison with explainable AI insights.",
      tech: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Streamlit",
        "Generative AI",
      ],
      demo: "#",
      github: "https://github.com/Maurya-15",
      status: "Completed",
      type: "ML Project",
      icon: "🏏",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        data-section
        className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
          visibleSections.includes("home") ? "fade-in" : ""
        }`}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl float-animation"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl float-animation"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-purple-dark/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 text-center flex flex-col justify-center min-h-screen">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-shadow">
              Hi, I'm <span className="gradient-text">Maurya Doshi</span>
            </h1>

            <div className="text-2xl md:text-4xl lg:text-5xl h-16 md:h-20 flex items-center justify-center">
              <TypingEffect
                texts={[
                  "Aspiring Full-Stack Developer",
                  "React.js Enthusiast",
                  "Problem Solver",
                  "Tech Innovator",
                ]}
                className="gradient-text font-semibold"
              />
            </div>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Full-stack developer skilled in building responsive web apps using
              React, Node.js, Express, and MongoDB. Experienced in
              authentication, database integration, and deployment. Passionate
              about delivering clean, scalable code with intuitive UI/UX.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <a
                href="https://cdn.builder.io/o/assets%2F6302eed1ff854c46b4222e42af8b3ed4%2F8880045b83d84214bbed1f5e9de498bc?alt=media&token=27664d51-b78f-4fa8-a743-96258a0cb284&apiKey=6302eed1ff854c46b4222e42af8b3ed4"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="px-10 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-semibold transition-all duration-300 text-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        data-section
        className={`py-20 ${visibleSections.includes("about") ? "fade-in" : ""}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a
              difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  Background
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm currently pursuing a B.E. in Computer Science and
                  Technology at L.J. Institute of Engineering & Technology
                  (2023-2027) in Ahmedabad, Gujarat.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey in web development began with curiosity and has
                  evolved into a passion for creating innovative solutions. I
                  love turning complex problems into simple, beautiful, and
                  intuitive designs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect rounded-xl p-6 text-center">
                  <Briefcase className="mx-auto mb-3 text-primary" size={32} />
                  <h4 className="font-semibold mb-2">4+</h4>
                  <p className="text-sm text-muted-foreground">
                    Projects Built
                  </p>
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
        className={`py-20 bg-surface ${visibleSections.includes("skills") ? "fade-in" : ""}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Skills
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies and tools I work with
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Programming Languages */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Programming Languages
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.programmingLanguages.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-surface border border-purple-dark/30 rounded-lg text-sm font-medium hover:bg-purple-dark/20 hover:border-primary transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.toolsAndTechnologies.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-surface border border-purple-dark/30 rounded-lg text-sm font-medium hover:bg-purple-dark/20 hover:border-primary transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Frameworks & Libraries
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.frameworksAndLibraries.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-surface border border-purple-dark/30 rounded-lg text-sm font-medium hover:bg-purple-dark/20 hover:border-primary transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Other Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.otherSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-surface border border-purple-dark/30 rounded-lg text-sm font-medium hover:bg-purple-dark/20 hover:border-primary transition-all duration-300"
                      >
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

      {/* Certifications Section */}
      <section
        id="certifications"
        data-section
        className={`py-20 ${visibleSections.includes("certifications") ? "fade-in" : ""}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Certifications
            </h2>
            <p className="text-muted-foreground text-lg">
              Professional certifications and completed courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Delta 6.0 Certificate */}
            <div className="group bg-surface border border-purple-dark/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-dark/10 to-surface/50 h-48">
                  <img
                    src="/placeholder.svg"
                    alt="Delta 6.0 Full Stack Web Development Certificate"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold gradient-text">Delta 6.0</h3>
                  <p className="text-primary/80 font-medium">
                    Full Stack Web Development
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive program covering frontend and backend
                    technologies, including React, Node.js, Express, MongoDB,
                    and deployment.
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">
                      Apna College
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* JavaScript Certificate Placeholder */}
            <div className="group bg-surface border border-purple-dark/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-dark/10 to-surface/50 h-48">
                  <img
                    src="/placeholder.svg"
                    alt="JavaScript Certification"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold gradient-text">
                    JavaScript Mastery
                  </h3>
                  <p className="text-primary/80 font-medium">
                    Advanced JavaScript Concepts
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Deep dive into ES6+, async programming, DOM manipulation,
                    and modern JavaScript frameworks.
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">
                      Online Platform
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* React Certificate Placeholder */}
            <div className="group bg-surface border border-purple-dark/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-dark/10 to-surface/50 h-48">
                  <img
                    src="/placeholder.svg"
                    alt="React Development Certificate"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold gradient-text">
                    React Development
                  </h3>
                  <p className="text-primary/80 font-medium">
                    Modern React & Redux
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive React course covering hooks, context, state
                    management, and building scalable applications.
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">
                      Tech Academy
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Credentials */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-purple-dark/30 rounded-full">
              <Award className="text-primary" size={20} />
              <span className="text-foreground font-medium">
                Currently pursuing additional certifications in Cloud Computing
                & DevOps
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Projects Section */}
      <section
        id="projects"
        data-section
        className={`py-20 ${visibleSections.includes("projects") ? "fade-in" : ""}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              A showcase of my main projects and achievements
            </p>
          </div>

          <div className="space-y-12">
            {mainProjects.map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-gradient-to-br from-surface via-surface/90 to-surface/80 rounded-3xl p-8 lg:p-12 border border-purple-dark/20 hover:border-primary/50 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-3"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-accent/5 to-primary/8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl"></div>

                <div className="relative z-10 grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                  {/* Project Image & Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-dark/20 to-surface h-64 lg:h-72 group-hover:scale-105 transition-transform duration-700 shadow-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>

                      {/* Project Icon */}
                      <div className="absolute top-6 left-6 w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform duration-500">
                        {project.icon}
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-6 right-6">
                        <span
                          className={`px-3 py-1.5 text-xs font-bold rounded-full border backdrop-blur-sm ${
                            project.status === "Live"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      {/* Project Number */}
                      <div className="absolute bottom-6 left-6 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-primary font-bold">
                        0{index + 1}
                      </div>
                    </div>

                    {/* Project Type */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {project.type}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:col-span-3 space-y-8">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-4xl lg:text-5xl font-bold gradient-text mb-2 group-hover:scale-105 transition-transform duration-500 origin-left">
                          {project.title}
                        </h3>
                        <p className="text-xl text-primary/80 font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-widest flex items-center gap-2">
                        <Code2 size={16} />
                        Technology Stack
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {project.tech.map((tech) => (
                          <div
                            key={tech}
                            className="group/tech bg-surface/50 border border-purple-dark/30 rounded-xl p-3 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300"
                          >
                            <span className="text-sm font-medium text-foreground group-hover/tech:text-primary transition-colors">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <a
                        href={project.demo}
                        className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground rounded-2xl font-bold hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group/btn"
                      >
                        <Eye
                          size={20}
                          className="group-hover/btn:rotate-12 transition-transform duration-300"
                        />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-2xl font-bold transition-all duration-300 group/btn"
                      >
                        <Github
                          size={20}
                          className="group-hover/btn:rotate-12 transition-transform duration-300"
                        />
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

      {/* Other Projects Section */}
      <section
        id="other-projects"
        data-section
        className={`py-20 bg-surface/30 ${visibleSections.includes("other-projects") ? "fade-in" : ""}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Other Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Additional projects and experiments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-surface border border-purple-dark/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold gradient-text">
                          {project.title}
                        </h3>
                        <p className="text-primary/80 font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-surface border border-purple-dark/30 rounded-lg text-xs font-medium text-muted-foreground">
                      {project.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-dark/10 text-foreground text-xs font-medium rounded-lg border border-purple-dark/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status & Actions */}
                  <div className="flex items-center justify-between pt-4">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {project.status}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-lg font-medium transition-all duration-300"
                    >
                      <Github size={16} />
                      View Code
                    </a>
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
        className={`py-20 bg-surface ${visibleSections.includes("contact") ? "fade-in" : ""}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Get In Touch
            </h2>
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
                <Mail
                  className="mx-auto mb-4 text-primary group-hover:animate-bounce"
                  size={32}
                />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">mauryadoshi1@gmail.com</p>
              </a>

              <a
                href="https://github.com/Maurya-15"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 group"
              >
                <Github
                  className="mx-auto mb-4 text-primary group-hover:animate-bounce"
                  size={32}
                />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-muted-foreground">github.com/Maurya-15</p>
              </a>

              <a
                href="https://www.linkedin.com/in/maurya-doshi-79073227a/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 group"
              >
                <ExternalLink
                  className="mx-auto mb-4 text-primary group-hover:animate-bounce"
                  size={32}
                />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-muted-foreground">Connect with me</p>
              </a>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Ready to start a project or just want to chat? I'd love to hear
                from you.
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
              Designed and built by Maurya Doshi 2025 all rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
