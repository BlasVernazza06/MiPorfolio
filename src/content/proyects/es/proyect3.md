---
hidden: false
liveNow: true
order: 3
imgInicio: "/images/MelonsApp.png"
title: "MelonApp – Workspace Kanban Colaborativo con Sincronización State-Tree en Tiempo Real"
description: "Plataforma de gestión ágil con motor drag-and-drop optimizado, sincronización de estado bidireccional y suscripciones en tiempo real."
link: "https://melonsapp.netlify.app/"
github: "https://github.com/BlasVernazza06/Melon.git"
technologies:
  - nombre: React JS
    imagen: "/TechIcons/icons-react.svg"
    class: "bg-[#003159]"

  - nombre: Supabase
    imagen: "/TechIcons/supabase.svg"
    class: "bg-[#18181B]"

  - nombre: DndKit
    imagen: "/TechIcons/dndkit.png"
    class: "bg-[#000000]"

otherTechnologies:
  - nombre: Tailwind
    imagen: "/TechIcons/icons-tailwind.svg"
    class: "bg-[#0F172A]"
---

## 📌 Resumen de Ingeniería
MelonApp es una herramienta de productividad y gestión de proyectos de alto rendimiento inspirada en Kanban. Resuelve la complejidad de la colaboración concurrente multiusuario y la inestabilidad de las actualizaciones del layout visual mediante una arquitectura reactiva basada en sockets en tiempo real y una suite avanzada de detección de colisiones e interacciones físicas en el cliente.

## 🏗️ Arquitectura del Sistema & Decisiones Técnicas
* **Frontend reactivo en React JS:** Construido sobre React utilizando patrones de renderizado selectivo para evitar que cambios de estado locales en tarjetas Kanban individuales desencadenen re-renderizados masivos en todo el tablero.
* **Sincronización en Tiempo Real (Supabase):** Implementación de canales de replicación lógica y sockets en tiempo real (Supabase Realtime) para mantener los tableros y columnas sincronizados al instante entre todos los colaboradores sin necesidad de encuestas recurrentes de HTTP (Polling).
* **Motor Drag-and-Drop (DndKit):** Integración del ecosistema modular `@dnd-kit/core` para gestionar arrastres y ordenamiento de tarjetas con aceleración por hardware y soporte nativo para punteros móviles (Pointer Events) y accesibilidad de teclado.
* **Seguridad Transaccional:** Uso de base de datos PostgreSQL en Supabase protegida por políticas RLS y triggers automáticos que recalculan los índices posicionales de las columnas al mover tarjetas para evitar duplicidades de ordenamiento.

## 🚀 Desafíos Técnicos & Métricas de Impacto
* **Sincronización Multiusuario <100ms:** Transmisión y renderizado de cambios en la posición de tarjetas entre usuarios concurrentes en menos de **100ms** mediante la serialización optimizada de payloads de eventos Supabase.
* **Rendimiento de Renderizado de Drag & Drop:** Logro de **60 FPS** consistentes al arrastrar tarjetas sobre tableros densificados (más de 150 elementos en pantalla) mediante la virtualización y la optimización del árbol de estados anidados.
* **Robustez ante Errores de Red:** Implementación de cambios optimistas de UI en el cliente con reversión de estado automatizada si la mutación en la base de datos de Supabase falla o experimenta timeout.
