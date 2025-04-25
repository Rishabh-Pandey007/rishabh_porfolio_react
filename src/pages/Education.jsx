import { motion } from 'framer-motion';

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "Thakur Institute of Management Studies, Career Development and Research (TIMSCDR), Mumbai",
    duration: "2023 – Present",
    result: "GPA: 7.0 (Agg), MCA-CET: 93 percentile"
  },
  {
    degree: "Bachelor of Science in IT (B.Sc. IT)",
    institute: "DTSS College of Commerce, Mumbai",
    duration: "2019 – 2022",
    result: "CGPA: 9.43"
  }
];

const Education = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto py-12 px-6 text-gray-800"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-cyan-600">Education</h2>
      <div className="space-y-8">
        {education.map((edu, idx) => (
          <div key={idx} className="bg-white shadow-md border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
            <p className="text-sm text-gray-500 italic">{edu.institute}</p>
            <p className="text-sm text-gray-600">{edu.duration}</p>
            <p className="text-sm text-gray-700 mt-1">{edu.result}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
