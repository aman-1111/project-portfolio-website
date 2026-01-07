import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-400">Contact Me</h2>
        <p className="mb-10 text-gray-400">
          Have a project idea, collaboration, or question? Feel free to reach out!
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col gap-4 bg-gray-900 p-8 rounded-2xl shadow-lg"
        >
          {/* 👇👇 PUT YOUR ACCESS KEY HERE */}
          <input
            type="hidden"
            name="access_key"
            value="1e6357c2-32a4-4747-9437-14645f7a2f39"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition font-semibold py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
