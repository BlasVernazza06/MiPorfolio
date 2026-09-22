---
hidden: false
liveNow: true
order: 2
imgInicio: "/images/koko-project.png"
title: "Koko CLI – Scaffolder de Monorrepos y Stacks en Go"
description: "Herramienta de línea de comandos de alto rendimiento y cero dependencias para andamiaje interactivo de monorrepos, microservicios y sincronización de dependencias."
link: "https://koko-cli.pages.dev/"
github: "https://github.com/BlasVernazza06/koko-cli"
technologies:
  - nombre: Go
    imagen: "/TechIcons/go.svg"
    class: "bg-[#000000]"
  - nombre: Turborepo
    imagen: "/TechIcons/turborepo-icon-dark.svg"
    class: "bg-[#000000]"
  - nombre: Docker
    imagen: "/TechIcons/icons-docker.svg"
    class: "bg-[#0db7ed]"
  - nombre: Cobra CLI
    imagen: "/TechIcons/icons-terminal.svg"
    class: "bg-[#2F3E46]"
otherTechnologies:
  - nombre: Charm Bubbletea
    imagen: "/TechIcons/icons-terminal.svg"
    class: "bg-[#F25C54]"
  - nombre: Better Auth
    imagen: "/TechIcons/better-auth_light.svg"
    class: "bg-[#FFFFFF]"
  - nombre: Drizzle
    imagen: "/TechIcons/drizzle-orm_dark.svg"
    class: "bg-[#C5F74F]"
  - nombre: NextJs
    imagen: "/TechIcons/nextjs_icon_dark.svg"
    class: "bg-[#000000]"
  - nombre: NestJs
    imagen: "/TechIcons/nestjs.svg"
    class: "bg-[#E0234E]"
  - nombre: FastApi
    imagen: "/TechIcons/fastapi.svg"
    class: "bg-[#009688]"
  - nombre: Shadcn
    imagen: "/TechIcons/icon-shadcn-ui_dark.svg"
    class: "bg-[#000000]"
  - nombre: Stripe
    imagen: "/TechIcons/icon-stripe.svg"
    class: "bg-[#635BFF]"
  - nombre: Clerk
    imagen: "/TechIcons/clerk-light.svg"
    class: "bg-[#6C47FF]"
  - nombre: Prisma
    imagen: "/TechIcons/icons-prisma.svg"
    class: "bg-[#2D3748]"
  - nombre: GoReleaser
    imagen: "/TechIcons/icons-terminal.svg"
    class: "bg-[#333333]"
  - nombre: Docker Compose
    imagen: "/TechIcons/icons-docker.svg"
    class: "bg-[#1D3557]"
---

## 📌 Resumen de Ingeniería
Koko CLI es una herramienta de terminal interactiva de alto rendimiento escrita en Go, concebida para erradicar la fricción operativa del "Día 1" (scaffolding y bootstrapping inicial) y del "Día 2" (evolución, diagnóstico e inyección modular en caliente) en arquitecturas modernas de monorrepos y microservicios. A diferencia de las utilidades tradicionales basadas en runtimes pesados de JavaScript o Python, Koko CLI distribuye un binario autocontenido de cero dependencias globales con tiempos de ejecución en el orden de los milisegundos y portabilidad multiplataforma nativa.

## 🏗️ Arquitectura del Sistema & Decisiones Técnicas
* **Virtual File System (VFS) en Memoria:** Toda la jerarquía de directorios, plantillas interpoladas, configuraciones de workspaces (`apps/`, `packages/`) y Dockerfiles se procesan y validan íntegramente en memoria antes de tocar el disco. Si se detecta un error de validación o colisión en el sistema de archivos, el motor ejecuta un rollback atómico sin dejar residuos ni proyectos corruptos.
* **Motor de Integridad y Compatibilidad Cruzada (`internal/compatibility` & `internal/validator`):** Matriz de reglas evaluada en tiempo real dentro del asistente TUI que valida enlaces `workspace:*` e impide combinaciones arquitectónicas incompatibles (como asociar runtimes Go con ORMs de Node.js o controladores incompatibles), asegurando coherencia estructural estricta.
* **Interfaz Interactiva (TUI) con Charm Bubbletea & Huh:** Terminal UI visualmente cuidada construida con el ecosistema Charm (Bubbletea, Lipgloss y Huh), con flujos duales: recetas de producción listas para usar (*SaaS Starter, Enterprise NestJS, PERN, MERN, FastAPI + React, Mobile Expo*) y un asistente granular paso a paso (*Manual Configuration*).
* **Catálogo Maestro de Dependencias Centralizado (`internal/catalog`):** Motor desacoplado que gestiona de manera centralizada las versiones de paquetes, frameworks (Next.js, Vite, Astro, Nuxt, Svelte, Express, Hono, NestJS, Go Chi, FastAPI) y ORMs (Drizzle, Prisma, Mongoose, GORM, SQLAlchemy), permitiendo builds reproducibles y actualizaciones globales inmediatas.
* **Flujo Modular del "Día 2" (`koko add`):** Comando extensible para incorporar nuevas funcionalidades a proyectos existentes sin alterar la lógica de negocio previa (`koko add stripe`, `koko add polar`, `koko add clerk`, `koko add better-auth`, `koko add shadcn`, `koko add zod`, `koko add backend`, `koko add mobile`).
* **Diagnóstico & Salud del Workspace (`koko doctor`):** Comando integrado para auditar en tiempo real la salud de dependencias, alineación de workspaces, estado del catálogo y configuración del monorrepo.
* **Manifiesto Declarativo (`koko.config.json`):** Generación automática de un manifiesto estándar tipado en la raíz del proyecto para validar, auditar y gobernar la evolución técnica del monorrepo.
* **Andamiaje Autocontenido Offline (`//go:embed`):** Incrustación completa de plantillas, pipelines de Turborepo, archivos de configuración y GitHub Actions CI dentro del binario Go para inicialización 100% offline.
* **Distribución Dual (Nativo + NPM Wrapper `koko-app`):** Binarios estáticos compilados con `ldflags -w -s` para Linux, macOS y Windows, junto a un wrapper liviano en npm (`koko-app`) para ejecución inmediata vía `npx koko-app init`, `pnpm dlx koko-app init` o `bunx koko-app init`.

## 🚀 Desafíos Técnicos & Métricas de Impacto
* **Cold Start en Terminal < 3ms:** Inicio instantáneo y renderizado reactivo de la TUI por debajo de los **3ms**, superando por dos órdenes de magnitud a herramientas tradicionales de Node.js/NPX (150–300ms).
* **Generación Completa de Monorrepos < 1.2s:** Scaffolding completo de arquitecturas fullstack compuestas por Frontend (Next.js/React/Astro), Backend APIs (Express/Hono/Go Chi/FastAPI/NestJS), paquetes compartidos (`@repo/db`, `@repo/auth`, `@repo/ui`) y Docker Compose en menos de **1.2 segundos**.
* **Integridad Atómica Garantizada:** 0% de estados inconsistentes o archivos corruptos en disco gracias al aislamiento en VFS in-memory y validación preventiva de colisiones.
