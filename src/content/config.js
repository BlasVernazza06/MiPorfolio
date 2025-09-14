import { defineCollection, z } from 'astro:content';

const proyects = defineCollection({
  schema: z.object({
    order: z.number(),
    imgInicio: z.string(),
    title: z.string(),
    description: z.string(),
    link: z.string(),
    github: z.string(),
    visible: z.boolean().optional().default(true), // Campo para controlar visibilidad
    technologies: z.array(
      z.object({
        nombre: z.string(),
        imagen: z.string(),
        class: z.string()
      })
    )
  })
})

const techStack = defineCollection({
  schema: z.object({
    title: z.string(),
    technologies: z.array(
      z.object({
        nombre: z.string(),
        imagen: z.string()
      })
    )
  })
})

const certifies = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pdf: z.string(),
  })
})

export const collections = {
  proyects,
  techStack,
  certifies,
}