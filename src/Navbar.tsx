import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Nama */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-left border-0 bg-transparent"
            aria-label="Go to home"
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-[#A9927D] tracking-wide hover:scale-105 transition-transform duration-300">
              Rony Andrean
            </h1>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group px-1 py-2 text-lg font-semibold text-gray-700 hover:text-[#A9927D] transition-all duration-300 hover:scale-105"
              >
                <span>{item.label}</span>
                {/* animated underline */}
                <span className="absolute left-0 -bottom-1 h-[3px] w-full origin-left scale-x-0 group-hover:scale-x-100 bg-[#A9927D] transition-transform duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <i
              className={`fas ${
                isMenuOpen ? "fa-times" : "fa-bars"
              } text-3xl`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-md border-t border-gray-100">
          <div className="px-6 py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 rounded-lg text-lg font-semibold text-gray-700 hover:bg-[#A9927D]/10 hover:text-[#A9927D] transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
