import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = {
    degree: 'Bachelor of Technology in Computer Science Engineering',
    status: 'Final Year Student',
    focus: '',
    college: 'PVKK Institute of Technology',
    location: 'Anantapur, AP',
    year: '2022 - 2026',
  };

  const certifications = [
    {
      title: 'IBM SkillsBuild – Advanced AI Skills',
      issuer: 'ICT Academy & IBM',
      date: '2025',
      description: 'Advanced training in AI fundamentals and emerging technologies',
    },
    {
      title: 'Programming in Java',
      issuer: 'NPTEL',
      date: '2025',
      description: 'Training in Java programming concepts and applications',
    },
    {
      title: 'Oracle SQL',
      issuer: 'GUVI (HCL)',
      date: '2025',
      description: 'Training in Oracle SQL concepts and applications',
    },
    {
      title: 'Problem Solving',
      issuer: 'HackerRank',
      date: '2025',
      description: 'Problem solving skills',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg mb-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {education.degree}
                </h3>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {education.status}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {education.focus}
                </p>
                <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                  <span>{education.college}</span>
                  <span>•</span>
                  <span>{education.location}</span>
                  <span>•</span>
                  <span>{education.year}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Certifications & Training
            </h3>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {cert.issuer} • {cert.date}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {cert.description}
                    </p>
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
