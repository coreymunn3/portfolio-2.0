"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-500/30 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-blue-500/20 rounded-full blur-[100px] animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm md:text-base font-semibold tracking-wider text-primary uppercase mb-4">
            Full Stack Developer
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Building the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary animate-gradient-x">
              Future of Web
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
            I craft beautiful, high-performance websites and applications that
            leave a lasting impression.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-gray-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
