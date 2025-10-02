import { motion } from "framer-motion";
import Rony from "./assets/rony.png";
import PDFfile from "./assets/CV.pdf";

const Hero = () => {
  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = PDFfile;
    link.download = "Rony_Andrean_CV.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="h-[90vh] relative flex justify-center items-center px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Decorative background blob */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-[#A9927D]/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#CBBBA0]/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="h-full w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 justify-center items-center relative z-10">
        {/* LEFT: Text */}
        <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-snug"
          >
            Hi! I'm{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="block text-[#A9927D]"
            >
              Rony Andrean
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-gray-700 text-base sm:text-lg max-w-lg"
          >
            I am a{" "}
            <span className="font-bold bg-[#A9927D]/20 px-2 py-0.5 rounded text-[#A9927D]">
              Full-Stack Developer
            </span>{" "}
            with a strong eye for design and a passion for delivering
            high-quality solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full"
          >
            <button
              onClick={downloadPdf}
              className="px-6 py-3 bg-[#A9927D] hover:bg-[#574529] text-white font-semibold rounded-lg shadow-md flex items-center gap-2 justify-center transition"
            >
              <i className="fas fa-download"></i>
              Download CV
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="flex gap-5 pt-4 text-2xl sm:text-3xl text-gray-700 justify-center md:justify-start"
          >
            <a
              href="https://github.com/ronyandrean"
              target="_blank"
              className="hover:text-[#A9927D] transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rony-andrean"
              target="_blank"
              className="hover:text-[#A9927D] transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/_ronyy.a"
              target="_blank"
              className="hover:text-[#A9927D] transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://wa.me/082384977300"
              target="_blank"
              className="hover:text-[#A9927D] transition"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative justify-center items-center md:justify-end hidden md:flex mb-20"
        >
          <img
            src={Rony}
            alt="Profile"
            className="md:w-120 lg:w-[40rem] xl:w-[50rem] object-cover mb-20 rounded-lg hover:scale-105 transition-transform duration-500"
          />
          {/* Floating decoration */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-6 -right-6 w-20 h-20 bg-[#A9927D]/20 rounded-full blur-xl"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
