---
hidden: false
liveNow: false
order: 1
imgInicio: "/images/LearnixPhoto.png"
title: Learnix
description: Pagina de Cursos para el desarrollo de conocimientos en el sector IT. Con sistema de pagos y base de datos.
link: "https://learnix-app.vercel.app/"
github: "https://github.com/BlasVernazza06/learnix-app.git"
technologies:
  - nombre: NextJs
    imagen: "/TechIcons/nextjs_icon_dark.svg" # versión clara del logo
    class: "bg-[#000000]" # negro oficial de Next.js

  - nombre: Stripe
    imagen: "/TechIcons/icon-stripe.svg"
    class: "bg-[#2114F2]" # violeta oficial de Stripe

  - nombre: Supabase
    imagen: "/TechIcons/supabase.svg"
    class: "bg-[#18181B]"

otherTechnologies:
  - nombre: Tailwind
    imagen: "/TechIcons/icons-tailwind.svg"
    class: "bg-[#0F172A]" # gris oscuro → resalta el celeste

  - nombre: Gsap
    imagen: "/TechIcons/gsap-white.svg" # versión clara del logo
    class: "bg-[#88CE02]" # verde lima oficial de GSAP
---

## Sobre el Proyecto

Learnix es una plataforma educativa diseñada para democratizar el acceso al conocimiento tecnológico. El objetivo principal fue crear una experiencia de usuario fluida y profesional, similar a las grandes plataformas de e-learning del mercado.

La aplicación permite a los usuarios navegar por un catálogo de cursos, realizar pagos seguros y gestionar su progreso educativo de manera intuitiva.

## Desafíos Técnicos

### Integración de Pagos con Stripe

Uno de los mayores retos fue implementar un flujo de pagos robusto. Utilicé Stripe para gestionar transacciones, asegurando que el acceso a los cursos se desbloqueara automáticamente tras una compra exitosa mediante webhooks.

### Animaciones de Alto Nivel con GSAP

Para darle ese toque "premium", implementé animaciones complejas usando GSAP. Desde transiciones de página suaves hasta efectos de scroll parallax que hacen que la navegación sea una experiencia visual atractiva.

### Gestión de Datos Relacionales

Con Supabase como backend, diseñé una estructura de base de datos eficiente para manejar usuarios, cursos, inscripciones y perfiles, garantizando consultas rápidas y escalabilidad.

## Características Principales

- **Dashboard de Usuario**: Visualización clara de los cursos adquiridos y progreso.
- **Pasarela de Pagos Segura**: Integración completa con Stripe.
- **Diseño Responsivo**: Optimizado para cualquier dispositivo utilizando Tailwind CSS.
- **Backend Escalable**: Autenticación y base de datos gestionada con Supabase.
