const Skills = () => {
  const technicalSkills = [
    { name: "React", icon: "fab fa-react" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "TypeScript", icon: "fas fa-code" },
    { name: "Tailwind CSS", icon: "fab fa-css3-alt" },
    { name: "Node.js", icon: "fab fa-node" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "Docker", icon: "fab fa-docker" },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: "fas fa-puzzle-piece" },
    { name: "Team Collaboration", icon: "fas fa-users" },
    { name: "Communication", icon: "fas fa-comments" },
    { name: "Leadership", icon: "fas fa-trophy" },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[#A9927D]/5 via-white to-[#A9927D]/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A9927D]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A9927D]/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text">Skills & Expertise</h2>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-gray-800">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={skill.name} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-[#A9927D]/10" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex flex-col items-center gap-3">
                  <i className={`${skill.icon} text-4xl text-[#A9927D]`}></i>
                  <span className="text-gray-700 font-medium text-center">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-gray-800">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill) => (
              <div key={skill.name} className="bg-white px-6 py-4 rounded-full shadow-md hover:shadow-xl transition-all hover:scale-105 border-2 border-[#A9927D]/20 flex items-center gap-3">
                <i className={`${skill.icon} text-xl text-[#A9927D]`}></i>
                <span className="text-gray-700 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
