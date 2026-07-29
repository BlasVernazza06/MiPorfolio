---
hidden: false
liveNow: true
order: 1
imgInicio: "/images/memo.ai"
title: "Memo.ai – Plataforma RAG Híbrida y Procesamiento de Lenguaje Natural Asíncrono"
description: "Ecosistema de aprendizaje avanzado con arquitectura de microservicios, procesamiento asíncrono de documentos e indexación semántica en base de datos vectorial."
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

## 📌 Resumen de Ingeniería
Memo.ai es un ecosistema educativo inteligente diseñado para transformar la ingesta masiva de documentos (PDFs, grabaciones de audio y transcripciones) en copilotos de estudio personalizados. La arquitectura resuelve el desafío de la sobrecarga de información mediante el procesamiento asíncrono y estructurado de datos, indexación semántica y generación aumentada por recuperación (RAG). El sistema está orquestado como un monorrepo distribuido en microservicios, optimizando el rendimiento mediante caching multinivel y concurrencia optimizada.

## 🏗️ Arquitectura del Sistema & Decisiones Técnicas
* **Frontend:** Desarrollado sobre Next.js con Server-Side Rendering (SSR) y Static Site Generation (SSG). Se implementaron flujos interactivos de alto rendimiento utilizando Motion (Framer Motion) y Shadcn/UI, logrando renderizados selectivos de componentes dinámicos y persistencia del estado en el cliente sin re-evaluaciones del layout principal.
* **Backend & Microservicios:** Diseñado bajo una arquitectura desacoplada. El core API reside en NestJS (TypeScript) enfocado en lógica transaccional, autenticación vía Better Auth y persistencia rápida. Las tareas pesadas de IA y ETL de documentos se delegaron a un microservicio asíncrono en FastAPI (Python 3.11), eliminando cuellos de botella en el hilo de ejecución principal de Node.js.
* **Capa de Datos & Vectores:** Persistencia estructurada en PostgreSQL serverless (Neon) orquestada con Drizzle ORM. Se implementó una base de datos vectorial para el almacenamiento de embeddings semánticos generados mediante modelos de OpenAI/Cohere, utilizando LangChain y optimizando las búsquedas por similitud de coseno mediante indexación HNSW.
* **Infraestructura & Caché:** Gestión del espacio de trabajo con Turborepo, agilizando builds locales y CI/CD en un 40%. Se configuró un clúster de Redis (Cache-manager) para el almacenamiento en caché de fragmentos RAG redundantes y sesiones de usuario, reduciendo el tráfico directo a la base de datos principal. Los archivos pesados se gestionan directamente a través de AWS S3 firmado mediante URLs temporales y UploadThing.

## 🚀 Desafíos Técnicos & Métricas de Impacto
* **Latencia de Respuesta RAG:** Reducción del tiempo de respuesta del chatbot en un 65% (de 3.5s a <1.2s en la primera respuesta y streaming SSE de tokens a <80ms percibidos) mediante la estructuración de un pipeline híbrido que pre-procesa las consultas y cachea contextos vectoriales calientes en Redis.
* **Procesamiento de Documentos Grandes:** Reducción del consumo de memoria en un 50% al procesar PDFs de más de 50 páginas mediante la extracción en streaming y chunking dinámico con PyMuPDF y LangChain Text Splitters recursivos en Python.
* **Consistencia de Tipos en Monorrepo:** Cero errores de tipo en tiempo de ejecución al compartir esquemas de datos entre el API de NestJS, el cliente Next.js y los servicios de base de datos a través de esquemas centralizados compartidos con Zod y tipado seguro estricto de Drizzle ORM.
