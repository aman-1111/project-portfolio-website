import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-8 text-blue-400"
        >
          About Me
        </motion.h1>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg leading-relaxed text-gray-300"
        >
          Hello 👋 I'm{" "}
          <span className="text-blue-400 font-semibold">
            Aman Chaurasia
          </span>
          , a passionate{" "}
          <span className="text-white font-semibold">
            Software Engineer
          </span>{" "}
          and{" "}
          <span className="text-white font-semibold">
            Computer Science student
          </span>
          . I love building clean, efficient, and creative web applications
          using modern technologies like{" "}
          <span className="text-white font-semibold">
            React, Python, .NET
          </span>
          , and{" "}
          <span className="text-white font-semibold">
            Machine Learning
          </span>
          .
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg leading-relaxed text-gray-300 mt-6"
        >
          This portfolio showcases all of my projects — from small utilities to
          full-featured applications. Each project represents my journey of
          growth, continuous learning, and passion for creating impactful
          software solutions.
        </motion.p>

      </div>
    </section>
  );
};

export default About;
