import { motion } from 'framer-motion';

const skillsData = {
  "Languages & Frameworks": ["JavaScript", "TypeScript", "Node.js", "React.js", "NestJS", "Python", "Flask", "C++", "Java"],
  "Databases": ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  "Tools & APIs": ["REST APIs", "GraphQL", "Postman", "Docker", "Cloudflare", "Nginx"],
  "Cloud & DevOps": ["CI/CD", "Jenkins", "Kubernetes (Basics)"],
  "Soft Skills": ["Problem Solving", "Remote Collaboration", "Critical Thinking"]
};

const Skills = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto py-12 px-6 text-gray-800"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-cyan-600">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {Object.entries(skillsData).map(([category, skills], idx) => (
          <div key={idx} className="bg-gray-50 p-5 shadow-md rounded-lg border">
            <h3 className="text-xl font-semibold mb-3 text-gray-700">{category}</h3>
            <ul className="list-disc list-inside text-gray-600">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
