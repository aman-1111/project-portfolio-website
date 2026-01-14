import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 mt-24 overflow-hidden">

      {/* Glow background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-purple-600/10 to-transparent blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-3 items-start"
        >

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Aman<span className="text-blue-400">Portfolio</span>
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Software Developer focused on building secure, scalable, and
              impactful digital solutions using modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: "Home", path: "/" },
                { name: "Projects", path: "/projects" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-1 hover:text-blue-400 transition"
                  >
                    {link.name}
                    <ArrowUpRight size={14} />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social / Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">
              Let’s Connect
            </h4>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://github.com/aman-1111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/80 hover:bg-gray-700 transition"
              >
                <Github size={18} />
                GitHub
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://www.linkedin.com/in/amanchaurasia07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
              >
                <Linkedin size={18} />
                LinkedIn
              </motion.a>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
                >
                  <Mail size={18} />
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2026 Aman Chaurasia. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built with <span className="text-blue-400">React</span> &{" "}
            <span className="text-blue-400">Tailwind CSS</span>
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
