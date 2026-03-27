---
hidden: false
liveNow: true
order: 4
imgInicio: "/images/MelonsApp.png"
title: MelonApp
description: Melon es una app de gestión de tareas estilo Trello, desarrollada con Supabase.
link: "https://melonsapp.netlify.app/"
github: "https://github.com/BlasVernazza06/Melon.git"
technologies:
  - nombre: React JS
    imagen: "/TechIcons/icons-react.svg"
    class: "bg-[#003159]"

  - nombre: Tailwind
    imagen: "/TechIcons/icons-tailwind.svg"
    class: "bg-[#0F172A]"

  - nombre: Supabase
    imagen: "/TechIcons/supabase.svg"
    class: "bg-[#18181B]"
---

## Sobre el Proyecto

MelonApp es una herramienta de productividad inspirada en Trello, diseñada para ayudar a equipos e individuos a organizar sus flujos de trabajo de manera visual y efectiva. Con una interfaz limpia y un enfoque en la experiencia de usuario, Melon permite gestionar proyectos complejos a través de tableros, listas y tarjetas.

## Desafíos de Implementación

### Funcionalidad Drag & Drop

El desafío principal fue implementar un sistema de arrastrar y soltar fluido para las tarjetas y columnas. Esto requería una gestión precisa del estado para asegurar que los cambios se reflejaran instantáneamente tanto en la interfaz como en el servidor.

### Tiempo Real con Supabase

Utilicé las capacidades de base de datos en tiempo real de Supabase para permitir que los cambios realizados por un usuario se reflejen automáticamente en las sesiones de otros colaboradores, permitiendo una colaboración síncrona real.

### Arquitectura de Estado

La gestión de estados anidados (Tableros > Columnas > Tarjetas) se manejó de manera eficiente para evitar renderizados innecesarios y mantener la aplicación veloz incluso con gran volumen de datos.

## Características Principales

- **Tableros Colaborativos**: Creación y gestión de múltiples espacios de trabajo.
- **Sistema de Arrastrar y Soltar**: Interfaz intuitiva para mover tareas entre diferentes estados.
- **Autenticación Segura**: Sistema de login y registro integrado con Supabase Auth.
- **Persistencia Total**: Tus datos están siempre seguros y sincronizados en la nube.
