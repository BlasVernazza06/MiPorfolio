---
hidden: false
liveNow: false
order: 6
imgInicio: "/images/LearnixPhoto.png"
title: "Learnix – Plataforma LMS Escalable"
description: "Plataforma de e-learning transaccional con integración de pasarelas de pago resilientes, animaciones complejas de UI y persistencia escalable."
link: "https://learnix-app.vercel.app/"
github: "https://github.com/BlasVernazza06/learnix-app.git"
technologies:
  - nombre: NextJs
    imagen: "/TechIcons/nextjs_icon_dark.svg"
    class: "bg-[#000000]"

  - nombre: Stripe
    imagen: "/TechIcons/icon-stripe.svg"
    class: "bg-[#2114F2]"

  - nombre: Supabase
    imagen: "/TechIcons/supabase.svg"
    class: "bg-[#18181B]"

otherTechnologies:
  - nombre: Tailwind
    imagen: "/TechIcons/icons-tailwind.svg"
    class: "bg-[#0F172A]"

  - nombre: Gsap
    imagen: "/TechIcons/gsap-white.svg"
    class: "bg-[#88CE02]"
---

## 📌 Resumen de Ingeniería
Learnix es un sistema de gestión de aprendizaje (LMS) robusto y de alto impacto diseñado para optimizar la distribución de contenidos formativos y la monetización de cursos IT. El sistema resuelve el problema clásico del abandono de carritos y la inestabilidad en las transacciones implementando un flujo de checkout transaccional resistente a fallos, acompañado de interfaces altamente atractivas animadas a nivel de hardware.

## 🏗️ Arquitectura del Sistema & Decisiones Técnicas
* **Frontend y Renderizado en Next.js:** Desarrollado con Next.js utilizando rutas dinámicas e hibridación de renderizado (ISR/SSR) para servir catálogos estáticos de cursos instantáneos mientras se mantiene dinámico el dashboard de progreso de estudiantes.
* **Procesamiento de Pagos Resiliente:** Integración de Stripe Checkout en conjunción con API Routes de Next.js. El flujo de aprovisionamiento de cursos está automatizado mediante un sistema de webhooks asíncronos que asegura la idempotencia y la tolerancia a fallos transaccionales.
* **Base de Datos y Seguridad (Supabase):** Implementación de base de datos PostgreSQL alojada en Supabase. Se configuraron políticas de seguridad a nivel de fila (RLS) estrictas para garantizar que los perfiles y cursos adquiridos solo sean accesibles por los usuarios autenticados autorizados.
* **Animaciones Fluídas de Alta Fidelidad:** Implementación de GSAP (GreenSock Animation Platform) para transiciones de UI no bloqueantes y experiencias de scroll dinámicas. El renderizado y cálculo matemático de trayectorias animadas se vinculó directamente a la GPU del navegador mediante transformaciones CSS3 optimizadas.

## 🚀 Desafíos Técnicos & Métricas de Impacto
* **Conciliación e Idempotencia en Pagos:** Diseño de un backend transaccional con una tasa de error del 0% en la entrega de licencias de cursos al implementar un sistema de encolado y reintentos para Stripe Webhooks utilizando firmas criptográficas de verificación.
* **Fidelidad y Rendimiento Visual (GSAP):** Logro de **60 FPS** consistentes en animaciones complejas en dispositivos móviles de gama media gracias a la optimización de repintados del DOM y la prevención de "Layout Thrashing".
* **Velocidad de Carga del Catálogo (LCP):** Optimización del Largest Contentful Paint a **<1.2s** usando generación estática incremental (ISR) en Next.js y optimización automatizada de imágenes.
