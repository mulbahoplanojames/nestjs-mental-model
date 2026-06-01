import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const navLinks = ["Home", "Services", "About me", "Portfolio", "Contact me"];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <p className="text-2xl font-black tracking-widest text-[#ff6b35] uppercase">
            LOGO
          </p>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-10">
          {[FaInstagram, FaFacebook, FaLinkedinIn, FaBehance].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#ff6b35] hover:border-[#ff6b35] transition-all text-sm"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 text-sm text-gray-400">
          <a
            href="mailto:MahmoodFazile7900@gmail.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <MdEmail className="text-[#ff6b35]" />
            MahmoodFazile7900@gmail.com
          </a>
          <span className="hidden sm:block text-white/20">|</span>
          <a
            href="tel:+92729157005"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <MdPhone className="text-[#ff6b35]" />
            +92 729 157 005
          </a>
        </div>

        {/* Bottom */}
        <p className="text-center text-gray-600 text-xs">
          Designed by @mahmoodfazile · All rights reserved
        </p>
      </div>
    </footer>
  );
}
