const Footer = () => {
  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
        {/* Copyright */}
        <p className="text-gray-600 text-sm sm:text-base">
          © 2025 Rony Andrean. Built with React, Tailwind CSS, and Vite.
        </p>

        {/* Social Links */}
        <div className="flex justify-center sm:justify-end gap-5">
          <a
            href="https://github.com/ronyandrean"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-600 transition-colors"
          >
            <i className="fab fa-github text-xl sm:text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rony-andrean"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-600 transition-colors"
          >
            <i className="fab fa-linkedin text-xl sm:text-2xl"></i>
          </a>
          <a
            href="mailto:rony.andrean@binus.ac.id"
            className="text-gray-400 hover:text-purple-600 transition-colors"
          >
            <i className="fas fa-envelope text-xl sm:text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
