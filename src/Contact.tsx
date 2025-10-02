const Contact = () => {

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 px-4 bg-white relative overflow-hidden"
    >
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#A9927D]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#A9927D]/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">
          Get In Touch
        </h2>

        <div className="bg-gradient-to-br from-white to-[#A9927D]/5 rounded-2xl shadow-2xl p-8 sm:p-12 border border-[#A9927D]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center justify-center gap-8">
              <p className="text-gray-600 text-center text-lg">
                Or connect with me directly:
              </p>
              <div className="flex gap-6">
                <a
                  href="mailto:rony.andrean@binus.ac.id"
                  className="w-14 h-14 bg-[#A9927D]/10 rounded-full flex items-center justify-center text-[#A9927D] hover:bg-[#A9927D] hover:text-white transition-all hover:scale-110"
                >
                  <i className="fas fa-envelope text-2xl"></i>
                </a>
                <a
                  href="https://github.com/ronyandrean"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#A9927D]/10 rounded-full flex items-center justify-center text-[#A9927D] hover:bg-[#A9927D] hover:text-white transition-all hover:scale-110"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/rony-andrean"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#A9927D]/10 rounded-full flex items-center justify-center text-[#A9927D] hover:bg-[#A9927D] hover:text-white transition-all hover:scale-110"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a
                  href="https://wa.me/082384977300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#A9927D]/10 rounded-full flex items-center justify-center text-[#A9927D] hover:bg-[#A9927D] hover:text-white transition-all hover:scale-110"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
