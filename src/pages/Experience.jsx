import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Parkit",
    role: "Backend Developer (Node.js)",
    duration: "Nov 2022 – Present",
    location: "Mumbai",
    details: [
      "Led a smart parking system at Atria Mall, managing 350+ vehicles daily.",
      "Integrated Fastag & payment gateways (Paytm, Airtel, IDBI).",
      "Replaced manual tasks with digital bills & entry logs.",
      "Enabled real-time tracking of traffic and revenue."
    ]
  },
  {
    company: "SOV Technologies",
    role: "Backend Developer Intern (Node.js)",
    duration: "Jun 2022 – Aug 2022",
    location: "Thane",
    details: [
      "Migrated Jedlo backend from PHP to Node.js.",
      "Simplified delivery workflows & improved performance.",
      "Ensured a robust and scalable system transition."
    ]
  }
];

const Experience = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto py-12 px-6 text-gray-800"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-cyan-600">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white shadow-md border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">{exp.role} @ {exp.company}</h3>
            <p className="text-sm text-gray-500">{exp.location} | {exp.duration}</p>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
              {exp.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
