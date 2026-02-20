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
    
    // DEBUG: Verifica qué está pasando
    console.log("Theme selected:", selected);
    console.log("Final theme:", t);
    console.log("HTML classes before:", document.documentElement.className);
    
    document.documentElement.classList.toggle("dark", t === "dark");
    
    console.log("HTML classes after:", document.documentElement.className);
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
    <div className="relative" ref={menuRef}>
      <button
        aria-label="Elige el tema"
        className="appearance-none border-none flex items-center text-black dark:text-white hover:scale-125 transition"
        onClick={() => setMenuOpen(v => !v)}
        type="button"
      >
        <CurrentIcon className="w-5 h-5 transition-all" />
      </button>
      {menuOpen && (
        <div
          className="absolute z-[1001]
            md:top-0 md:left-full md:ml-4 
            bottom-full mb-4 md:bottom-auto left-1/2 -translate-x-1/2 md:translate-x-0
            min-w-[8rem] rounded-2xl border border-zinc-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 shadow-2xl backdrop-blur-md animate-scale-up p-2"
        >
          <ul>
            {THEMES.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="flex items-center gap-2 px-2 py-1.5 cursor-pointer text-black dark:text-white hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm transition"
                onClick={() => handleThemeChange(name)}
              >
                <Icon className="w-4 h-4" />
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
