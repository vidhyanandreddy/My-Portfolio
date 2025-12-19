import { Code, Brain, Globe, Wrench, Database } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'Java', 'C'],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Backend Technologies',
      icon: Brain,
      skills: ['Spring Boot', 'REST API Design', 'MySQL','JPA + Hibernate','Django'],
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: ['HTML', 'CSS', 'JavaScript','Bootstrap'],
      color: 'from-green-600 to-teal-600',
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Git & GitHub', 'VS Code', 'Postman','Maven','IntelliJ'],
      color: 'from-orange-600 to-red-600',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL','SQLite','PostgreSQL'],
      color: 'from-indigo-600 to-blue-600',
    },
    {
      title: 'Concepts',
      icon: Database,
      skills: ['DBMS','OS','OOPs','CN','DSA'],
      color: 'from-indigo-600 to-yellow-600',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
