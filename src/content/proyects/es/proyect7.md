---
hidden: false
liveNow: true
order: 1
imgInicio: "/images/memo.ai"
title: Memo.ai
description: Plataforma de productividad para estudiantes que transforma documentos en material de estudio mediante Inteligencia Artificial.
link: "https://memo-ai-web.vercel.app/"
github: "https://github.com/BlasVernazza06/memo-ai"
technologies:
  - nombre: NextJs
    imagen: "/TechIcons/nextjs_icon_dark.svg"
    class: "bg-[#000000]"

  - nombre: NestJs
    imagen: "/TechIcons/nestjs.svg"
    class: "bg-[#E0234E]"

  - nombre: Python
    imagen: "/TechIcons/icons-python.svg"
    class: "bg-[#3776AB]"

  - nombre: AWS S3
    imagen: "/TechIcons/aws.svg"
    class: "bg-[#FF9900]"

  - nombre: Neon
    imagen: "/TechIcons/neon.svg"
    class: "bg-[#00E599]"

  - nombre: Turborepo
    imagen: "/TechIcons/turborepo-icon-dark.svg"
    class: "bg-[#000000]"

otherTechnologies:
  - nombre: Redis
    imagen: "/TechIcons/redis.svg"
    class: "bg-[#DC382D]"

  - nombre: PostgreSQL
    imagen: "/TechIcons/postgresql.svg"
    class: "bg-[#336791]"

  - nombre: Drizzle
    imagen: "/TechIcons/drizzle-orm_dark.svg"
    class: "bg-[#C5F74F]"

  - nombre: Zod
    imagen: "/TechIcons/icons-zod.svg"
    class: "bg-[#3E67B1]"

  - nombre: Better Auth
    imagen: "/TechIcons/better-auth_light.svg"
    class: "bg-[#FFFFFF]"

  - nombre: Motion
    imagen: "/TechIcons/icons-react.svg"
    class: "bg-[#0055FF]"

  - nombre: Prettier
    imagen: "/TechIcons/prettier-icon-dark.svg"
    class: "bg-[#1A2B34]"

  - nombre: Shadcn
    imagen: "/TechIcons/icon-shadcn-ui_dark.svg"
    class: "bg-[#000000]"

  - nombre: Lucide
    imagen: "/TechIcons/lucide.webp"
    class: "bg-[#0F172A]"

  - nombre: Svgl
    imagen: "/TechIcons/svgl.svg"
    class: "bg-[#1E293B]"

  - nombre: Playwright
    imagen: "/TechIcons/icon-playwright.svg"
    class: "bg-[#2EAD33]"

  - nombre: Cache-manager
    imagen: "/TechIcons/icons-terminal.svg"
    class: "bg-[#4A5568]"

  - nombre: Jest
    imagen: "/TechIcons/icon-jest.svg"
    class: "bg-[#15C213]"

  - nombre: FastApi
    imagen: "/TechIcons/fastapi.svg"
    class: "bg-[#009688]"

  - nombre: Uvicorn
    imagen: "/TechIcons/icons-terminal.svg"
    class: "bg-[#2F3E46]"

  - nombre: Langchain
    imagen: "/TechIcons/langchain-logo.svg"
    class: "bg-[#000000]"

  - nombre: PyMuPDF
    imagen: "/TechIcons/pymupdf.svg"
    class: "bg-[#FF5722]"

  - nombre: Python-dotenv
    imagen: "/TechIcons/dotenv.svg"
    class: "bg-[#3F51B5]"

  - nombre: Pydantic
    imagen: "/TechIcons/icons-terminal.svg"
    class: "bg-[#E91E63]"

  - nombre: Brevo
    imagen: "/TechIcons/brevo.jpeg"
    class: "bg-[#0052FF]"

  - nombre: UploadThing
    imagen: "/TechIcons/uploadthing.png"
    class: "bg-[#6366F1]"

  - nombre: Stripe
    imagen: "/TechIcons/icon-stripe.svg"
    class: "bg-[#635BFF]"
---

## Sobre el Proyecto

Memo.ai es un ecosistema de aprendizaje avanzado que utiliza IA para procesar documentos y generar herramientas de estudio. Construido sobre una arquitectura moderna de microservicios, el proyecto se enfoca en la velocidad, la escalabilidad y una experiencia de usuario excepcional.

Para este desarrollo, utilicé un **Monorepo gestionado con Turborepo**, lo que permitió separar la lógica del frontend en Next.js, el core de la API en **NestJs** y los motores de procesamiento de lenguaje natural escritos en **Python**.

## Arquitectura y Desafíos Técnicos

### Gestión de Datos y Performance

Utilicé **Neon** como base de datos serverless junto con **Drizzle ORM** para garantizar consultas rápidas y seguras. Para optimizar los tiempos de respuesta y manejar el tráfico, implementé **Redis** como capa de caché, asegurando que las peticiones más frecuentes se resuelvan en milisegundos.

### Almacenamiento e Infraestructura en la Nube

Toda la gestión de documentos (PDFs, imágenes y audios) se realiza a través de **AWS S3**. Implementé un flujo de subida seguro que garantiza la integridad de los datos de los usuarios, permitiendo que la plataforma escale sin problemas de almacenamiento.

### Seguridad y Validación

La autenticación se delegó a **Better Auth**, ofreciendo una experiencia de login fluida y segura. Para la integridad de los datos en toda la aplicación, utilicé **Zod**, asegurando que cada entrada de información cumpla con esquemas estrictos de validación antes de llegar a la base de datos.

## Características Principales

- **Interfaz Animada con Motion**: Reemplacé las animaciones tradicionales por **Motion** (Framer Motion) para lograr transiciones más naturales y una interfaz que se siente "viva".
- **Procesamiento Híbrido**: Combinación de la robustez de **NestJs** para la gestión de usuarios y la potencia de **Python** para las tareas de IA y análisis de documentos.
- **Validación Extrema**: Uso de **Zod** tanto en el cliente como en el servidor para eliminar errores de tipo y datos corruptos.
- **Escalabilidad Global**: Infraestructura basada en **AWS** y bases de datos distribuidas que permiten un crecimiento constante del número de usuarios.
