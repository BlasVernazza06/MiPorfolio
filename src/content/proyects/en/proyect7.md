---
hidden: false
liveNow: true
order: 1
imgInicio: "/images/memo.ai"
title: Memo.ai
description: Productivity platform for students that transforms documents into study material using Artificial Intelligence.
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

## About the Project

Memo.ai is an advanced learning ecosystem that utilizes AI to process documents and generate study materials. Built on a modern microservices architecture, the project focuses on speed, scalability, and an exceptional user experience.

For this development, I used a **Monorepo managed with Turborepo**, which allowed separating the frontend logic in Next.js, the core API in **NestJs**, and the natural language processing engines written in **Python**.

## Architecture and Technical Challenges

### Data Management and Performance

I used **Neon** as a serverless database alongside **Drizzle ORM** to ensure fast and secure queries. To optimize response times and handle traffic, I implemented **Redis** as a caching layer, ensuring that the most frequent requests are resolved in milliseconds.

### Cloud Storage and Infrastructure

All document management (PDFs, images, and audio) is handled through **AWS S3**. I implemented a secure upload flow that guarantees the integrity of user data, allowing the platform to scale seamlessly without storage constraints.

### Security and Validation

Authentication was delegated to **Better Auth**, offering a smooth and secure login experience. For data integrity throughout the application, I used **Zod**, ensuring that every data entry meets strict validation schemas before reaching the database.

## Key Features

- **Animated Interface with Motion**: Replaced traditional animations with **Motion** (Framer Motion) to achieve more natural transitions and an interface that feels "alive".
- **Hybrid Processing**: Combination of **NestJs**'s robustness for user management and **Python**'s power for AI tasks and document analysis.
- **Extreme Validation**: Use of **Zod** on both the client and server to eliminate type errors and corrupt data.
- **Global Scalability**: AWS-based infrastructure and distributed databases that allow constant growth of the user base.
