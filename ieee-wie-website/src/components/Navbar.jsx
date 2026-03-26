import logo from "../assets/wie-logo.png"
import collegeLogo from "../assets/clg-logo.png"
import ieeeLogo from "../assets/ieee-logo.png"
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center px-8 py-4 bg-[#672b85] backdrop-blur-md text-white sticky top-0 z-50 shadow-md">

      {/* Logos + Title */}
      <div className="flex items-center gap-3">
        <img
          src={collegeLogo}
          alt="College Logo"
          className="h-15 w-14 object-contain"
        />
        <span className="h-10 border-l border-white" />
        <img
          src={logo}
          alt="IEEE WIE Logo"
          className="h-10 w-10 object-contain"
        />

        <h1 className="text-2xl font-bold">
          IEEE WIE
        </h1>

      </div>

      {/* Right-side icons */}
      <div className="flex items-center gap-3">
        <img
          src={ieeeLogo}
          alt="IEEE Logo"
          className="h-15 w-14 object-contain"
        />
        {/* Navigation popup trigger */}
        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Popup menu */}
      {menuOpen && (
        <div className="absolute right-8 top-full mt-2 w-48 bg-white text-black rounded shadow-lg p-4">
          <ul className="flex flex-col gap-2">
            <li><a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-[#672b85] transition-colors duration-300 font-medium">Home</a></li>
            <li><a href="#team" onClick={() => setMenuOpen(false)} className="hover:text-[#672b85] transition-colors duration-300 font-medium">Team</a></li>
            <li><a href="#events" onClick={() => setMenuOpen(false)} className="hover:text-[#672b85] transition-colors duration-300 font-medium">Events</a></li>
            <li><a href="#achievements" onClick={() => setMenuOpen(false)} className="hover:text-[#672b85] transition-colors duration-300 font-medium">Achievements</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#672b85] transition-colors duration-300 font-medium">Contact</a></li>
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar