import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-24 bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6 text-blue-400"
        >
          Contact Me
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12 text-gray-400 text-lg"
        >
          Have a project idea, collaboration, or question? Feel free to reach out.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col gap-5 bg-gray-900/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/10"
        >
          {/* 🔐 Web3Forms Access Key */}
          <input
            type="hidden"
            name="access_key"
            value="1e6357c2-32a4-4747-9437-14645f7a2f39"
          />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="p-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          ></textarea>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition font-semibold py-4 rounded-xl shadow-lg shadow-blue-600/30 text-lg"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
