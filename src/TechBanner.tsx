import { Icon } from "@iconify/react";

const TechBanner = () => {
  const techLogos = [
    { name: "React", icon: "fa6-brands:react", color: "#61DAFB" },
    { name: "JavaScript", icon: "fa6-brands:js", color: "#F7DF1E" },
    { name: "TypeScript", icon: "logos:typescript-icon", color: "#3178C6" },
    { name: "Python", icon: "fa6-brands:python", color: "#3776AB" },
    { name: "Java", icon: "logos:java", color: "#007396" },
    { name: "C", icon: "devicon:c", color: "#A8B9CC" },
    { name: "HTML5", icon: "fa6-brands:html5", color: "#E34F26" },
    { name: "CSS3", icon: "fa6-brands:css3-alt", color: "#1572B6" },
    { name: "Node.js", icon: "fa6-brands:node", color: "#339933" },
    { name: "Flask", icon: "simple-icons:flask", color: "#000000" },
    { name: "TailwindCSS", icon: "simple-icons:tailwindcss", color: "#38B2AC" },
    { name: "Bootstrap", icon: "fa6-brands:bootstrap", color: "#7952B3" },
    { name: "MySQL", icon: "simple-icons:mysql", color: "#4479A1" },
    { name: "Firebase", icon: "simple-icons:firebase", color: "#FFCA28" },
    { name: "Git", icon: "fa6-brands:git-alt", color: "#F05032" },
    { name: "Figma", icon: "fa6-brands:figma", color: "#F24E1E" },
    { name: "Postman", icon: "simple-icons:postman", color: "#FF6C37" },
    { name: "Notion", icon: "simple-icons:notion", color: "#000000" },
    { name: "Trello", icon: "fa6-brands:trello", color: "#0079BF" },
    { name: "Canva", icon: "simple-icons:canva", color: "#00C4CC" },
    { name: "VS Code", icon: "simple-icons:visualstudiocode", color: "#007ACC" },
    { name: "Motoko", icon: "simple-icons:internetcomputer", color: "#FF6F00" },
    { name: "Vite", icon: "simple-icons:vite", color: "#646CFF" },
  ];

  return (
    <div className="py-8 sm:py-10 lg:py-12 bg-gradient-to-r from-white via-[#A9927D]/5 to-white border-y border-[#A9927D]/10 overflow-hidden">      
      <div className="relative">
        {/* Gradient overlays untuk fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling wrapper */}
        <div className="flex animate-scroll">
          {[...techLogos, ...techLogos].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-3 sm:mx-5 md:mx-8 min-w-[80px] sm:min-w-[100px] group"
            >
              <div className="transition-transform hover:scale-125 hover:-translate-y-2">
                <Icon
                  icon={tech.icon}
                  color={tech.color}
                  width="40"
                  height="40"
                  className="sm:w-12 sm:h-12 md:w-14 md:h-14"
                />
              </div>
              <span className="text-xs sm:text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechBanner;