import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thanks for reaching out! Your message has been received.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 max-w-xl mx-auto"
    >
      <div className="mb-5">
        <label className="block text-left mb-2 text-gray-300">Your Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-5">
        <label className="block text-left mb-2 text-gray-300">Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-5">
        <label className="block text-left mb-2 text-gray-300">Message</label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-200 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-2 rounded-lg text-white font-semibold"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
