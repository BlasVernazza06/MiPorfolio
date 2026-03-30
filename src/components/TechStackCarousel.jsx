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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {skills.map((tech, index) => {
          const techChunks = chunkArray(tech.technologies, 9);
          
          return (
            <div
              key={index}
              className="p-10 rounded-[2.5rem] bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/5 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 size-24 bg-gradient-to-bl from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="flex flex-col gap-10">
                <div className="flex items-center gap-6">
                  <h3 className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 group-hover:text-emerald-500 transition-colors">
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
                        <div className="grid grid-cols-3 gap-6 py-6">
                          {chunk.map((t, idx) => (
                            <div
                              key={idx}
                              className="flex flex-col items-center gap-4 group/item"
                            >
                              <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 group-hover/item:bg-white dark:group-hover/item:bg-zinc-700 transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-lg group-hover/item:shadow-emerald-500/20">
                                <img 
                                  src={t.imagen} 
                                  alt={t.nombre} 
                                  className="h-10 w-10 md:h-12 md:w-12 object-contain transition-all duration-500"
                                />
                              </div>
                              <span className="text-zinc-400 dark:text-zinc-500 text-[10px] font-black uppercase tracking-widest group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-100 transition-colors">
                                {t.nombre}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {techChunks.length > 1 && (
                    <div className="flex justify-end gap-3 mt-10">
                      <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/50 hover:bg-emerald-500/10 text-zinc-500 hover:text-emerald-500 transition-all" />
                      <CarouselNext className="static translate-y-0 h-12 w-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/50 hover:bg-emerald-500/10 text-zinc-500 hover:text-emerald-500 transition-all" />
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

