import React, { useState, useEffect, useRef } from 'react';
import { Search, Command, Home, Briefcase, Code, User, Award, ExternalLink } from 'lucide-react';

const LABELS = {
  es: {
    placeholder: "¿A dónde quieres ir? (Presiona Esc para salir)",
    noResults: 'No se encontraron resultados para "{query}"',
    navigate: "Navegar",
    select: "Seleccionar",
    actions: {
      inicio: "Ir a Inicio",
      proyectos: "Ver Proyectos",
      skills: "Habilidades Técnicas",
      sobreMi: "Sobre mí",
      certificados: "Certificaciones",
      github: "Visitar GitHub",
    }
  },
  en: {
    placeholder: "Where do you want to go? (Press Esc to exit)",
    noResults: 'No results found for "{query}"',
    navigate: "Navigate",
    select: "Select",
    actions: {
      inicio: "Go to Home",
      proyectos: "View Projects",
      skills: "Technical Skills",
      sobreMi: "About me",
      certificados: "Certifications",
      github: "Visit GitHub",
    }
  }
};

export default function CommandPalette({ lang = "es" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const t = LABELS[lang] || LABELS.es;
  const prefix = lang === 'en' ? '/en' : '';

  const ACTIONS = [
    { id: 'inicio', title: t.actions.inicio, icon: Home, url: `${prefix}#Inicio` },
    { id: 'proyectos', title: t.actions.proyectos, icon: Code, url: `${prefix}#Proyects` },
    { id: 'skills', title: t.actions.skills, icon: Briefcase, url: `${prefix}#Skills` },
    { id: 'sobre-mi', title: t.actions.sobreMi, icon: User, url: `${prefix}#Sobre-mi` },
    { id: 'certificados', title: t.actions.certificados, icon: Award, url: `${prefix}#Certificados` },
    { id: 'github', title: t.actions.github, icon: ExternalLink, url: 'https://github.com/BlasVernazza06', external: true },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };

    const handleToggleEvent = () => {
      setIsOpen(prev => !prev);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('toggle-command-palette', handleToggleEvent);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('toggle-command-palette', handleToggleEvent);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 10);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isOpen]);

  const filteredActions = ACTIONS.filter(action =>
    action.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (action) => {
    if (action.external) {
      window.open(action.url, '_blank');
    } else {
      window.location.href = action.url;
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-[15vh] px-4">
      <div 
        className="absolute inset-0 bg-zinc-950/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      <div className="relative w-full max-w-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center px-4 py-3 border-b border-zinc-100 dark:border-zinc-800">
          <Search className="size-5 text-zinc-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder={t.placeholder}
            className="flex-1 bg-transparent border-none outline-none text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 text-sm"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % filteredActions.length);
              } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filteredActions.length) % filteredActions.length);
              } else if (e.key === 'Enter' && filteredActions[selectedIndex]) {
                handleSelect(filteredActions[selectedIndex]);
              }
            }}
          />
          <div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
            <Command className="size-3 text-zinc-500" />
            <span className="text-[10px] font-bold text-zinc-500">K</span>
          </div>
        </div>

        <div class="max-h-[300px] overflow-y-auto p-2">
          {filteredActions.length > 0 ? (
            filteredActions.map((action, idx) => (
              <button
                key={action.id}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-left ${
                  idx === selectedIndex 
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                }`}
                onClick={() => handleSelect(action)}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className={`p-2 rounded-lg ${idx === selectedIndex ? 'bg-emerald-500/20' : 'bg-zinc-100 dark:bg-zinc-800'}`}>
                  <action.icon className="size-4" />
                </div>
                <span className="flex-1 font-medium text-sm">{action.title}</span>
                {idx === selectedIndex && (
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Enter</span>
                )}
              </button>
            ))
          ) : (
            <div className="py-12 text-center">
              <p className="text-zinc-500 text-sm">{t.noResults.replace('{query}', query)}</p>
            </div>
          )}
        </div>

        <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5 grayscale opacity-50">
              <span className="text-[10px] font-bold px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded">↓↑</span>
              <span class="text-[10px] text-zinc-500">{t.navigate}</span>
            </div>
            <div className="flex items-center gap-1.5 grayscale opacity-50">
              <span className="text-[10px] font-bold px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded">↵</span>
              <span class="text-[10px] text-zinc-500">{t.select}</span>
            </div>
          </div>
          <span className="text-[10px] text-zinc-400 font-medium">Blas Portfolio v2.0</span>
        </div>
      </div>
    </div>
  );
}
