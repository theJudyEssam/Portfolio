'use client';

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-screen min-h-[90vh] overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-Blue1/80 via-Blue2/70 to-Blue3/60">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-20 left-20 w-72 h-72 bg-Blue3/40 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-Blue2/40 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-Blue1/40 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Block */}
          <motion.div 
            className="text-white space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-xl sm:text-2xl text-Blue3 font-medium">Welcome to my portfolio</h2>
              <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight">
                Hello, I'm <span className="text-Blue3 relative inline-block">
                  Judy!
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-Blue3"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p 
              className="text-lg sm:text-xl text-Blue3/90 font-medium max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Software Developer, Engineer, and Tech Enthusiast crafting innovative solutions for tomorrow's challenges.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button 
                className="px-8 py-3 bg-white text-Blue3 hover:bg-gray-100 transition-all duration-300 font-bold rounded-full shadow-md hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
              <motion.button 
                className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-Blue3 transition-all duration-300 font-bold rounded-full shadow-md hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                My Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div 
            className="relative h-[400px] hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-64 h-64 border-4 border-Blue3 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute w-48 h-48 border-4 border-Blue2 rounded-full"
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute w-32 h-32 border-4 border-Blue1 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [180, 360, 180],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute w-16 h-16 bg-Blue3 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
