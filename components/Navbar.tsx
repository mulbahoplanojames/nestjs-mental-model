"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const links = ["Home", "Services", "About me", "Portfolio", "Contact me"];

  // Prevent hydration mismatch - only render conditional content after client mount
  /* eslint-disable */
  useEffect(() => {
    setMounted(true);
  }, []);
  /* eslint-enable */

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Mobile: Hamburger on the LEFT — hidden on lg */}
          <button
            className="lg:hidden text-white p-2 -ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>

          {/* Logo — centered on mobile, left on lg */}
          <a
            href="#"
            className="text-2xl font-black tracking-wider text-[#ff4400] uppercase absolute left-1/2 -translate-x-1/2 lg:static lg:left-auto lg:translate-x-0"
          >
            LOGO
          </a>

          {/* Desktop Nav — center */}
          <ul className="hidden lg:flex items-center gap-10">
            {links.map((link, i) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className={`text-sm font-medium transition-colors ${
                    i === 0
                      ? "text-[#ff6b35]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Hire Me — always visible on the RIGHT */}
          <a
            href="#contact-me"
            className="inline-flex items-center px-5 py-2 bg-[#ff6b35] hover:bg-[#e55a28] text-white text-sm font-bold rounded-md transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mounted && menuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-[#0a0a0a] border-t border-white/5 px-6 py-4 z-40">
          <ul className="flex flex-col gap-4">
            {links.map((link, i) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className={`block text-sm font-medium ${
                    i === 0 ? "text-[#ff6b35]" : "text-gray-300"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
