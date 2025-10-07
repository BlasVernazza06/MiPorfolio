import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TechStackCards({ skills }) {
  // Función para dividir un array en chunks de tamaño específico
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  return (
    <div className="w-full">
      <header className="tech-header-container flex flex-col flex-warp justify-center pb-6 px-4">
        <span className="text-l text-black dark:text-white text-pretty font-normal dark:[&>strong]:text-[#2cc9ff] [&>strong]:text-blue-500 [&>span]:text-orange-500 [&>span]:font-bold dark:[&>strong]:text-p dark:[&>span]:text-[#f5a563]">
          Trabajo con herramientas como <strong>React</strong>, <strong>Firebase</strong>, <strong>Tailwind </strong> y <strong>JavaScript</strong> para crear experiencias web dinámicas y eficientes.
          También tengo habilidades en <span>diseño responsivo</span>, manejo de <span>versionado con Git</span> y enfoque en buenas prácticas de desarrollo.
        </span>
      </header>

      {/* Grid de cards: 2x2 en desktop, 1 columna en mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
        {skills.map((tech, index) => {
          // Dividir las tecnologías en grupos de 9
          const techChunks = chunkArray(tech.technologies, 9);
          
          return (
            <div
              key={index}
              className="tech-cards px-6 pt-6 pb-8 rounded-xl bg-white dark:bg-gray-900 dark:border-gray-800 dark:border-[0.5px] shadow-2xl shadow-gray-400 dark:shadow-none transform transition duration-500 hover:scale-105 will-change-transform"
            >
              <div className="card-container flex flex-col gap-5">
                <div className="header-container flex justify-center mb-2">
                  <p 
                    className="text-center font-bold text-[32px]"
                    style={{
                      letterSpacing: '-1px',
                      background: tech.title === 'Frontend' 
                        ? 'linear-gradient(0deg, #00d9ff 1%, #2cb2f5 58%)'
                        : tech.title === 'Backend'
                        ? 'linear-gradient(0deg, #b1afaf 1%, #2c2c2c 78%)'
                        : tech.title === 'Aprendiendo'
                        ? 'linear-gradient(0deg, #ffc79f 1.44%, #ff6a00 78.37%)'
                        : tech.title === 'Herramientas'
                        ? 'linear-gradient(0deg, #98d5fd 2%, #206a8f 88%)'
                        : 'linear-gradient(0deg, #00d9ff 1%, #2cb2f5 58%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {tech.title}
                  </p>
                </div>

                {/* Carousel con 9 ítems por slide */}
                <Carousel 
                  className="w-full"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {techChunks.map((chunk, chunkIdx) => (
                      <CarouselItem key={chunkIdx} className="pl-2 md:pl-4 basis-full">
                        <div className="grid grid-cols-3 gap-6 py-4">
                          {chunk.map((t, idx) => (
                            <div
                              key={idx}
                              className="flex flex-col items-center text-center gap-2"
                            >
                              <img 
                                src={t.imagen} 
                                alt={t.nombre} 
                                className="h-16 w-16 object-contain"
                              />
                              <span className="text-black dark:text-gray-300 text-xs font-medium">
                                {t.nombre}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {/* Controles con espacio reservado, solo si hay más de un slide */}
                  {techChunks.length > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-6">
                      <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
                      <CarouselNext className="relative right-0 top-0 translate-y-0" />
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