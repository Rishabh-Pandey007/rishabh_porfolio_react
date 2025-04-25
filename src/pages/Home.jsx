import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-[80vh] text-center p-6 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Hi, I'm Rishabh Pandey</h1>
      <p className="text-xl text-gray-600 mb-2">Backend Developer | Node.js | React.js</p>
      <p className="text-md text-gray-500 max-w-xl">
        Passionate about building scalable web applications, simplifying operations, and enhancing user experiences.
      </p>
    </motion.div>
  );
};

export default Home;
