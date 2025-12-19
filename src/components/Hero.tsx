import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Vidhyanand Reddy
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold mb-4">
              Aspiring Java Backend Developer
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I specialize in building scalable backend applications using Java, Spring Boot, and MySQL, along with hands-on experience in full-stack web development.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View Projects
            </button>
            <a
  href="/M.Vidhyanand_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
  download
>
  <button className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
    <Download className="w-5 h-5" />
    Download Resume
  </button>
</a>

          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="mailto:vidhyanand067@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/vidhyanandreddy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mulinti-vidhyanand-reddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-8 h-8 text-blue-600 dark:text-blue-400" />
      </button>
    </section>
  );
}
