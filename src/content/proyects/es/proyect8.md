---
hidden: false
liveNow: false
order: 8
imgInicio: "/images/claw_cli_mockup.png"
title: "Koko CLI – Scaffolder de Monorrepos y Stacks en Go"
description: "Herramienta de línea de comandos de alto rendimiento y cero dependencias para andamiaje interactivo de monorrepos, microservicios y sincronización de dependencias."
link: "https://github.com/BlasVernazza06/koko-cli"
github: "https://github.com/BlasVernazza06/koko-cli"
technologies:
  - nombre: Go
    imagen: "/TechIcons/go.svg"
    class: "bg-[#00ADD8]"
  - nombre: Docker
    imagen: "/TechIcons/icons-docker.svg"
    class: "bg-[#0db7ed]"
  - nombre: Cobra CLI
    imagen: "/TechIcons/icons-terminal.svg"
    class: "bg-[#2F3E46]"
otherTechnologies:
  - nombre: Charm Huh
    imagen: "/TechIcons/icons-terminal.svg"
    class: "bg-[#F25C54]"
  - nombre: GoReleaser
    imagen: "/TechIcons/icons-terminal.svg"
    class: "bg-[#333333]"
  - nombre: Docker Compose
    imagen: "/TechIcons/icons-docker.svg"
    class: "bg-[#1D3557]"
---

## 📌 Resumen de Ingeniería
Koko CLI es una herramienta binaria nativa interactiva escrita en Go, concebida para eliminar la fricción operativa del "Día 1" (scaffolding y bootstrap inicial) y del "Día 2" (evolución e inyección de infraestructura en caliente) en arquitecturas complejas de monorrepos y microservicios. A diferencia de las herramientas tradicionales basadas en JavaScript o Python, Koko CLI proporciona un entorno autocontenido de cero dependencias globales con portabilidad nativa y tiempos de ejecución en el orden de los milisegundos.

## 🏗️ Arquitectura del Sistema & Decisiones Técnicas
* **Virtual File System (VFS) en Memoria:** Implementación de un sistema de archivos virtual en memoria que genera, interpola y valida toda la estructura del proyecto antes de escribir un solo byte en disco. Si ocurre algún error de validación o conflicto de nombres, el proceso realiza un rollback atómico evitando proyectos corruptos o a medio generar.
* **Catálogo Maestro de Dependencias Centralizado:** Motor desacoplado (`internal/catalog`) que gestiona y resuelve de forma centralizada todas las versiones de frameworks (Next.js, Vite, Nuxt, Svelte, Express, Hono, NestJS, Go Chi, FastAPI), ORMs y herramientas, asegurando builds reproducibles y actualizaciones globales instantáneas sin tocar docenas de plantillas individuales.
* **Motor de Compatibilidad Cruzada en Tiempo Real:** Matriz de reglas dinámicas (`internal/compatibility`) integrada directamente en el asistente TUI, bloqueando combinaciones de tecnologías incompatibles (como frameworks de Go con ORMs de Node.js o drivers específicos de motor) mediante opciones deshabilitadas con retroalimentación contextual inmediata.
* **Interfaz Interactiva (TUI) de Alta Fidelidad:** Desarrollada con el ecosistema Charm (Bubble Tea, Lipgloss y Huh), ofreciendo un wizard paso a paso con animaciones fluidas, spinners en tiempo real y soporte dual: recetas preconfiguradas (*Quick Setup* para SaaS, MERN, PERN, FastAPI) y diseño granular (*Manual Configuration*).
* **Andamiaje Autocontenido Offline:** Uso extensivo de la directiva `//go:embed` para incrustar todas las plantillas de código fuente, Dockerfiles, configuraciones de Turborepo y workflows de GitHub Actions dentro del binario compilado, permitiendo inicializar proyectos complejos sin conexión a internet.
* **Distribución Dual (Nativo + NPM Wrapper):** Binarios estáticos ultra ligeros compilados con `ldflags -w -s` para Linux, macOS y Windows, acompañados de un wrapper publicado en npm para ejecución instantánea vía `npx koko-cli init` sin requerir la instalación previa de Go.

## 🚀 Desafíos Técnicos & Métricas de Impacto
* **Cold Start en Terminal:** Logro de un tiempo de inicio y renderizado de la interfaz por debajo de los **3ms** (frente a los 150–300ms habituales en herramientas CLI basadas en Node.js/NPX), brindando una experiencia instantánea.
* **Generación Completa de Monorrepos en Segundos:** Creación de arquitecturas complejas compuestas por Frontend (Next.js/React), Backend APIs (Go Chi/Express/FastAPI), capas compartidas de base de datos (Drizzle/Prisma) y orquestación Docker en menos de **1.2s**.
* **Integridad Atómica de Archivos:** Reducción a 0% de estados inconsistentes en disco gracias a la arquitectura VFS in-memory combinada con comprobación previa de colisiones de directorios.

## 🔮 Features Futuros & Roadmap de Ingeniería
* **1. `koko add` (Inyector Dinámico de Módulos & AST):** Comando interactivo para proyectos existentes que permitirá inyectar microservicios, capas de autenticación (Better-Auth, Clerk), colas de mensajería (Redis BullMQ) o proveedores de almacenamiento (S3) manipulando el Abstract Syntax Tree (AST) sin alterar el código existente.
* **2. Remote Template Registry & Plugins Comunitarios:** Soporte para consumir y publicar plantillas desde repositorios remotos de Git (`koko init --template github.com/org/custom-stack`) con verificación criptográfica de checksums y esquemas de manifiesto `koko.config.json`.
* **3. Koko Web Studio (Visual Architecture Canvas):** Servidor web local ligero (`koko studio`) que abrirá una interfaz gráfica interactiva en el navegador para modelar la arquitectura conectando nodos visuales (Apps, APIs, DBs, Caches) y exportar el monorrepo generado.
* **4. AI-Driven Smart Scaffolder (`koko ai`):** Asistente CLI impulsado por modelos de lenguaje que interpretará requerimientos funcionales en lenguaje natural para deducir el stack óptimo, generar esquemas relacionales iniciales y escribir los contratos de API base.
* **5. Automated Infrastructure as Code (IaC):** Generador de manifiestos declarativos (Terraform, Pulumi y Docker Swarm/K8s) y configuraciones de despliegue automatizado para plataformas como Vercel, Railway, Fly.io y AWS.
