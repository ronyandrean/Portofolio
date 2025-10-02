import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
          current = section.getAttribute("id") || "home";
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <h1 className="text-xl sm:text-2xl font-bold text-[#A9927D] tracking-tight">
            Rony Andrean
          </h1>

          <div className="hidden md:flex items-center space-x-10">
            {["home", "about", "projects"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium text-base relative transition-colors ${
                  activeSection === item ? "text-[#A9927D]" : "text-gray-700 hover:text-[#A9927D]"
                }`}
              >
                {item}
                <span className={`absolute left-0 -bottom-2 h-0.5 bg-[#A9927D] transition-all duration-300 ${activeSection === item ? "w-full" : "w-0"}`}></span>
              </button>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 focus:outline-none p-2">
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-100">
          <div className="px-6 py-4 space-y-1">
            {["home", "about", "projects"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item
                    ? "bg-[#A9927D]/10 text-[#A9927D]"
                    : "text-gray-700 hover:bg-[#A9927D]/5 hover:text-[#A9927D]"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;