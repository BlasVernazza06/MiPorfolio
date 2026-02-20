import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TechStackCards({ skills }) {
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  return (
    <div className="w-full space-y-12">
      <header className="max-w-4xl mx-auto text-center px-4">
        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Mi stack tecnológico está diseñado para la <span className="text-emerald-600 dark:text-emerald-400 font-medium">eficiencia y la escalabilidad</span>. 
          Combino la potencia de <span className="text-zinc-900 dark:text-zinc-100 font-semibold">React y TypeScript</span> con arquitecturas de backend sólidas en <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Node.js</span>, 
          asegurando productos que no solo se ven bien, sino que rinden al máximo nivel bajo cualquier demanda.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {skills.map((tech, index) => {
          const techChunks = chunkArray(tech.technologies, 9);
          
          return (
            <div
              key={index}
              className="p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/5 group"
            >
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold font-outfit text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {tech.title}
                  </h3>
                  <div className="h-px flex-grow mx-4 bg-zinc-100 dark:bg-zinc-800"></div>
                  <span className="text-xs font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">
                    Stack
                  </span>
                </div>

                <Carousel 
                  className="w-full"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {techChunks.map((chunk, chunkIdx) => (
                      <CarouselItem key={chunkIdx} className="basis-full">
                        <div className="grid grid-cols-3 gap-y-12 gap-x-4 py-8">
                          {chunk.map((t, idx) => (
                            <div
                              key={idx}
                              className="flex flex-col items-center gap-3 group/item"
                            >
                              <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 group-hover/item:bg-white dark:group-hover/item:bg-zinc-700 transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-lg group-hover/item:shadow-emerald-500/20">
                                <img 
                                  src={t.imagen} 
                                  alt={t.nombre} 
                                  className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform duration-300 group-hover/item:rotate-3"
                                />
                              </div>
                              <span className="text-zinc-500 dark:text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-tighter group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-100 transition-colors">
                                {t.nombre}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {techChunks.length > 1 && (
                    <div className="flex justify-end gap-2 mt-8">
                      <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none hover:bg-emerald-500/10 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400" />
                      <CarouselNext className="static translate-y-0 h-10 w-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none hover:bg-emerald-500/10 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400" />
                    </div>
                  )}
                </Carousel>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}