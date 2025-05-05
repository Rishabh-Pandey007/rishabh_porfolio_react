import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "SpeedTest Website",
    description: "Developed a website to measure upload/download speed using real-time data.",
    tech: "Node.js, EJS",
    github: "https://github.com/Rishabh-Pandey007/speedtest_node-ejs"
  },
  {
    title: "Real-time Chat App",
    description: "In-progress chat application with notifications, timestamps, and chat history.",
    tech: "React.js, Node.js, MongoDB",
    github: "https://github.com/Rishabh-Pandey007/chat-application"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built using React and Tailwind CSS with smooth scroll and animations.",
    tech: "React.js, Tailwind CSS, Vite, Framer Motion",
    github: "https://github.com/Rishabh-Pandey007/rishabh_porfolio_react"
  },
  {
    title: "ANPR System",
    description: "Automatic Number Plate Recognition using Python for image processing, Node.js as backend, and React.js for dashboard.",
    tech: "Python, OpenCV, Node.js, React.js",
    github: "https://github.com/Rishabh-Pandey007/ANPR_React",
  }
];

const Projects = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto py-12 px-6 text-gray-800"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-cyan-600">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">Tech Stack: {project.tech}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyan-600 hover:underline"
            >
              <FaGithub className="mr-2" /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
