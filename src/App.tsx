import { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section.snap-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
        <Navbar />
        <div className="h-[10vh]  bg-white"></div>
        <Hero />

        <About />

        <Project />

        <Skills />

        <Contact />

        <Footer />
      </div>
    </>
  );
}

export default App;
