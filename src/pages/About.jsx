import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto py-12 px-6 text-gray-800"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-4 text-cyan-600">About Me</h2>
      <p className="text-lg leading-8 text-gray-700">
        I’m Rishabh Pandey, a results-driven Backend Developer with expertise in JavaScript, Node.js, and modern web technologies. I'm passionate about building scalable solutions, improving backend infrastructure, and driving innovation in software development. 
        <br /><br />
        I’ve led transformative projects that streamline digital payments and operations, with a strong focus on performance, reliability, and real-time data. I enjoy collaborating with cross-functional teams, exploring new tech stacks, and turning ideas into powerful backend solutions.
      </p>
    </motion.div>
  );
};

export default About;
