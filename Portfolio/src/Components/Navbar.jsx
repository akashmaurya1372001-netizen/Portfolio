// components/Navbar.jsx
import { useState, useEffect } from "react";

 function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark])
  return(
  <nav className="hidden md:flex gap-6">
          {['Home','About','Skills','Projects','Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>)}
        export default Navbar 