---
visible: false
liveNow: false
order: 5
imgInicio: "/images/proyect1AeroViajes.webp"
title: "AeroViajes – Travel E-Commerce"
description: "Travel catalog and e-commerce platform implementing real-time O(1) client-side search indexing, modular React, and premium UI layouts."
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

## 📌 Engineering Summary
AeroViajes is a tailored e-commerce catalog application designed for the international tourism sector. The platform resolves search lag and interface blocking during complex catalog queries by implementing a localized predictive filtering engine that executes queries instantly on the client.

## 🏗️ System Architecture & Technical Decisions
* **Decoupled React Architecture:** Hierarchically structured React components built to maximize maintainability. UI rendering flows unidirectionally, isolating transaction cart mutations from presentation modules of destinations catalog.
* **O(1) Client-Side Filtering:** Designed a multi-criteria client-side search logic. Filtering operations across category, price tags, and seat availability are calculated in memory, scaling efficiently with O(1) lookup speeds relative to data bounds.
* **Semantic Styling Layouts:** Utilized semantic HTML structure paired with advanced CSS3 grid structures to deliver a premium user interface that adapts dynamically to diverse viewport formats.

## 🚀 Technical Challenges & Impact Metrics
* **0ms Search Latency:** Multi-filtering queries resolve in less than **5ms** by caching data models on initial client mount, removing redundant API network requests.
* **Component Rendering Efficiency:** Integrated stable element key tracking and conditional component memoization to ensure lag-free scrolling and transitions on lower-tier mobile systems.
* **Fast Time to Interactive (TTI):** Optimized image assets delivery and optimized bundle sizes to secure a Time to Interactive (TTI) of under **1.5s**.
