import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 mt-12">
      <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Aman Chaurasia. All Rights Reserved.</p>
        <p className="mt-1">
          Built with 💙 using <span className="text-blue-400">React</span> & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
