import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, ShieldCheck, Brain, Database } from "lucide-react";

const Home = () => {
  return (
    <section className="relative bg-gray-950 text-white overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      >
        <source src="/videos/developer-scene.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-950/95"></div>

      {/* 🔹 Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-6 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
          Hi, I'm Aman Chaurasia 👋
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl sm:text-2xl text-gray-300 mb-6"
        >
          Software Developer • Python Enthusiast • Cybersecurity Learner
        </motion.p>
        <p className="max-w-2xl text-gray-400 mb-8">
          I love turning ideas into reality through clean, efficient, and
          secure code. My work focuses on crafting full-stack apps, building
          machine learning models, and exploring ethical hacking tools that
          strengthen systems.
        </p>

        <Link
          to="/projects"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full font-semibold text-lg"
        >
          View My Projects <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>

      {/* 🔹 What I Do Section */}
      <section className="relative z-10 py-20 px-6 bg-gray-900/60 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          What I Do
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Code2 size={40} />,
              title: "Full Stack Development",
              desc: "I build dynamic and responsive web apps using React, Node.js, and Flask.",
            },
            {
              icon: <Brain size={40} />,
              title: "Machine Learning",
              desc: "I work with data analysis, model training, and performance optimization using Python.",
            },
            {
              icon: <ShieldCheck size={40} />,
              title: "Cybersecurity",
              desc: "I explore ethical hacking, network security, and secure application design.",
            },
            {
              icon: <Database size={40} />,
              title: "Data Analytics",
              desc: "I visualize insights and trends using Pandas, Matplotlib, and Power BI.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/70 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition"
            >
              <div className="text-blue-400 mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Tech Stack Section */}
      <section className="relative z-10 py-20 px-6 text-center bg-gray-950">
        <h2 className="text-4xl font-bold text-blue-400 mb-12">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-300">
          {[
            "Python",
            "React",
            "C#",
            "JavaScript",
            "Tailwind CSS",
            "Flask",
            "SQL",
            "Git & GitHub",
            "Machine Learning",
            "Cybersecurity",
            "Linux",
            "VS Code"
          ].map((tech, i) => (
            <span
              key={i}
              className="px-5 py-2 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 🔹 Call to Action Section */}
      <section className="relative z-10 py-20 text-center bg-gradient-to-r from-blue-700/30 to-purple-700/30">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Want to collaborate or hire me?
        </h2>
        <p className="text-gray-300 mb-8">
          Let’s build something impactful together.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition"
        >
          Contact Me
        </Link>
      </section>
    </section>
  );
};

export default Home;
