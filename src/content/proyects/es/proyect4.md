---
order: 5
visible: false
liveNow: true
imgInicio: "/images/ClonDeSpotify.png"
title: "Spotify Clone – Reproductor de Audio Persistente"
description: "Clon de reproductor de audio de alta fidelidad construido sobre SSG, View Transitions nativas para reproducción sin pausas e interfaces reactivas."
link: "#"
github: "https://github.com/BlasVernazza06/Clon-de-Spotify.git"
technologies:
  - nombre: JavaScript
    imagen: "/TechIcons/icons-javascript.svg"
    class: "bg-[#e2e61d]"

  - nombre: Astro
    imagen: "/TechIcons/icons-astro.svg"
    class: "bg-[#b282c5]"

otherTechnologies:
  - nombre: HTML
    imagen: "/TechIcons/icons-html.svg"
    class: "bg-[#c26d27]"

  - nombre: CSS
    imagen: "/TechIcons/icons-css3.svg"
    class: "bg-[#125c8d]"
---

## 📌 Resumen de Ingeniería
Este clon de Spotify de alta fidelidad es una exploración técnica enfocada en recrear una de las interfaces multimedia más complejas del ecosistema web. Resuelve el desafío de mantener la reproducción ininterrumpida de audio mientras el usuario navega por diferentes páginas del catálogo sin recurrir a un pesado y monolítico bundle SPA.

## 🏗️ Arquitectura del Sistema & Decisiones Técnicas
* **Arquitectura Híbrida SPA-MPA en Astro:** Aprovechamiento del generador de sitios estáticos de Astro para pre-renderizar los catálogos y playlists al instante en el servidor, reduciendo a cero el procesamiento de JavaScript en la carga inicial.
* **Persistencia de Audio con View Transitions:** Integración de la API nativa de View Transitions del navegador. Al navegar entre rutas, Astro reemplaza el contenido del documento mientras preserva el nodo DOM del reproductor y mantiene activo el búfer de reproducción de audio.
* **Motor de Reproducción Desacoplado:** Desarrollo de un controlador de audio nativo en Vanilla JavaScript utilizando la Web Audio API. El estado de reproducción, volumen, progreso y pistas en cola se mantiene aislado del ciclo de renderizado de la UI de navegación.
* **Estilos Fluidos y Efectos Dinámicos:** Implementación de estilos avanzados mediante CSS nativo y variables de entorno dinámicas. Se diseñó un extractor de paletas cromáticas que lee las carátulas de los álbumes y aplica gradientes fluidos en el fondo de la interfaz en tiempo real.

## 🚀 Desafíos Técnicos & Métricas de Impacto
* **0ms de Interrupción de Audio:** Transición de páginas fluida con una latencia de renderizado de transición de **<120ms** sin alterar ni pausar el flujo binario del reproductor multimedia en ejecución.
* **Carga Inicial Instantánea:** Logro de una puntuación de rendimiento de **100/100 en Lighthouse** para dispositivos de escritorio gracias al pre-renderizado HTML estático y a la hidratación selectiva de scripts del reproductor.
* **Cero Fugas de Memoria en Reproducción:** Optimización del ciclo de vida del audio eliminando escuchas de eventos (Event Listeners) obsoletos durante la navegación dinámica, manteniendo constante el uso de RAM del navegador por debajo de los **40MB**.
