import { useEffect, useState } from "react";
import { Menu, X } from "./Icons";
import { navItems } from "../data/portfolio-data";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-slate-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleClick("about")}
          className="font-semibold text-slate-900 tracking-tight text-lg flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white text-xs font-bold">
            SS
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeSection === item.id
                  ? "text-slate-900 bg-slate-100"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200/60">
          <div className="px-6 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-slate-900 bg-slate-100"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
