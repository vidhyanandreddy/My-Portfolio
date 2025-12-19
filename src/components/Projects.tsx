import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Soundory – Music Streaming Web Application',
      description:
        'Developed a full-stack music streaming web application with user authentication, profile management, and seamless audio playback. Implemented secure login, email support, and efficient backend handling.',
      techStack: ['Python', 'Django', 'HTML+CSS', 'Javascript','Bootstrap','SQLite'],
      github: 'https://github.com/vidhyanandreddy/Soundory-Website',
      gradient: 'from-red-500 to-pink-500',
      liveDemo: 'https://soundory.onrender.com/',
    },
    {
      title: 'Student Library Management System',
      description:
        'Built a Java-based backend system to manage student and library operations, including book issue/return and inventory management. Created REST APIs and tested endpoints using Postman.',
      techStack: ['Java', 'Spring Boot', 'MySQL', 'REST API','JPA','Hibernate'],
      github: 'https://github.com/vidhyanandreddy/Student-Library-Management-System',
      gradient: 'from-blue-500 to-cyan-500',
      liveDemo: 'https://github.com/vidhyanandreddy/Student-Library-Management-System',
    },
    {
      title: 'CSE Learning Hub',
      description:
        'Designed and developed a frontend web application that provides academic materials, previous question papers, and technical resources for B.Tech students. Widely used by students in the college.',
      techStack: ['HTML', 'CSS', 'JavaScript','Bootstrap'],
      github: 'https://github.com/vidhyanandreddy/cselearninghub',
      gradient: 'from-green-500 to-teal-500',
      liveDemo: 'https://cselearninghub.netlify.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.liveDemo}
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
