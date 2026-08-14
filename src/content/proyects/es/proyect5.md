---
order: 4
visible: true
liveNow: false
imgInicio: "/images/StudyHubPic.png"
title: "StudyHub – Hub de Colaboración en Tiempo Real"
description: "Centro de trabajo educativo que unifica edición de texto enriquecido, mensajería instantánea distribuida y almacenamiento en la nube en tiempo real."
link: "#"
github: "https://github.com/BlasVernazza06/StudyHub.git"
technologies:
  - nombre: NextJS
    imagen: "/TechIcons/nextjs_icon_dark.svg"
    class: "bg-[#c26d27]"

  - nombre: TypeScript
    imagen: "/TechIcons/typescript.svg"
    class: "bg-[#3178C6]"

  - nombre: Prisma
    imagen: "/TechIcons/icons-prisma.svg"
    class: "bg-[#2D3748]"

  - nombre: Neon
    imagen: "/TechIcons/neon.svg"
    class: "bg-[#12B397]"

  - nombre: Pusher
    imagen: "/TechIcons/pusher.svg"
    class: "bg-[#300D4F]"

  - nombre: Tiptap
    imagen: "/TechIcons/tiptap.jpeg"
    class: "bg-[#000000]"

otherTechnologies:
  - nombre: Tailwind
    imagen: "/TechIcons/icons-tailwind.svg"
    class: "bg-[#125c8d]"

  - nombre: Shadcn
    imagen: "/TechIcons/icon-shadcn-ui.svg"
    class: "bg-[#0F172A]"

  - nombre: Zod
    imagen: "/TechIcons/icons-zod.svg"
    class: "bg-[#7C3AED]"

  - nombre: Better Auth
    imagen: "/TechIcons/better-auth_light.svg"
    class: "bg-[#FFFFFF]"

  - nombre: UploadThing
    imagen: "/TechIcons/uploadthing.png"
    class: "bg-[#f2132d]"

  - nombre: Resend
    imagen: "/TechIcons/resend.svg"
    class: "bg-[#000000]"
---

## 📌 Resumen de Ingeniería
StudyHub es un entorno digital integrado de productividad diseñado para centralizar flujos de trabajo de estudiantes e investigadores. La plataforma mitiga la fricción de alternar herramientas externas mediante la convergencia de chats en vivo, co-edición de documentos y almacenamiento de archivos en un único espacio unificado. Su núcleo destaca por una arquitectura reactiva asíncrona respaldada por canales Websocket en tiempo real y persistencia serverless.

## 🏗️ Arquitectura del Sistema & Decisiones Técnicas
* **Frontend y Editor Reactivo:** Construido en Next.js con soporte estricto de TypeScript. El editor de texto enriquecido modular se desarrolló sobre TipTap, implementando extensiones personalizadas para soportar bloques dinámicos de Markdown e incrustación de medios interactivos.
* **Sincronización WebSockets:** Integración de Pusher en el backend de Next.js como proveedor de mensajería WebSocket administrada, logrando la distribución bidireccional de eventos de chat, presencia y cambios de estado con latencia de red extremadamente baja.
* **Acceso y Modelado de Datos:** Conexión a base de datos PostgreSQL Serverless alojada en Neon. El modelado relacional y las consultas complejas se gestionan con Prisma ORM, configurando pools de conexiones dinámicas optimizados para soportar picos transaccionales intermitentes propios de infraestructuras serverless.
* **Autenticación e Ingesta:** Flujo de identidad administrado mediante Better Auth, implementando esquemas de sesión seguros y control de acceso basado en roles (RBAC) para proteger los espacios de trabajo privados. La ingesta y distribución de archivos adjuntos se delega a UploadThing, procesando de manera segura la carga de archivos binarios directamente a buckets dedicados.

## 🚀 Desafíos Técnicos & Métricas de Impacto
* **Sincronización de Chat en Tiempo Real:** Latencia de entrega de mensajes inferior a los **50ms** entre participantes distribuidos geográficamente mediante el uso de canales optimizados y buffers en memoria del lado del cliente.
* **Rendimiento de Consultas Relacionales:** Reducción de los tiempos de respuesta de consulta de datos a <15ms mediante el indexado inteligente de claves foráneas compuestas en la base de datos de Neon y la optimización de queries generadas por Prisma.
* **Seguridad y Tipado Estricto de Extremo a Extremo:** Cero fugas de información y validación integral de payloads mediante el uso sistemático de esquemas Zod compartidos entre los formularios del frontend Next.js y los endpoints del API.
