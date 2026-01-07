import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">About Me</h1>
      <p className="text-lg leading-relaxed text-gray-300">
        Hello 👋 I'm <span className="text-blue-400 font-semibold">Aman Chaurasia</span>,
        a passionate <span className="text-white font-semibold">Software Engineer</span> and 
        <span className="text-white font-semibold"> Computer Science student</span>.
        I love building clean, efficient, and creative web applications using modern technologies like 
        <span className="text-white font-semibold"> React, Python, .NET,</span> and 
        <span className="text-white font-semibold"> Machine Learning</span>.
      </p>

      <p className="text-lg leading-relaxed text-gray-300 mt-4">
        This portfolio showcases all of my projects — from small utilities to 
        full-featured applications. Each project represents my journey of growth, 
        learning, and passion for creating impactful software.
      </p>
    </div>
  );
};

export default About;
