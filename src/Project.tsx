import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// LUXBID ASSETS
import Luxbid1 from "./assets/Luxbid/Landing-page.png";
import Luxbid2 from "./assets/Luxbid/Profile.png";
import Luxbid3 from "./assets/Luxbid/History-Bidding.png";
import Luxbid4 from "./assets/Luxbid/Colleciton.png";
import Luxbid5 from "./assets/Luxbid/How-it-works.png";
import Luxbid6 from "./assets/Luxbid/Login.png";
import Luxbid7 from "./assets/Luxbid/Landing-page-3.png";
import Luxbid8 from "./assets/Luxbid/History-Seller.png";

// JROLL ASSETS
import JRoll1 from "./assets/JRoll/Main.png";
import JRoll2 from "./assets/JRoll/Main1.png";
import JRoll3 from "./assets/JRoll/Main2.png";
import JRoll4 from "./assets/JRoll/Main3.png";
import JRoll5 from "./assets/JRoll/Login.png";
import JRoll6 from "./assets/JRoll/List.png";
import JRoll7 from "./assets/JRoll/FAQ.png";
import JRoll8 from "./assets/JRoll/Watch.png";

// Language ASSETS
import Language1 from "./assets/Language/Home.png";
import Language2 from "./assets/Language/Guide.png";
import Language3 from "./assets/Language/Language.png";

// MBTI ASSETS
import MBTI1 from "./assets/MBTI/Main.png";
import MBTI2 from "./assets/MBTI/Guide.png";
interface ProjectType {
  id: number;
  title: string;
  description: string;
  image?: string[];
  tech: string[];
  github: string;
  demo: string;
  contributors?: string[];
  role?: string;
  year?: number;
}

