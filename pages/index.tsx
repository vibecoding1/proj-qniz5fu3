import Head from 'next/head';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <Head>
        <title>AIWebCraft - AI-Powered Web Development</title>
        <meta name="description" content="Revolutionary AI-powered web development" />
      </Head>

      <main className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-4">AIWebCraft</h1>
          <p className="text-xl opacity-90">Building the future of web development with AI</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 p-8 rounded-xl backdrop-blur-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Lightning Fast Development</h2>
            <p className="mb-4">Our AI-powered platform generates production-ready code in minutes, not weeks.</p>
            <div className="flex items-center">
              {[1,2,3,4,5].map((star) => (
                <FaStar key={star} className="text-yellow-400 text-2xl" />
              ))}
              <span className="ml-2">(4.9/5 from 500+ reviews)</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 p-8 rounded-xl backdrop-blur-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Enterprise-Grade Quality</h2>
            <p className="mb-4">Every line of code meets industry standards and best practices.</p>
            <div className="flex items-center">
              {[1,2,3,4,5].map((star) => (
                <FaStar key={star} className="text-yellow-400 text-2xl" />
              ))}
              <span className="ml-2">(4.8/5 from 300+ clients)</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center"
        >
          <button className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all">
            Start Your Project
          </button>
        </motion.div>
      </main>
    </div>
  );
}