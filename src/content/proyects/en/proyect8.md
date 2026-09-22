---
hidden: false
liveNow: true
order: 2
imgInicio: "/images/koko-project.png"
title: "Koko CLI – Go Monorepo & Stack Scaffolder"
description: "High-performance, zero-dependency command-line utility for interactive monorepo scaffolding, microservices bootstrapping, and dependency catalog synchronization."
link: "https://github.com/BlasVernazza06/koko-cli"
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

## 📌 Engineering Summary
Koko CLI is an ultra-fast, native interactive command-line tool written in Go, engineered to eliminate operational friction on "Day 1" (initial scaffolding and bootstrapping) and "Day 2" (hot-injecting modules, diagnostics, and workspace evolution) in modern monorepo architectures. Unlike conventional CLIs built on heavy JavaScript or Python runtimes, Koko CLI provides a self-contained, zero-dependency binary with native cross-platform execution in single-digit milliseconds.

## 🏗️ System Architecture & Technical Decisions
* **In-Memory Virtual File System (VFS):** The complete directory tree, interpolated templates, workspace configs (`apps/`, `packages/`), and Docker orchestration files are rendered and validated entirely in memory before writing a single byte to disk. If validation fails or collision occurs, an atomic rollback prevents corrupt or half-generated workspaces.
* **Workspace Integrity & Compatibility Engine (`internal/compatibility` & `internal/validator`):** Real-time matrix evaluation built directly into the terminal wizard, enforcing valid `workspace:*` links and preventing incompatible architecture pairings (e.g. Go runtimes with Node.js ORMs or incompatible DB drivers).
* **High-Fidelity Terminal UI (TUI) with Charm Bubbletea & Huh:** Visually polished terminal UI with fluid animations, real-time spinners, and dual flows: production-ready recipes (*SaaS Starter, Enterprise NestJS, PERN, MERN, FastAPI + React, Mobile Expo*) and a granular step-by-step custom wizard (*Manual Configuration*).
* **Centralized Master Dependency Catalog (`internal/catalog`):** Decoupled version management engine that centrally governs dependency versions across all frameworks (Next.js, Vite, Astro, Nuxt, Svelte, Express, Hono, NestJS, Go Chi, FastAPI) and ORMs (Drizzle, Prisma, Mongoose, GORM, SQLAlchemy), guaranteeing reproducible builds and single-point upgrades.
* **Modular "Day-2" Addons Workflow (`koko add`):** Extensible command to seamlessly inject new capabilities into existing workspaces without breaking custom code (`koko add stripe`, `koko add polar`, `koko add clerk`, `koko add better-auth`, `koko add shadcn`, `koko add zod`, `koko add backend`, `koko add mobile`).
* **Health Check & Diagnostics (`koko doctor`):** Built-in diagnostic command to audit dependency health, workspace package alignments, catalog integrity, and monorepo configurations in a single run.
* **Declarative Configuration Manifest (`koko.config.json`):** Standardized typed manifest generated at project root to audit, validate, and govern long-term architecture maintenance against `https://koko-cli.dev/schema.json`.
* **Self-Contained Offline Scaffolding (`//go:embed`):** Full embedding of source templates, Turborepo pipelines, Dockerfiles, and GitHub Actions CI inside the compiled binary for 100% offline project generation.
* **Dual Distribution Strategy (Native + NPM Wrapper `koko-app`):** Standalone static binaries compiled with `ldflags -w -s` for Linux, macOS, and Windows, paired with an npm wrapper (`koko-app`) for immediate execution via `npx koko-app init`, `pnpm dlx koko-app init`, or `bunx koko-app init`.

## 🚀 Technical Challenges & Impact Metrics
* **Sub-3ms Terminal Cold Start:** Instant launch and reactive UI rendering under **3ms** (compared to 150–300ms typical of Node.js/NPX-based utilities), delivering a frictionless developer feedback loop.
* **Sub-1.2s Full-Stack Monorepo Generation:** End-to-end scaffolding of multi-tier monorepos featuring Frontend (Next.js/React/Astro), Backend APIs (Express/Hono/Go Chi/FastAPI/NestJS), shared packages (`@repo/db`, `@repo/auth`, `@repo/ui`), and Docker Compose in under **1.2 seconds**.
* **Zero Corrupted File Operations:** Guaranteed atomic disk writes through the in-memory VFS abstraction coupled with pre-execution collision checks.
