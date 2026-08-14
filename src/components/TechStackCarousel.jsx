import React, { useState } from "react";

export default function TechStackCards({ skills }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((tech, index) => (
          <div
            key={index}
            className="skill-card p-6 md:p-8 rounded-xl border transition-all duration-500 hover:shadow-lg"
          >
            {/* Cabecera de la Card */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-current/10">
              <h3 className="text-xl font-extrabold tracking-tight font-syne skill-title transition-colors duration-300">
                {tech.title}
              </h3>
              <span className="text-[9px] font-black uppercase tracking-[0.25em] opacity-45">
                Stack
              </span>
            </div>

            {/* Grid de Tecnologías (Sólido, visible y responsive) */}
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3.5">
              {tech.technologies.map((t, idx) => (
                <div
                  key={idx}
                  className="group/item relative flex flex-col items-center justify-center p-3 rounded-lg border tech-icon-box transition-all duration-300 hover:-translate-y-0.5"
                >
                  <img
                    src={t.imagen}
                    alt={t.nombre}
                    className="size-8 md:size-9 object-contain transition-all duration-300 group-hover/item:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Tooltip flotante premium al hover del item */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none scale-95 group-hover/item:opacity-100 group-hover/item:scale-100 transition-all duration-200 z-30">
                    <div className="px-2 py-1 rounded bg-zinc-950/90 dark:bg-zinc-900/90 text-white dark:text-zinc-100 text-[10px] font-bold tracking-tight shadow-md whitespace-nowrap border border-white/10 dark:border-white/5 backdrop-blur-sm">
                      {t.nombre}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        /* ── MODO CLARO ── */
        .skill-card {
          background: oklch(1 0.003 58);
          border-color: oklch(0.88 0.025 52);
          color: oklch(0.14 0.018 42);
        }
        .skill-card:hover {
          border-color: oklch(0.65 0.18 40 / 0.35);
          box-shadow: 0 10px 30px oklch(0.65 0.18 40 / 0.06);
        }
        .skill-card:hover .skill-title {
          color: oklch(0.55 0.16 36);
        }

        .tech-icon-box {
          background: oklch(0.97 0.010 56);
          border-color: oklch(0.88 0.025 52 / 0.6);
        }
        .tech-icon-box:hover {
          background: oklch(1 0.003 58);
          border-color: oklch(0.65 0.18 40 / 0.4);
          box-shadow: 0 4px 12px oklch(0.65 0.18 40 / 0.06);
        }

        /* ── MODO OSCURO ── */
        :global(.dark) .skill-card {
          background: oklch(0.14 0.014 38);
          border-color: oklch(0.22 0.020 38);
          color: oklch(0.95 0.008 52);
        }
        :global(.dark) .skill-card:hover {
          border-color: oklch(0.72 0.17 44 / 0.3);
          box-shadow: 0 10px 30px oklch(0.65 0.18 40 / 0.12);
        }
        :global(.dark) .skill-card:hover .skill-title {
          color: oklch(0.72 0.17 44);
        }

        :global(.dark) .tech-icon-box {
          background: oklch(0.12 0.012 38);
          border-color: oklch(0.22 0.020 38 / 0.6);
        }
        :global(.dark) .tech-icon-box:hover {
          background: oklch(0.16 0.014 38);
          border-color: oklch(0.72 0.17 44 / 0.35);
          box-shadow: 0 4px 12px oklch(0.72 0.17 44 / 0.1);
        }
      `}</style>
    </div>
  );
}
