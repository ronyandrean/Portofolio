const TechBanner = () => {
  const techLogos = [
    { name: "React", icon: "fab fa-react", color: "#61DAFB" },
    { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
    { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
    { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
    { name: "Python", icon: "fab fa-python", color: "#3776AB" },
    { name: "Docker", icon: "fab fa-docker", color: "#2496ED" },
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
              <i
                className={`${tech.icon} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
                style={{ color: tech.color }}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechBanner;
