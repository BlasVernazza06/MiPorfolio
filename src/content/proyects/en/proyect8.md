---
hidden: false
liveNow: true
order: 8
imgInicio: "/images/claw_cli_mockup.png"
title: Claw CLI
description: A modern, fast command-line interface (CLI) tool in Go for instant project scaffolding and monorepo development environment management.
link: "https://github.com/BlasVernazza06/claw-cli"
github: "https://github.com/BlasVernazza06/claw-cli"
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

## About the Project

**Claw CLI** is a modern, fast, and cross-platform command-line interface (CLI) tool written in Go (Golang). It is designed to eliminate the friction of "Day 1" (initial scaffolding) and the complexity of "Day 2" (code evolution) in software development projects.

Its motto: *Grab your stack, structure your project, and start building instantly.*

### Value Proposition
* **Instant Scaffolding (Day 1):** Configure and generate dockerized, structured development environments in unified monorepos in less than 5 seconds.
* **Continuous Evolution (Day 2):** Easily inject components, databases, or authentication modules using commands like `claw add` without breaking the developer's existing code.

---

## Architecture & Technical Challenges

The CLI is built exclusively in Go to leverage native compilation and execution speed:

* **Extreme Startup Speed:** Achievement of a terminal cold start in less than 5 milliseconds.
* **Complete Offline Autonomy:** Heavy use of Go's native `//go:embed` package to compile all code templates directly inside the final binary, removing any internet requirement to initialize a project.
* **Native Portability (Zero Dependencies):** Generates independent standalone binaries (.exe on Windows, ELF binaries on Linux/macOS) that do not depend on the user having Node.js, Python, or other global runtimes installed.
* **Architectural Consistency:** Solid modular structures based on monorepos by default, bundled with production best practices (strict TS, linters, and Docker integrated).

---

## Scaffolding Template Structure

The CLI supports the generation of a unified workspace/monorepo structure:

```text
my-project/
├── apps/
│   ├── frontend/         # React SPA (Vite), Next.js, or Vue.js
│   └── backend/          # Go Fiber, Node.js Express, or Hono
├── packages/
│   └── db/               # Database Schemas and ORM Clients (Prisma/SQLx)
├── docker-compose.yml    # Database and Admin Panel Containers
├── claw.config.json      # Claw configuration manifest
└── README.md
```

---

## MVP Commands (v0.1.0)

* `claw init [project-name]`: Starts the interactive terminal wizard to configure and deploy the project.
* Flag `-d` or `--default`: Generates a default project layout instantly without asking questions.
* `claw version`: Displays version details of the binary, Go compiler, and target architecture.

---

## Roadmap

1. **Phase 1: MVP (v0.1.0) [Current Phase]:** Core offline scaffolding engine, `init`/`version` commands, and monorepo structure generation with Postgres and Docker support.
2. **Phase 2: Code Evolution (v0.2.0):** Implementation of the `claw add [module]` command (auth, payment gateways) powered by AST parsing.
3. **Phase 3: Local Watcher (v0.3.0):** `DCSync` daemon to automatically synchronize `.env` credentials and the local Docker environment.
4. **Phase 4 and Beyond (v1.0.0+):** Public plugin ecosystem allowing the community to distribute custom project recipes.
