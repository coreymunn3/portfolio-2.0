"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Hero3D from "./Hero3D";
import { ImageIcon } from "lucide-react";
import { GithubIcon } from "lucide-react";

export default function Hero() {
  // Proper mobile detection with React hooks to avoid hydration issues
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Milky Way Background Image - Used on both mobile and desktop */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/milky_way.jpg')",
          }}
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* photo credit */}
      <div className="absolute bottom-0 left-0 p-4 z-10 w-full flex items-center justify-center gap-2 text-gray-600 text-xs md:text-sm">
        <ImageIcon className="h-4 w-4 " />
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@freedomstudios?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Graham Holtshausen
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/milky-way-galaxy-wallpaper-fUnfEz3VLv4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </div>

      {/* 3D Constellation Animation - Desktop only, layered on top of the image */}
      {!isMobile && <Hero3D />}

      {/* Bottom Fade Gradient - Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black z-[5]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm md:text-base font-semibold tracking-wider text-secondary uppercase mb-4">
            Full Stack Developer
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Building the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-green-500 to-secondary animate-gradient-x">
              Future of Web
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
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
              href="#contact"
              className="px-8 py-4 rounded-full  bg-white text-black font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/coreymunn3"
              target="_blank"
              className="px-8 py-4 rounded-full bg-transparent text-white font-semibold border border-gray-200 transition-colors w-full sm:w-auto"
            >
              <div className="flex items-center space-x-2">
                <GithubIcon className="h-6 w-6" />
                <span>Check out my Github</span>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-15 z-5 left-1/2 transform -translate-x-1/2"
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
