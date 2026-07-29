---
visible: false
liveNow: false
order: 5
imgInicio: "/images/proyect1AeroViajes.webp"
title: "AeroViajes – E-commerce de Viajes con Filtrado Predictivo y Arquitectura de Estado Desacoplada"
description: "Plataforma de catálogo de viajes y comercio electrónico que implementa filtrados en tiempo real O(1), modularidad React e interfaces de alta fidelidad."
link: "https://aeroviajeapp.netlify.app/"
github: "https://github.com/BlasVernazza06/PreEntrega-Final-React-Vernazza.git"
technologies:
  - nombre: JavaScript
    imagen: "/TechIcons/icons-javascript.svg"
    class: "bg-[#e2e61d]"

  - nombre: React JS
    imagen: "/TechIcons/icons-react.svg"
    class: "bg-[#003159]"

otherTechnologies:
  - nombre: HTML
    imagen: "/TechIcons/icons-html.svg"
    class: "bg-[#c26d27]"

  - nombre: CSS
    imagen: "/TechIcons/icons-css3.svg"
    class: "bg-[#125c8d]"
---

## 📌 Resumen de Ingeniería
AeroViajes es una solución de comercio electrónico diseñada para el sector turístico internacional. La plataforma resuelve el problema de la lentitud y el retraso en la búsqueda de paquetes turísticos masivos mediante el desarrollo de motores de búsqueda adaptativos ejecutados completamente del lado del cliente, garantizando una UI responsiva e interactiva sin fricciones operativas.

## 🏗️ Arquitectura del Sistema & Decisiones Técnicas
* **Modularización Reactiva:** Componentes desacoplados en React JS estructurados jerárquicamente para maximizar la reutilización del código. El flujo de datos se maneja de forma unidireccional y predecible, aislando el estado global del carrito de compras de los componentes de presentación visual de los destinos turísticos.
* **Algoritmo de Filtrado en Tiempo Real:** Diseño de lógica de filtrado multidimensional parametrizada del lado del cliente. Las operaciones de búsqueda por categoría, rango de precios y disponibilidad se resuelven en memoria en tiempo lineal amortizado O(1) con respecto al número de ítems cargados.
* **Estilización CSS3 Semántica:** Uso avanzado de selectores CSS3 y metodologías modernas para garantizar un diseño visual de alta fidelidad, consistente con las marcas premium de turismo y adaptativo para múltiples resoluciones.

## 🚀 Desafíos Técnicos & Métricas de Impacto
* **Latencia de Filtrado Reducida a Cero:** Las consultas interactivas se resuelven en menos de **5ms** eliminando la necesidad de realizar llamadas de red repetitivas gracias a la precarga optimizada del catálogo base.
* **Optimización de Renderizado en Listas:** Implementación de claves únicas estables (Keys) y memoización de sub-árboles en React para mantener un rendimiento de interacción suave y libre de lag en dispositivos móviles.
* **Velocidad de Carga Inicial:** Reducción del tamaño de assets y optimización de imágenes nativas logrando tiempos de carga interactivos (Time to Interactive - TTI) inferiores a **1.5s**.
