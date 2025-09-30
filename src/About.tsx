import TechBanner from "./TechBanner";

const About = () => {
  return (
    <section
      id="about"
      className="h-fit relative flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#A9927D]/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#A9927D]/5 rounded-full blur-2xl"></div>

      <div className="max-w-4xl lg:max-w-5xl mx-auto relative z-10 w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>

        <div className="bg-gradient-to-br from-white to-[#A9927D]/5 rounded-2xl shadow-2xl p-8 lg:p-12 border border-[#A9927D]/10">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <p className="text-gray-700 font-semibold text-lg leading-relaxed">
                Hello there! I'm Rony, a dedicated Full-Stack Developer. I began
                my coding life back in Riau and have been enjoying the ride ever
                since.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <p className="text-gray-700 font-semibold text-lg leading-relaxed">
                I believe functionality should come with flair. I love creating
                fun, user-centric designs that feel great to use. Reach out if
                you need a developer who can smoothly blend technical quality
                with creative design!
              </p>
            </div>

            <div className="flex items-start gap-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Experiences
              </h1>
            </div>

            <div className="flex flex-row items-start gap-4">
              <div className="flex-1">
                <h2 className="text-gray-700 font-semibold text-lg leading-relaxed">
                  Mentor Scholarship
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  BINUS University
                </p>
              </div>

              <div className="flex items-center justify-center pt-2 px-3">
                <h2>2024 - Present</h2>
              </div>
            </div>

            <div className="flex flex-row items-start gap-4">
              <div className="flex-1">
                <h2 className="text-gray-700 font-semibold text-lg leading-relaxed">
                  BINUS University
                </h2>
                <p className="text-gray-700 leading-relaxed">Undergraduate Students</p>
              </div>

              <div className="flex items-center justify-center pt-2 px-3">
                <h2>
                  2023 - Present
                </h2>
              </div>
            </div>

            <TechBanner/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
