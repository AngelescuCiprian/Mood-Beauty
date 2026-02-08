import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-stone-100/90 backdrop-blur-md shadow-sm"
          : "bg-stone-100/80 backdrop-blur-sm"
      }`}
      style={{
        borderBottom: isScrolled ? "1px solid var(--border-light)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex-1 flex justify-start cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="hero-medium text-gold font-serif">MOOD</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex items-center gap-10">
              <li>
                <button
                  onClick={() => scrollToSection("echipa")}
                  className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--gold-primary)] transition-colors duration-300 font-sans tracking-wide uppercase"
                >
                  Echipa
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("galerie")}
                  className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--gold-primary)] transition-colors duration-300 font-sans tracking-wide uppercase"
                >
                  Galerie
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--gold-primary)] transition-colors duration-300 font-sans tracking-wide uppercase"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Right Side Spacer for Balance */}
          <div className="hidden md:flex flex-1 justify-end"></div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[var(--text-primary)] hover:text-[var(--gold-primary)] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--border-light)]">
          <ul className="flex flex-col py-4">
            <li>
              <button
                onClick={() => scrollToSection("echipa")}
                className="w-full text-left px-6 py-3 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--gold-primary)] transition-colors font-sans tracking-wide uppercase"
              >
                Echipa
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("galerie")}
                className="w-full text-left px-6 py-3 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--gold-primary)] transition-colors font-sans tracking-wide uppercase"
              >
                Galerie
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full text-left px-6 py-3 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--gold-primary)] transition-colors font-sans tracking-wide uppercase"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
