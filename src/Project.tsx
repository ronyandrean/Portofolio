import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// LUXBID ASSESTS
import Luxbid1 from "./assets/Luxbid/Landing-page.png"
import Luxbid2 from "./assets/Luxbid/Profile.png"
import Luxbid3 from "./assets/Luxbid/History-Bidding.png"

// JROLL ASSESTS
import JRoll1 from "./assets/JRoll/Main.png"
import JRoll2 from "./assets/JRoll/Login.png"
import JRoll3 from "./assets/JRoll/Watch.png"

// Language ASSESTS
import Language1 from "./assets/Language/Home.png"
import Language2 from "./assets/Language/Guide.png"
import Language3 from "./assets/Language/Language.png"

// MBTI ASSESTS
import MBTI1 from "./assets/MBTI/Main.png"
import MBTI2 from "./assets/MBTI/Guide.png"

interface ProjectType {
  id: number;
  title: string;
  description: string;
  image?: string[];
  tech: string[];
  github: string;
  demo: string;
  video?: string;
  contributors?: string[];
  role?: string;
  year?: number;
}

const Project = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpProject, setPopUpProject] = useState<ProjectType | null>(null);

  const handleProjectClick = (project: ProjectType) => {
    setShowPopUp(true);
    setPopUpProject(project);
  };

  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Luxbid",
      description:
        " Blockchain-based Auction System – 3rd Place Winner, Hackathon ICP 2025",
      image: [
        Luxbid1,
        Luxbid2,
        Luxbid3,
      ],
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
      year: 2024,
    },
    {
      id: 2,
      title: "JRoll",
      description:
        "An anime and film streaming website enhanced with AI features for content recommendation and toxic comment moderation.",
      image: [
        JRoll1,
        JRoll2,
        JRoll3,
      ],
      tech: ["React", "Tailwind", "Firebase", "Flask"],
      github: " https://github.com/stynw7/jroll-ai ",
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
      image: [
        Language1,
        Language2,
        Language3,
      ],
      tech: ["React", "Tailwind", "Flask"],
      github: " https://github.com/ronyandrean/language-classification",
      demo: " https://bit.ly/language-classification-documentation",
      contributors: [
        "Rony Andrean",
        "Kenny Janson",
        "Syabita Salma Habibah"
      ],
      role: "Team Leader & Fullstack Developer",
      year: 2024,
    },
    {
      id: 4,
      title: "MBTI Classifier",
      description:
        "An empathetic AI web app that predicts a user's MBTI personality type based on free-form text, offering self reflection and emotional support.",
      image: [
        MBTI1,
        MBTI2,
      ],
      tech: ["React", "Tailwind", "Flask"],
      github: "https://github.com/ronyandrean/mbti-personality-type-identification",
      demo: "https://bit.ly/4kjt77y",
      contributors: [
        "Rony Andrean",
        "Kenny Janson",
        "Vellyn Angeline"
      ],
      role: "Team Leader & Fullstack Developer",
      year: 2024,
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 gradient-text">
          Projects
        </h2>

        {/* Grid Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg card-hover cursor-pointer hover:scale-[1.02] transition"
              onClick={() => handleProjectClick(project)}
            >
              <img
                src={
                  project.image && project.image.length > 0
                    ? project.image[0]
                    : ""
                }
                alt={project.title}
                className="w-full h-40 sm:h-48 md:h-56 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopUp && popUpProject && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-sm z-50 p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopUp(false)}
          >
            <motion.div
              className="bg-white w-full max-w-5xl mx-auto rounded-xl shadow-lg p-4 sm:p-6 md:p-8 relative flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowPopUp(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg"
              >
                ✕
              </button>

              {/* LEFT: Image Gallery (desktop) / Bottom (mobile) */}
              <div className="flex-1 md:max-w-[50%] order-2 md:order-1">
                <div className="max-h-[40vh] md:max-h-[70vh] overflow-y-auto space-y-4 pr-1 sm:pr-2 scroll-hidden scrollbar-hide">
                  {popUpProject.image?.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${popUpProject.title} - ${i + 1}`}
                      className="rounded-lg shadow-md w-full object-cover"
                    />
                  ))}
                </div>
              </div>

              {/* RIGHT: Project Info (desktop) / Top (mobile) */}
              <div className="flex-1 space-y-4 overflow-y-auto max-h-[40vh] md:max-h-[70vh] pr-1 sm:pr-2 scroll-hidden order-1 md:order-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
                  {popUpProject.title}{" "}
                  <span className="text-yellow-500">★</span>
                </h3>

                <div>
                  <h4 className="font-semibold text-gray-800">Description</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {popUpProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">Technologies</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {popUpProject.tech.join(", ")}
                  </p>
                </div>

                {popUpProject.contributors && (
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Contributors
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {popUpProject.contributors.join(", ")}
                    </p>
                  </div>
                )}

                {popUpProject.role && (
                  <div>
                    <h4 className="font-semibold text-gray-800">Role</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {popUpProject.role}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href={popUpProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition text-sm sm:text-base"
                  >
                    GitHub
                  </a>
                  <a
                    href={popUpProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 bg-[#A9927D] text-white rounded-lg hover:bg-[#a7805b] transition text-sm sm:text-base"
                  >
                    Live Demo
                  </a>
                </div>

                {popUpProject.year && (
                  <p className="text-right text-xs sm:text-sm text-gray-500 mt-6">
                    Finished in{" "}
                    <span className="font-bold text-gray-800">
                      {popUpProject.year}
                    </span>
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
