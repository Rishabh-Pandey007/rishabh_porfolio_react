import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-12 px-6 text-gray-800 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-cyan-600">Contact Me</h2>
      <p className="text-lg mb-6 text-gray-600">
        Interested in working together or have a question? Feel free to reach out!
      </p>

      <div className="space-y-4 text-gray-700">
        <div className="flex justify-center items-center space-x-3">
          <FaEnvelope className="text-cyan-600" />
          <a href="mailto:rishabhpandey2026@gmail.com" className="hover:underline">
            rishabhpandey2026@gmail.com
          </a>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <FaPhone className="text-cyan-600" />
          <a href="tel:+919967243646" className="hover:underline">
            +91 9967243646
          </a>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <FaGithub className="text-cyan-600" />
          <a
            href="https://github.com/Rishabh-Pandey007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/Rishabh-Pandey007
          </a>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <FaLinkedin className="text-cyan-600" />
          <a
            href="https://www.linkedin.com/in/rishabh-pandey-b97b7322a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/rishabh-pandey
          </a>
        </div>

        <p className="mt-6 text-gray-500">📍 Mumbai, India</p>
      </div>
    </motion.div>
  );
};

export default Contact;
