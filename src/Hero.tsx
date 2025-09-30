const Hero = () => {
  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = "./src/assets/CV.pdf";
    link.download = "Rony_Andrean_CV.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="h-[75vh] relative flex justify-center items-center  px-6 md:px-12 lg:px-20 bg-white"
    >
      <div className="h-full w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 justify-center items-center">
        {/* LEFT: Text */}
        <div className="space-y-6 animate-fadeInUp text-center md:text-left flex flex-col items-center md:items-start justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Hi! I'm{" "}
            <span className="block text-[#A9927D]">Rony Andrean</span>
          </h1>

          <p className="text-gray-700 text-base sm:text-lg max-w-lg">
            I am a{" "}
            <span className="font-bold bg-[#A9927D]/20 px-1 rounded text-[#A9927D]">
              Full - Stack Developer
            </span>{" "}
            with a strong eye for design and a passion for delivering high-quality solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full">
            <button
              onClick={downloadPdf}
              className="px-6 py-3 bg-[#A9927D] hover:bg-[#8a7d68] text-white font-semibold rounded-lg shadow-md flex items-center gap-2 justify-center transition"
            >
              <i className="fas fa-download"></i>
              Download CV
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2 px-2 text-3xl text-gray-700 justify-center md:justify-start">
            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-[#A9927D] text-black"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-[#A9927D] text-black"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-[#A9927D] text-black"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* RIGHT: Image (hidden on mobile) */}
        <div className="relative justify-center w-2xl bottom-25 items-center md:justify-end hidden md:flex">
          <img
            src="./assets/rony.png"
            alt="Profile"
            className="md:w-150 lg:w-156 xl:w-[60rem] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
