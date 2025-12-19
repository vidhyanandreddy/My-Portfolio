import { User, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Who I Am
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    I am a final-year Computer Science Engineering student at PVKK Institute of Technology with a strong foundation in Java backend development and web technologies.

I have practical experience developing RESTful APIs, database-driven applications, and full-stack web projects using Spring Boot, Django, and MySQL.

I am passionate about learning new technologies and aim to start my career as a Java Backend Developer in a growth-oriented organization.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    My Interests
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {['Java Backend Development', 'REST API Design', 'Database Management', 'Web Application Development', 'Problem Solving & Coding'].map((interest) => (
                      <span
                        key={interest}
                        className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-600 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Career Goals
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    Aspiring to become a Software Engineer or AI Engineer, I aim to contribute to
                    innovative projects that leverage artificial intelligence to create meaningful
                    impact. I'm constantly learning and adapting to new technologies to stay at the
                    forefront of this rapidly evolving field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
