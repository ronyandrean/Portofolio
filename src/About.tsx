import { motion } from "framer-motion";
import TechBanner from "./TechBanner";
import Rony1 from "./assets/Rony1.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white via-[#F9F6F3] to-[#F3EEE9] relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#A9927D]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#CBBBA0]/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16 gradient-text"
        >
          About Me
        </motion.h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center order-1"
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-[#A9927D]/30 hover:border-[#A9927D]/60 transition-all hover:scale-105">
              <img
                src={Rony1}
                alt="Rony Andrean"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Deskripsi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left order-2 px-2"
          >
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
              Hello there! I'm{" "}
              <span className="font-bold text-[#A9927D]">Rony</span>, a
              passionate{" "}
              <span className="font-bold">Full-Stack Developer</span> with a
              strong eye for design. I started coding back in Riau and have been
              enjoying every line of code since then.
            </p>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              I believe functionality should come with{" "}
              <span className="italic">flair</span>. My goal is to craft
              user-centric experiences that are both
              <span className="font-bold text-[#A9927D]"> practical </span>
              and{" "}
              <span className="font-bold text-[#A9927D]">beautiful</span>.
            </p>
          </motion.div>
        </div>

        {/* Experiences */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 w-full max-w-5xl mx-auto px-2 sm:px-4"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
            Experiences
          </h3>
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 border border-[#A9927D]/20">
            <div className="space-y-6 border-l-2 border-[#A9927D]/40 pl-6">
              {[
                {
                  role: "Freshmen Leader",
                  year: "2025 - Present",
                  place: "BINUS University",
                },
                {
                  role: "Mentor Scholarship",
                  year: "2024 - Present",
                  place: "BINUS University",
                },
                {
                  role: "Undergraduate Student",
                  year: "2023 - Present",
                  place: "BINUS University",
                },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  className="transition-transform"
                >
                  <h4 className="font-semibold text-lg lg:text-xl text-gray-800">
                    {exp.role}{" "}
                    <span className="text-sm text-gray-500 block sm:inline">
                      {exp.year}
                    </span>
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base mt-1">
                    {exp.place}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <TechBanner />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
