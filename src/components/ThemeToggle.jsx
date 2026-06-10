'use client'
import { useEffect, useState, useRef } from "react";
import { Sun, Moon, PcCase } from "lucide-react";

const THEMES = [
  { name: "light", icon: Sun },
  { name: "dark", icon: Moon },
  { name: "system", icon: PcCase }
];

export default function ThemeToggle() {
  const [theme, setTheme] = useState("system");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Detecta y aplica el tema al cargar
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "system";
    setTheme(saved);
    applyTheme(saved);

    // Cierra el menú al hacer click fuera
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function applyTheme(selected) {
    let t = selected;
    if (t === "system") {
        t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    
    document.documentElement.classList.toggle("dark", t === "dark");
  } 

  function handleThemeChange(newTheme) {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (theme === "system") {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => applyTheme("system");
      mql.addEventListener("change", handler);
      return () => mql.removeEventListener("change", handler);
    }
  }, [theme]);

  const CurrentIcon = THEMES.find(t => t.name === theme)?.icon || Sun;

  return (
    <div className={`relative ${menuOpen ? 'menu-open' : ''}`} ref={menuRef}>
      <button
        aria-label="Elige el tema"
        className="appearance-none border-none flex items-center justify-center p-2.5 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-500/10 dark:hover:bg-emerald-400/10 transition-all duration-[400ms] cubic-bezier(0.175, 0.885, 0.32, 1.275) hover:scale-115 cursor-pointer bg-transparent"
        onClick={() => setMenuOpen(v => !v)}
        type="button"
      >
        <CurrentIcon className="w-5 h-5 transition-all" />
      </button>
      {menuOpen && (
        <div
          className="absolute z-[1001]
            md:top-0 md:left-full md:ml-3 
            bottom-12 mb-4 md:bottom-auto left-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-12
            w-[7.5rem] rounded-xl border border-zinc-200/80 bg-white/95 dark:bg-zinc-950/95 dark:border-zinc-800/80 shadow-2xl backdrop-blur-md animate-scale-up p-1 text-xs"
        >
          <ul>
            {THEMES.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="flex items-center gap-2 px-2 py-1 cursor-pointer text-zinc-600 dark:text-zinc-400 hover:bg-emerald-500/10 dark:hover:bg-emerald-400/10 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg transition-colors font-semibold"
                onClick={() => handleThemeChange(name)}
              >
                <Icon className="w-3.5 h-3.5" />
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      )}
      <style>{`
        .animate-scale-up {
          animation: scale-up-center 0.15s cubic-bezier(0.25,0.46,0.45,0.94) both;
        }
        @keyframes scale-up-center {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
