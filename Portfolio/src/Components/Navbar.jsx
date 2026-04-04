import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin ,} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-3 
      backdrop-blur-xl bg-white/10 dark:bg-black/30 
      border border-white/10 rounded-full shadow-lg">

        {/* Logo */}
        
          
        
         <a href="#">
        <h1 className="text-zinc-900 font-bold font-mono">
          &lt;AKASH MAURYA/&gt;
         
        </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 font-semibold justify-center">
          {navItems.map((item) => (
            <a href={`#home`} key={"Home"}>
            <a
              key={item}
              href={ item === "Home" ? "#" : `#${item.toLowerCase()}`}
              className="relative group text-gray-300 hover:text-purple-400 transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-2px bg-purple-400 transition-all group-hover:w-full"></span>
            </a>
            </a>
          ))}

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
                  <a href="https://www.linkedin.com/in/akash-maurya-499416374/">
                    <FaLinkedin />
                  </a>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
         

          {/* Hamburger */}
          <button id="hamburger"
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-3 mx-4 p-4 rounded-xl 
            backdrop-blur-xl bg-black/40 border border-white/10"
          >
            <div className="flex flex-col gap-4 font-semibold text-center">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-400 transition"
                >
                  {item}
                </a>
              ))}

              <a
                href="https://github.com/akashmaurya1372001-netizen"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center text-xl hover:text-blue-400"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;