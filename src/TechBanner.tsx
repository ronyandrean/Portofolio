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
    <div className="py-8 sm:py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="relative">
        {/* Scrolling wrapper */}
        <div className="flex animate-scroll">
          {[...techLogos, ...techLogos].map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-4 sm:mx-6 md:mx-8"
            >
              <Icon
                icon={tech.icon}
                color={tech.color}
                width="50"
                height="50"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechBanner;
