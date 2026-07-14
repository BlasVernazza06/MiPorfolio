---
hidden: false
liveNow: false
order: 8
imgInicio: "/images/claw_cli_mockup.png"
title: Koko CLI
description: Herramienta de línea de comandos (CLI) moderna y rápida en Go para el andamiaje instantáneo de proyectos y gestión de entornos de desarrollo monorrepo.
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
## Sobre el Proyecto
**Claw CLI** es una herramienta de interfaz de línea de comandos (CLI) moderna, rápida y multiplataforma escrita en Go (Golang). Está diseñada para solucionar la fricción del "Día 1" (scaffolding inicial) y la complejidad del "Día 2" (evolución del código) en proyectos de desarrollo de software.
Su lema es: *Grab your stack, structure your project, and start building instantly.*
### La Propuesta de Valor
* **Andamiaje Instantáneo (Día 1):** Configura y genera entornos de desarrollo dockerizados y estructurados en monorrepos unificados en menos de 5 segundos.
* **Evolución Continua (Día 2):** Permite inyectar componentes, bases de datos o módulos de autenticación mediante comandos como `claw add` sin corromper el código existente del desarrollador.
---
## Arquitectura y Desafíos Técnicos
El CLI se construye exclusivamente en Go para aprovechar la compilación a binarios nativos y su velocidad:
* **Velocidad de Arranque Extrema:** Logra un cold start en terminal de menos de 5 milisegundos.
* **Autonomía Offline Completa:** Uso intensivo de `//go:embed` de Go para compilar todas las plantillas de código directamente dentro del binario final, eliminando la necesidad de conexión a internet para inicializar un proyecto.
* **Portabilidad Nativa (Cero Dependencias):** Genera binarios independientes (.exe en Windows, binarios ELF en Linux/macOS) que no requieren que el usuario tenga Node.js, Python u otros runtimes instalados globalmente.
* **Consistencia Arquitectónica:** Estructuras modulares sólidas basadas en monorrepos por defecto y buenas prácticas de producción (TS estricto, linters y Docker integrados).
---
## Estructura de las Plantillas de Scaffolding
El CLI soporta la generación de una estructura unificada tipo monorrepo (workspaces):
```text
mi-proyecto/
├── apps/
│   ├── frontend/         # React SPA (Vite), Next.js o Vue.js
│   └── backend/          # Go Fiber, Node.js Express o Hono
├── packages/
│   └── db/               # Esquemas de Base de Datos y Clientes ORM (Prisma/SQLx)
├── docker-compose.yml    # Contenedores para Base de Datos y paneles de control
├── claw.config.json      # Manifiesto de configuración de Claw
└── README.md
```
---
## Comandos del MVP (v0.1.0)
* `claw init [nombre-proyecto]`: Inicia el asistente interactivo en terminal para configurar y desplegar el proyecto.
* Flag `-d` o `--default`: Genera un proyecto por defecto de forma rápida sin realizar preguntas.
* `claw version`: Muestra la información de versión del binario, compilador de Go y arquitectura.
---
## Plan de Lanzamientos (Roadmap)
1. **Fase 1: MVP (v0.1.0) [Fase Actual]:** Motor básico de scaffolding offline, comandos `init`/`version` y generación de la estructura de monorrepo con Postgres y soporte para Docker.
2. **Fase 2: Evolución de Código (v0.2.0):** Implementación del comando `claw add [modulo]` (autenticación, pasarelas de pago) basado en parsing de AST.
3. **Fase 3: Watcher Local (v0.3.0):** Daemon `DCSync` para sincronizar automáticamente credenciales `.env` y el entorno Docker local.
4. **Fase 4 y Más Allá (v1.0.0+):** Ecosistema de plugins públicos para que la comunidad distribuya sus recetas.
