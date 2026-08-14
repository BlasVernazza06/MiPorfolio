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
        className="flex items-center justify-center size-10 rounded-lg border border-transparent text-[oklch(0.45_0.025_42)] dark:text-[oklch(0.75_0.012_52)] hover:text-[oklch(0.65_0.18_40)] dark:hover:text-[oklch(0.72_0.17_44)] hover:bg-[oklch(0.65_0.18_40_/_0.06)] dark:hover:bg-[oklch(0.72_0.17_44_/_0.08)] hover:border-[oklch(0.65_0.18_40_/_0.15)] dark:hover:border-[oklch(0.72_0.17_44_/_0.2)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer bg-transparent"
        onClick={() => setMenuOpen(v => !v)}
        type="button"
      >
        <CurrentIcon className="w-[18px] h-[18px] transition-all" />
      </button>
      {menuOpen && (
        <div
          className="absolute z-[1001]
            md:top-0 md:left-full md:ml-3 
            bottom-12 mb-4 md:bottom-auto left-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-12
            w-[7.5rem] rounded-xl border border-[oklch(0.88_0.025_52)] dark:border-[oklch(0.22_0.020_38)] bg-[oklch(1_0.003_58_/_0.95)] dark:bg-[oklch(0.14_0.014_38_/_0.95)] shadow-2xl backdrop-blur-md animate-scale-up p-1 text-xs"
        >
          <ul>
            {THEMES.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="flex items-center gap-2 px-2 py-1.5 cursor-pointer text-[oklch(0.45_0.025_42)] dark:text-[oklch(0.75_0.012_52)] hover:bg-[oklch(0.72_0.17_44_/_0.1)] hover:text-[oklch(0.65_0.18_40)] dark:hover:text-[oklch(0.72_0.17_44)] rounded-lg transition-colors font-semibold"
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
