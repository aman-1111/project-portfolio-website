import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  ShieldCheck,
  Brain,
  Database,
} from "lucide-react";

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

      {/* ================= HERO ================= */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-bold mb-4 text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
        >
          Hi, I'm Aman Chaurasia 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-300 mb-6"
        >
          Software Developer • Python Enthusiast • Cybersecurity Learner
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl text-gray-400 mb-8"
        >
          I turn ideas into secure, scalable, and high-quality digital solutions.
          My work spans full-stack development, machine learning, and ethical
          cybersecurity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full font-semibold text-lg shadow-lg shadow-blue-600/30"
          >
            View My Projects <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>

      {/* ================= WHAT I DO ================= */}
      <section className="relative z-10 py-24 px-6 bg-gray-900/60 backdrop-blur-md">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14 text-blue-400"
        >
          What I Do
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Code2 size={42} />,
              title: "Full Stack Development",
              desc: "Build responsive, scalable web apps using React, Flask, and modern APIs.",
            },
            {
              icon: <Brain size={42} />,
              title: "Machine Learning",
              desc: "Data analysis, model training, and performance optimization using Python.",
            },
            {
              icon: <ShieldCheck size={42} />,
              title: "Cybersecurity",
              desc: "Ethical hacking, secure systems, and vulnerability analysis.",
            },
            {
              icon: <Database size={42} />,
              title: "Data Analytics",
              desc: "Insightful dashboards and data-driven decisions using Pandas & Power BI.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-800/70 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition"
            >
              <div className="text-blue-400 mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="relative z-10 py-28 px-6 bg-gradient-to-b from-gray-900/60 to-gray-950">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I use to build modern, secure, and scalable
            applications.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {[
            { title: "Languages", items: ["Python", "JavaScript", "C#", "SQL"] },
            { title: "Frameworks", items: ["React", "Flask", "Tailwind CSS"] },
            { title: "Domains", items: ["Machine Learning", "Cybersecurity", "Data Analytics"] },
            { title: "Tools", items: ["Git & GitHub", "Linux", "VS Code"] },
          ].map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:shadow-blue-500/20 transition"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 text-sm bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative z-10 py-28 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto relative">

          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl"></div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-white/10 backdrop-blur-xl rounded-3xl p-12 text-center shadow-2xl"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Let’s Build Something{" "}
              <span className="text-blue-400">Impactful</span>
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              Open to full-time roles, internships, freelance work, and
              collaborations. Let’s create something meaningful together.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-full text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition shadow-lg shadow-blue-600/30"
                >
                  Contact Me
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/projects"
                  className="px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:bg-white/10 transition"
                >
                  View My Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </section>
  );
};

export default Home;