const Project = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpProject, setPopUpProject] = useState<ProjectType | null>(null);
  const [currentImg, setCurrentImg] = useState(0);

  const handleProjectClick = (project: ProjectType) => {
    setShowPopUp(true);
    setPopUpProject(project);
    setCurrentImg(0);
  };

  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Luxbid",
      description:
        "Blockchain-based Auction System – 3rd Place Winner, Hackathon ICP 2025",
      image: [Luxbid1, Luxbid2, Luxbid3, Luxbid4, Luxbid5, Luxbid6, Luxbid7, Luxbid8],
      tech: ["Motoko", "React", "Tailwind"],
      github: "https://github.com/ronyandrean/luxbid",
      demo: "https://zagp4-4aaaa-aaaah-qqcaq-cai.icp0.io",
      contributors: [
        "Rony Andrean",
        "Juan Ariviano Chandra",
        "Austin Oswald Tjokrohandoko",
        "Nathanael Wilson Angelo",
        "Vanessa Maurencia Karyanto",
      ],
      role: "Team Leader & Fullstack Developer",
      year: 2025,
    },
    {
      id: 2,
      title: "JRoll",
      description:
        "An anime and film streaming website enhanced with AI features for content recommendation and toxic comment moderation.",
      image: [JRoll1, JRoll2, JRoll3, JRoll4, JRoll5, JRoll6, JRoll7, JRoll8],
      tech: ["React", "Tailwind", "Firebase", "Flask"],
      github: "https://github.com/stynw7/jroll-ai",
      demo: "https://jroll-frontend.vercel.app",
      contributors: [
        "Rony Andrean",
        "Stanley Nathanael Wijaya",
        "Steve Febryanto Tan",
        "Valentino Febrian Kencono",
        "Nickson Leviel Hermawan",
      ],
      role: "AI Engineering",
      year: 2025,
    },
    {
      id: 3,
      title: "Language Classifier",
      description:
        "An AI-based web tool that accurately classifies text input into 22 different languages using a fine-tuned language model.",
      image: [Language1, Language2, Language3],
      tech: ["React", "Tailwind", "Flask"],
      github: "https://github.com/ronyandrean/language-classification",
      demo: "https://bit.ly/language-classification-documentation",
      contributors: ["Rony Andrean", "Kenny Janson", "Syabita Salma Habibah"],
      role: "Team Leader & Fullstack Developer",
      year: 2024,
    },
    {
      id: 4,
      title: "MBTI Classifier",
      description:
        "An empathetic AI web app that predicts a user's MBTI personality type based on free-form text, offering self reflection and emotional support.",
      image: [MBTI1, MBTI2],
      tech: ["React", "Tailwind", "Flask"],
      github:
        "https://github.com/ronyandrean/mbti-personality-type-identification",
      demo: "https://bit.ly/4kjt77y",
      contributors: ["Rony Andrean", "Kenny Janson", "Vellyn Angeline"],
      role: "Team Leader & Fullstack Developer",
      year: 2024,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-white via-[#F9F6F3] to-[#F3EEE9] relative overflow-hidden"
    >
      {/* Background dekoratif */}
      <div className="absolute top-16 right-20 w-72 h-72 bg-[#A9927D]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-16 left-20 w-96 h-96 bg-[#A9927D]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Explore my recent work in web development, AI, and blockchain.
          </p>
        </motion.div>

        {/* Grid Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 border border-[#A9927D]/20"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image?.[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.year && (
                  <div className="absolute top-3 right-3 bg-[#A9927D] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.year}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#A9927D]">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-[#A9927D]/10 text-[#A9927D] rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopUp && popUpProject && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black/70 backdrop-blur-sm z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopUp(false)}
          >
            <motion.div
              className="bg-white w-full max-w-6xl mx-auto rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, type: "spring" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPopUp(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all shadow-lg hover:scale-110"
              >
                <i className="fas fa-times text-xl"></i>
              </button>

              {/* LEFT: Image Gallery */}
              <div className="flex-1 bg-gray-50 p-6 md:p-8 overflow-y-auto scrollbar-hide">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i className="fas fa-images text-[#A9927D]"></i>
                  Project Gallery
                </h3>
                <div className="space-y-4">
                  {popUpProject.image?.map((img, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200"
                    >
                      <img
                        src={img}
                        alt={`${popUpProject.title} - Screenshot ${i + 1}`}
                        className="w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Project Info */}
              <div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6">
                {/* Header */}
                <div className="border-b border-gray-200 pb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {popUpProject.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {popUpProject.year && (
                      <span className="flex items-center gap-2 font-bold text-[#746353] text-lg">
                        <i className="fas fa-calendar-alt"></i>
                        {popUpProject.year}
                      </span>
                    )}
                    {popUpProject.role && (
                      <span className="flex items-center gap-2 font-bold text-[#746353] text-lg">
                        <i className="fas fa-user-tie"></i>
                        {popUpProject.role}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-bold text-[#A9927D] mb-2 flex items-center gap-2">
                    <i className="fas fa-info-circle"></i>
                    About
                  </h4>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {popUpProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-bold text-[#A9927D] mb-3 flex items-center gap-2">
                    <i className="fas fa-code"></i>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {popUpProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-sm bg-gradient-to-r from-[#A9927D]/10 to-[#A9927D]/5 border border-[#A9927D]/20 rounded-lg text-gray-800 font-medium hover:shadow-md transition-shadow"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contributors */}
                {popUpProject.contributors && (
                  <div>
                    <h4 className="font-bold text-[#A9927D] mb-3 flex items-center gap-2">
                      <i className="fas fa-users"></i>
                      Team Members
                    </h4>
                    <ul className="space-y-2">
                      {popUpProject.contributors.map((c, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-700 text-sm sm:text-base"
                        >
                          <span className="w-2 h-2 bg-[#A9927D] rounded-full"></span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200">
                  <a
                    href={popUpProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-all font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <i className="fab fa-github text-lg"></i>
                    View Code
                  </a>
                  <a
                    href={popUpProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 bg-[#A9927D] text-white rounded-xl hover:bg-[#8f7156]  transition-all font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
