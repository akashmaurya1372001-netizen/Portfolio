import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="fixed top-0 w-full backdrop-blur bg-white/70 dark:bg-slate-900/80 border-b z-50">
      <div className="max-w-7xl mx-auto flex justify-between p-4">
        <h1 className="text-purple-400 font-bold">&lt;Akash /&gt;</h1>

        <nav className="hidden md:flex gap-6">
          {['Home','About','Skills','Projects','Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>

        <div className="flex gap-3">
          <button onClick={() => setDark(!dark)}>
            {dark ? "☀️" : "🌙"}
          </button>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 p-4">
          {['Home','About','Skills','Projects','Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={()=>setMenuOpen(false)}>{item}</a>
          ))}
        </div>
      )}
    </header>
  );
}
        export default Navbar 